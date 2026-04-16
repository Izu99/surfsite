import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { Blog } from '../models/Blog'

function calcReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  return `${Math.max(1, Math.ceil(words / 200))} min read`
}

function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

/**
 * GET /api/admin/blogs
 * Returns all posts (drafts + published) for admin management.
 */
export async function listAll(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean()
    res.json({ success: true, data: blogs })
  } catch (err) {
    next(err)
  }
}

/**
 * POST /api/admin/blogs
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
    const body = req.body as {
      title: string
      slug?: string
      description: string
      content: string
      image: string
      category: string
      tags?: string[]
      author?: string
      published?: boolean
      featured?: boolean
    }

    const slug = body.slug?.trim() || toSlug(body.title)

    // Unique slug check
    const exists = await Blog.findOne({ slug })
    if (exists) {
      res.status(409).json({ success: false, message: `Slug "${slug}" already exists. Change the title or provide a custom slug.` })
      return
    }

    const blog = await Blog.create({
      ...body,
      slug,
      readTime: calcReadTime(body.content),
      date: new Date().toISOString().split('T')[0],
      tags: body.tags ?? [],
      author: body.author?.trim() || 'Noah Surf School',
    })

    res.status(201).json({ success: true, data: blog })
  } catch (err) {
    next(err)
  }
}

/**
 * PUT /api/admin/blogs/:id
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
    const blog = await Blog.findById(req.params.id)
    if (!blog) {
      res.status(404).json({ success: false, message: 'Blog post not found' })
      return
    }

    const body = req.body as Partial<{
      title: string
      slug: string
      description: string
      content: string
      image: string
      category: string
      tags: string[]
      author: string
      published: boolean
      featured: boolean
    }>

    // If slug changed, check uniqueness
    if (body.slug && body.slug !== blog.slug) {
      const existing = await Blog.findOne({ slug: body.slug, _id: { $ne: blog._id } })
      if (existing) {
        res.status(409).json({ success: false, message: `Slug "${body.slug}" already taken` })
        return
      }
    }

    Object.assign(blog, body)

    if (body.content) {
      blog.readTime = calcReadTime(body.content)
    }

    await blog.save()
    res.json({ success: true, data: blog })
  } catch (err) {
    next(err)
  }
}

/**
 * DELETE /api/admin/blogs/:id
 */
export async function remove(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id)
    if (!blog) {
      res.status(404).json({ success: false, message: 'Blog post not found' })
      return
    }
    res.json({ success: true, message: 'Blog post deleted' })
  } catch (err) {
    next(err)
  }
}

/**
 * PATCH /api/admin/blogs/:id/toggle-publish
 */
export async function togglePublish(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const blog = await Blog.findById(req.params.id)
    if (!blog) {
      res.status(404).json({ success: false, message: 'Blog post not found' })
      return
    }
    blog.published = !blog.published
    await blog.save()
    res.json({ success: true, data: blog })
  } catch (err) {
    next(err)
  }
}
