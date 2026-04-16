import { Schema, model, Document } from 'mongoose'

export interface IBlog extends Document {
  title: string
  slug: string
  description: string
  content: string
  image: string
  category: string
  tags: string[]
  author: string
  date: string
  readTime: string
  published: boolean
  featured: boolean
}

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, trim: true, maxlength: 200 },
    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^[a-z0-9-]+$/, 'Slug may only contain lowercase letters, numbers, and hyphens'],
    },
    description: { type: String, required: true, trim: true, maxlength: 500 },
    content: { type: String, required: true },
    image: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ['Surf Tips', 'Sri Lanka', 'Gear', 'Lifestyle', 'News'],
    },
    tags: { type: [String], default: [] },
    author: { type: String, required: true, trim: true, default: 'Noah Surf School' },
    date: { type: String, required: true },
    readTime: { type: String, required: true },
    published: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
)

// Ensure only one blog can be featured at a time
blogSchema.pre('save', async function (next) {
  if (this.featured && this.isModified('featured')) {
    await Blog.updateMany({ _id: { $ne: this._id }, featured: true }, { featured: false })
  }
  next()
})

// Index for fast slug lookups and listing
blogSchema.index({ slug: 1 })
blogSchema.index({ published: 1, createdAt: -1 })
blogSchema.index({ category: 1, published: 1 })

export const Blog = model<IBlog>('Blog', blogSchema)
