import { Schema, model, Document } from 'mongoose'

export interface IShopItem extends Document {
  title: string
  description: string
  image: string
  alt: string
  price: number
  published: boolean
  order: number
}

const shopItemSchema = new Schema<IShopItem>(
  {
    title: { type: String, required: true, trim: true, maxlength: 100 },
    description: { type: String, required: true, trim: true, maxlength: 500 },
    image: { type: String, required: true, trim: true },
    alt: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    published: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

shopItemSchema.index({ published: 1, order: 1 })

export const ShopItem = model<IShopItem>('ShopItem', shopItemSchema)
