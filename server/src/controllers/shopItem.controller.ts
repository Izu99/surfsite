import { Request, Response, NextFunction } from 'express'
import { ShopItem } from '../models/ShopItem'

export async function listPublished(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const items = await ShopItem.find({ published: true })
      .sort({ order: 1, createdAt: 1 })
      .lean()
    res.json({ success: true, data: items })
  } catch (err) {
    next(err)
  }
}
