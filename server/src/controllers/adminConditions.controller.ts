import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { SurfConditions } from '../models/SurfConditions'

export async function getConditions(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const record = await SurfConditions.findOne().lean()
    res.json({ success: true, data: record ?? null })
  } catch (err) {
    next(err)
  }
}

export async function updateConditions(
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
    const { waveHeight, wind, waterTemp, airTemp, conditions } = req.body as {
      waveHeight: string
      wind: string
      waterTemp: string
      airTemp: string
      conditions: string
    }

    const record = await SurfConditions.findOneAndUpdate(
      {},
      { waveHeight, wind, waterTemp, airTemp, conditions },
      { new: true, upsert: true, runValidators: true },
    )

    res.json({ success: true, data: record })
  } catch (err) {
    next(err)
  }
}
