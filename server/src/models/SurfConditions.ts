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
    waveHeight:  { type: String, required: true, trim: true },
    wind:        { type: String, required: true, trim: true },
    waterTemp:   { type: String, required: true, trim: true },
    airTemp:     { type: String, required: true, trim: true },
    conditions:  { type: String, required: true, trim: true },
  },
  { timestamps: true },
)

export const SurfConditions = model<ISurfConditions>('SurfConditions', surfConditionsSchema)
