import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import { Admin } from '../models/Admin'

function signToken(id: string, username: string): string {
  return jwt.sign({ id, username }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  } as jwt.SignOptions)
}

/**
 * POST /api/auth/register
 * Creates the single admin account. Fails if one already exists.
 * Intended for use with curl only — no public frontend form.
 */
export async function register(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(422).json({ success: false, errors: errors.array() })
    return
  }

  try {
    const count = await Admin.countDocuments()
    if (count > 0) {
      res.status(409).json({
        success: false,
        message: 'An admin account already exists. Only one admin is allowed.',
      })
      return
    }

    const { username, email, password } = req.body as {
      username: string
      email: string
      password: string
    }

    const admin = await Admin.create({ username, email, password })
    const token = signToken(admin.id as string, admin.username)

    res.status(201).json({
      success: true,
      message: 'Admin account created successfully.',
      token,
      admin: { id: admin.id, username: admin.username, email: admin.email },
    })
  } catch (err) {
    next(err)
  }
}

/**
 * POST /api/auth/login
 * Accepts username or email + password.
 */
export async function login(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(422).json({ success: false, errors: errors.array() })
    return
  }

  try {
    const { identifier, password } = req.body as {
      identifier: string
      password: string
    }

    const normalized = identifier.toLowerCase().trim()

    // Find by username or email — include password for comparison
    const admin = await Admin.findOne({
      $or: [{ username: normalized }, { email: normalized }],
    }).select('+password')

    if (!admin || !(await admin.comparePassword(password))) {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      })
      return
    }

    const token = signToken(admin.id as string, admin.username)

    // Optionally set secure httpOnly cookie in addition to returning the token
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })

    res.json({
      success: true,
      token,
      admin: { id: admin.id, username: admin.username, email: admin.email },
    })
  } catch (err) {
    next(err)
  }
}

/**
 * GET /api/auth/me
 * Returns the currently authenticated admin's profile.
 */
export async function getMe(
  req: Request,
  res: Response,
): Promise<void> {
  res.json({ success: true, admin: req.admin })
}

/**
 * POST /api/auth/logout
 */
export function logout(_req: Request, res: Response): void {
  res.clearCookie('token')
  res.json({ success: true, message: 'Logged out successfully' })
}
