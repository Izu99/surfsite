import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { ShopItem } from '../models/ShopItem'

export async function listAll(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const page = Math.max(1, parseInt(String(req.query.page ?? '1')))
    const limit = Math.min(50, Math.max(1, parseInt(String(req.query.limit ?? '20'))))
    const skip = (page - 1) * limit

    const [items, total] = await Promise.all([
      ShopItem.find().sort({ order: 1, createdAt: -1 }).skip(skip).limit(limit).lean(),
      ShopItem.countDocuments(),
    ])

    res.json({
      success: true,
      data: items,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    })
  } catch (err) {
    next(err)
  }
}

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
    const { title, description, image, alt, price, published, order } = req.body as {
      title: string; description: string; image: string; alt: string
      price: number; published?: boolean; order?: number
    }
    const item = await ShopItem.create({ title, description, image, alt, price, published, order })
    res.status(201).json({ success: true, data: item })
  } catch (err) {
    next(err)
  }
}

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
    const { title, description, image, alt, price, published, order } = req.body as Partial<{
      title: string; description: string; image: string; alt: string
      price: number; published: boolean; order: number
    }>
    const item = await ShopItem.findByIdAndUpdate(
      req.params.id,
      { title, description, image, alt, price, published, order },
      { new: true, runValidators: true },
    )
    if (!item) {
      res.status(404).json({ success: false, message: 'Shop item not found' })
      return
    }
    res.json({ success: true, data: item })
  } catch (err) {
    next(err)
  }
}

export async function remove(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const item = await ShopItem.findByIdAndDelete(req.params.id)
    if (!item) {
      res.status(404).json({ success: false, message: 'Shop item not found' })
      return
    }
    res.json({ success: true, message: 'Shop item deleted' })
  } catch (err) {
    next(err)
  }
}

export async function togglePublish(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const item = await ShopItem.findById(req.params.id)
    if (!item) {
      res.status(404).json({ success: false, message: 'Shop item not found' })
      return
    }
    item.published = !item.published
    await item.save()
    res.json({ success: true, data: item })
  } catch (err) {
    next(err)
  }
}
