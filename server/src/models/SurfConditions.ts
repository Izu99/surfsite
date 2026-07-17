import { Schema, model, Document } from 'mongoose'

export interface ISurfConditions extends Document {
  waveHeight: string
  wind: string
  waterTemp: string
  airTemp: string
  conditions: string
}

const surfConditionsSchema = new Schema<ISurfConditions>(
  {
    waveHeight:  { type: String, default: '', trim: true },
    wind:        { type: String, default: '', trim: true },
    waterTemp:   { type: String, default: '', trim: true },
    airTemp:     { type: String, default: '', trim: true },
    conditions:  { type: String, default: '', trim: true },
  },
  { timestamps: true },
)

export const SurfConditions = model<ISurfConditions>('SurfConditions', surfConditionsSchema)
