import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { Booking, type BookingStatus } from '../models/Booking'

export async function listAll(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const page = Math.max(1, parseInt(String(req.query.page ?? '1')))
    const limit = Math.min(100, Math.max(1, parseInt(String(req.query.limit ?? '30'))))
    const skip = (page - 1) * limit
    const statusFilter = req.query.status ? String(req.query.status) : undefined

    const query = statusFilter && statusFilter !== 'All' ? { status: statusFilter } : {}

    const [bookings, total] = await Promise.all([
      Booking.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Booking.countDocuments(query),
    ])

    res.json({
      success: true,
      data: bookings,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    })
  } catch (err) {
    next(err)
  }
}

export async function updateStatus(
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
    const { status } = req.body as { status: BookingStatus }
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true },
    )
    if (!booking) {
      res.status(404).json({ success: false, message: 'Booking not found' })
      return
    }
    res.json({ success: true, data: booking })
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
    const booking = await Booking.findByIdAndDelete(req.params.id)
    if (!booking) {
      res.status(404).json({ success: false, message: 'Booking not found' })
      return
    }
    res.json({ success: true, message: 'Booking deleted' })
  } catch (err) {
    next(err)
  }
}
