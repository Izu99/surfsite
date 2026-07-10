import { Schema, model, Document } from 'mongoose'

export interface IFaq extends Document {
  question: string
  answer: string
  published: boolean
  order: number
}

const faqSchema = new Schema<IFaq>(
  {
    question: { type: String, required: true, trim: true, maxlength: 300 },
    answer: { type: String, required: true, trim: true },
    published: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

faqSchema.index({ published: 1, order: 1 })

export const Faq = model<IFaq>('Faq', faqSchema)
