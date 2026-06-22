import { Schema, model, Document } from 'mongoose'

const STATUSES = ['pending', 'confirmed', 'cancelled', 'completed'] as const
const SOURCES = ['form', 'whatsapp', 'walk-in'] as const

export type BookingStatus = (typeof STATUSES)[number]
export type BookingSource = (typeof SOURCES)[number]

export interface IBooking extends Document {
  name: string
  email: string
  phone: string
  packageName: string
  sessionDate: string
  sessionTime: string
  groupSize: number
  notes: string
  status: BookingStatus
  source: BookingSource
}

const bookingSchema = new Schema<IBooking>(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    packageName: { type: String, required: true, trim: true },
    sessionDate: { type: String, required: true, trim: true },
    sessionTime: { type: String, required: true, trim: true },
    groupSize: { type: Number, required: true, min: 1, max: 20 },
    notes: { type: String, default: '', trim: true },
    status: { type: String, required: true, enum: STATUSES, default: 'pending' },
    source: { type: String, required: true, enum: SOURCES, default: 'form' },
  },
  { timestamps: true },
)

bookingSchema.index({ status: 1, createdAt: -1 })

export const Booking = model<IBooking>('Booking', bookingSchema)
