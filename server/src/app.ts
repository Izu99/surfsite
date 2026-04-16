import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'

import { connectDB } from './config/db'
import authRoutes from './routes/auth.routes'
import blogRoutes from './routes/blog.routes'
import adminBlogRoutes from './routes/adminBlog.routes'
import packageRoutes from './routes/package.routes'
import adminPackageRoutes from './routes/adminPackage.routes'
import { errorHandler, notFound } from './middleware/errorHandler'

const app = express()

// ── Security ────────────────────────────────────────────────────
app.use(helmet())
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
)

// ── Rate limiting ────────────────────────────────────────────────
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  message: { success: false, message: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
})

// ── Request parsing ──────────────────────────────────────────────
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// ── Logging ──────────────────────────────────────────────────────
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

// ── Health check ─────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ success: true, service: 'Noah Surf School API', status: 'ok' })
})

// ── Routes ───────────────────────────────────────────────────────
app.use('/api/auth', authLimiter, authRoutes)
app.use('/api/blogs', apiLimiter, blogRoutes)
app.use('/api/admin/blogs', apiLimiter, adminBlogRoutes)
app.use('/api/packages', apiLimiter, packageRoutes)
app.use('/api/admin/packages', apiLimiter, adminPackageRoutes)

// ── Error handling ───────────────────────────────────────────────
app.use(notFound)
app.use(errorHandler)

// ── Bootstrap ────────────────────────────────────────────────────
const PORT = parseInt(process.env.PORT || '5000')

async function bootstrap() {
  await connectDB()
  app.listen(PORT, () => {
    console.log(`🚀  API running at http://localhost:${PORT}`)
    console.log(`📋  Health: http://localhost:${PORT}/health`)
  })
}

bootstrap()

export default app
