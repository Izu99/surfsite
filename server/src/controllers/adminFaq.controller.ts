import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { Faq } from '../models/Faq'

/**
 * GET /api/admin/faqs
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

    const [faqs, total] = await Promise.all([
      Faq.find().sort({ order: 1, createdAt: -1 }).skip(skip).limit(limit).lean(),
      Faq.countDocuments(),
    ])

    res.json({
      success: true,
      data: faqs,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    })
  } catch (err) {
    next(err)
  }
}

/**
 * POST /api/admin/faqs
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
    const { question, answer, published, order } = req.body as {
      question: string; answer: string; published?: boolean; order?: number
    }
    const faq = await Faq.create({ question, answer, published, order })
    res.status(201).json({ success: true, data: faq })
  } catch (err) {
    next(err)
  }
}

/**
 * PUT /api/admin/faqs/:id
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
    const { question, answer, published, order } = req.body as Partial<{
      question: string; answer: string; published: boolean; order: number
    }>
    const faq = await Faq.findByIdAndUpdate(
      req.params.id,
      { question, answer, published, order },
      { new: true, runValidators: true },
    )
    if (!faq) {
      res.status(404).json({ success: false, message: 'FAQ not found' })
      return
    }
    res.json({ success: true, data: faq })
  } catch (err) {
    next(err)
  }
}

/**
 * DELETE /api/admin/faqs/:id
 */
export async function remove(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const faq = await Faq.findByIdAndDelete(req.params.id)
    if (!faq) {
      res.status(404).json({ success: false, message: 'FAQ not found' })
      return
    }
    res.json({ success: true, message: 'FAQ deleted' })
  } catch (err) {
    next(err)
  }
}

/**
 * PATCH /api/admin/faqs/:id/toggle-publish
 */
export async function togglePublish(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const faq = await Faq.findById(req.params.id)
    if (!faq) {
      res.status(404).json({ success: false, message: 'FAQ not found' })
      return
    }
    faq.published = !faq.published
    await faq.save()
    res.json({ success: true, data: faq })
  } catch (err) {
    next(err)
  }
}
