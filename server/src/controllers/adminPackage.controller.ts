import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { Package } from '../models/Package'

/**
 * GET /api/admin/packages
 */
export async function listAll(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const page = Math.max(1, parseInt(String(req.query.page ?? '1')))
    const limit = Math.min(50, Math.max(1, parseInt(String(req.query.limit ?? '20'))))
    const skip = (page - 1) * limit

    const [packages, total] = await Promise.all([
      Package.find().sort({ order: 1, createdAt: -1 }).skip(skip).limit(limit).lean(),
      Package.countDocuments(),
    ])

    res.json({
      success: true,
      data: packages,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    })
  } catch (err) {
    next(err)
  }
}

/**
 * POST /api/admin/packages
 */
export async function create(
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
    const {
      name, level, format, duration, price, priceNote,
      souvenir, featured, published, order, image,
    } = req.body as {
      name: string; level: string; format: string; duration: string
      price: number; priceNote: string; souvenir?: boolean
      featured?: boolean; published?: boolean; order?: number; image: string
    }
    const pkg = await Package.create({
      name, level, format, duration, price, priceNote,
      souvenir, featured, published, order, image,
    })
    res.status(201).json({ success: true, data: pkg })
  } catch (err) {
    next(err)
  }
}

/**
 * PUT /api/admin/packages/:id
 */
export async function update(
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
    const {
      name, level, format, duration, price, priceNote,
      souvenir, featured, published, order, image,
    } = req.body as Partial<{
      name: string; level: string; format: string; duration: string
      price: number; priceNote: string; souvenir: boolean
      featured: boolean; published: boolean; order: number; image: string
    }>
    const pkg = await Package.findByIdAndUpdate(
      req.params.id,
      { name, level, format, duration, price, priceNote, souvenir, featured, published, order, image },
      { new: true, runValidators: true },
    )
    if (!pkg) {
      res.status(404).json({ success: false, message: 'Package not found' })
      return
    }
    res.json({ success: true, data: pkg })
  } catch (err) {
    next(err)
  }
}

/**
 * DELETE /api/admin/packages/:id
 */
export async function remove(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const pkg = await Package.findByIdAndDelete(req.params.id)
    if (!pkg) {
      res.status(404).json({ success: false, message: 'Package not found' })
      return
    }
    res.json({ success: true, message: 'Package deleted' })
  } catch (err) {
    next(err)
  }
}

/**
 * PATCH /api/admin/packages/:id/toggle-publish
 */
export async function togglePublish(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const pkg = await Package.findById(req.params.id)
    if (!pkg) {
      res.status(404).json({ success: false, message: 'Package not found' })
      return
    }
    pkg.published = !pkg.published
    await pkg.save()
    res.json({ success: true, data: pkg })
  } catch (err) {
    next(err)
  }
}
