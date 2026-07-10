import { Request, Response, NextFunction } from 'express'
import { Faq } from '../models/Faq'

/**
 * GET /api/faqs
 */
export async function listPublished(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const faqs = await Faq.find({ published: true }).sort({ order: 1, createdAt: -1 }).lean()
    res.json({ success: true, data: faqs })
  } catch (err) {
    next(err)
  }
}
