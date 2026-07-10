import { Schema, model, Document } from 'mongoose'

const LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Beginner-Advance', 'Surf Guide', 'Agency'] as const
type Level = (typeof LEVELS)[number]

export interface IPackage extends Document {
  name: string
  level: Level
  format: string
  duration: string
  price: number
  priceNote: string
  description: string
  shortDescription: string
  includes: string[]
  souvenir: boolean
  featured: boolean
  published: boolean
  order: number
  image: string
}

const packageSchema = new Schema<IPackage>(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    level: { type: String, required: true, enum: LEVELS },
    format: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    priceNote: { type: String, required: true, trim: true, default: 'per session' },
    description: { type: String, default: '', trim: true },
    shortDescription: { type: String, default: '', trim: true },
    includes: { type: [String], default: [] },
    souvenir: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    image: { type: String, required: true, trim: true },
  },
  { timestamps: true },
)

packageSchema.index({ published: 1, order: 1 })

export const Package = model<IPackage>('Package', packageSchema)
