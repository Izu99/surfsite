import { Schema, model, Document } from 'mongoose'

export interface IShopItem extends Document {
  title: string
  description: string
  image: string
  alt: string
  price: number
  sizes: string[]
  published: boolean
  order: number
}

const shopItemSchema = new Schema<IShopItem>(
  {
    title: { type: String, default: '', trim: true, maxlength: 100 },
    description: { type: String, default: '', trim: true, maxlength: 500 },
    image: { type: String, default: '', trim: true },
    alt: { type: String, default: '', trim: true },
    price: { type: Number, default: 0, min: 0 },
    sizes: { type: [String], default: [] },
    published: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

shopItemSchema.index({ published: 1, order: 1 })

export const ShopItem = model<IShopItem>('ShopItem', shopItemSchema)
