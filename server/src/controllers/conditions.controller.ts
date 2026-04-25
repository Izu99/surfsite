import { Request, Response, NextFunction } from 'express'
import { SurfConditions } from '../models/SurfConditions'

const DEFAULTS = {
  waveHeight: '0.8 – 1.2 m',
  wind: '12 km/h SW',
  waterTemp: '27°C',
  airTemp: '31°C',
  conditions: 'Mellow Peaks',
}

export async function getConditions(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const record = await SurfConditions.findOne().lean()
    res.json({ success: true, data: record ?? DEFAULTS })
  } catch (err) {
    next(err)
  }
}
