import { Request, Response, NextFunction } from 'express'
import { Blog } from '../models/Blog'

/**
 * GET /api/blogs
 * Public — returns only published posts. Supports search, category filter, pagination.
 */
export async function listPublished(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const page = Math.max(1, parseInt(String(req.query.page ?? '1')))
    const limit = Math.min(50, Math.max(1, parseInt(String(req.query.limit ?? '20'))))
    const skip = (page - 1) * limit
    const { category, search } = req.query as { category?: string; search?: string }

    const filter: Record<string, unknown> = { published: true }

    if (category && category !== 'All') {
      filter.category = category
    }

    if (search) {
      const escaped = (search as string).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const q = { $regex: escaped, $options: 'i' }
      filter.$or = [{ title: q }, { description: q }, { tags: { $elemMatch: q } }]
    }

    const [blogs, total] = await Promise.all([
      Blog.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Blog.countDocuments(filter),
    ])

    res.json({
      success: true,
      data: blogs,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (err) {
    next(err)
  }
}

/**
 * GET /api/blogs/:slug
 * Public — returns a single published post by slug.
 */
export async function getBySlug(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
      published: true,
    }).lean()

    if (!blog) {
      res.status(404).json({ success: false, message: 'Blog post not found' })
      return
    }

    res.json({ success: true, data: blog })
  } catch (err) {
    next(err)
  }
}
