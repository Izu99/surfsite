import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { Booking } from '../models/Booking'

export async function createBooking(
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
    const { name, email, phone, packageName, sessionDate, sessionTime, groupSize, notes } =
      req.body as {
        name: string; email: string; phone: string; packageName: string
        sessionDate: string; sessionTime: string; groupSize: number; notes?: string
      }

    const booking = await Booking.create({
      name, email, phone, packageName, sessionDate, sessionTime,
      groupSize, notes: notes ?? '', source: 'form',
    })

    res.status(201).json({ success: true, data: booking })
  } catch (err) {
    next(err)
  }
}
