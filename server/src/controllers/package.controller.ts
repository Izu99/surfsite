import { Request, Response, NextFunction } from 'express'
import { Package } from '../models/Package'

/**
 * GET /api/packages
 * Returns all published packages sorted by order then createdAt.
 */
export async function listPublished(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const packages = await Package.find({ published: true })
      .sort({ order: 1, createdAt: 1 })
      .lean()
    res.json({ success: true, data: packages })
  } catch (err) {
    next(err)
  }
}
