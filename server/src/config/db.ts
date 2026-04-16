import mongoose from 'mongoose'

let isConnected = false

export async function connectDB(): Promise<void> {
  if (isConnected) return

  const uri = process.env.MONGO_URI
  if (!uri) throw new Error('MONGO_URI is not defined in environment variables')

  try {
    await mongoose.connect(uri)
    isConnected = true
    console.log('✅  MongoDB connected')
  } catch (err) {
    console.error('❌  MongoDB connection error:', err)
    process.exit(1)
  }
}
