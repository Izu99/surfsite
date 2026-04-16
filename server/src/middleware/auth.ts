import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { Admin } from '../models/Admin'

interface JwtPayload {
  id: string
  username: string
}

// Extend Express Request to carry admin info
declare global {
  namespace Express {
    interface Request {
      admin?: { id: string; username: string; email: string }
    }
  }
}

export async function protect(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  let token: string | undefined

  // Accept token from Authorization header or cookie
  if (req.headers.authorization?.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1]
  } else if (req.cookies?.token) {
    token = req.cookies.token as string
  }

  if (!token) {
    res.status(401).json({ success: false, message: 'Not authenticated' })
    return
  }

  try {
    const secret = process.env.JWT_SECRET!
    const decoded = jwt.verify(token, secret) as JwtPayload
    const admin = await Admin.findById(decoded.id).select('-password')

    if (!admin) {
      res.status(401).json({ success: false, message: 'Admin no longer exists' })
      return
    }

    req.admin = {
      id: admin.id as string,
      username: admin.username,
      email: admin.email,
    }
    next()
  } catch {
    res.status(401).json({ success: false, message: 'Invalid or expired token' })
  }
}
