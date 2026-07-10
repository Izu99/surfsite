import 'dotenv/config'
import path from 'path'
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
import conditionsRoutes from './routes/conditions.routes'
import adminConditionsRoutes from './routes/adminConditions.routes'
import shopItemRoutes from './routes/shopItem.routes'
import adminShopItemRoutes from './routes/adminShopItem.routes'
import bookingRoutes from './routes/booking.routes'
import adminBookingRoutes from './routes/adminBooking.routes'
import faqRoutes from './routes/faq.routes'
import adminFaqRoutes from './routes/adminFaq.routes'
import uploadRoutes from './routes/upload.routes'
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
app.use(express.urlencoded({ extended: true, limit: '1mb' }))
app.use(cookieParser())

// ── Logging ──────────────────────────────────────────────────────
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

// ── Static files (uploaded images) ──────────────────────────────
// helmet's default Cross-Origin-Resource-Policy: same-origin blocks the
// client (a different origin) from rendering these images directly via
// <img src>. Relax it to cross-origin for this route only — the rest of
// the API keeps helmet's stricter defaults.
app.use(
  '/uploads',
  (req, res, next) => {
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
    next()
  },
  express.static(path.join(process.cwd(), 'uploads')),
)

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
app.use('/api/conditions', apiLimiter, conditionsRoutes)
app.use('/api/admin/conditions', apiLimiter, adminConditionsRoutes)
app.use('/api/shop', apiLimiter, shopItemRoutes)
app.use('/api/admin/shop', apiLimiter, adminShopItemRoutes)
app.use('/api/bookings', apiLimiter, bookingRoutes)
app.use('/api/admin/bookings', apiLimiter, adminBookingRoutes)
app.use('/api/faqs', apiLimiter, faqRoutes)
app.use('/api/admin/faqs', apiLimiter, adminFaqRoutes)
app.use('/api/admin/upload', apiLimiter, uploadRoutes)

// ── Error handling ───────────────────────────────────────────────
app.use(notFound)
app.use(errorHandler)

// ── Bootstrap ────────────────────────────────────────────────────
const PORT = parseInt(process.env.PORT || '5000')

const HOST = process.env.HOST || '127.0.0.1'

async function bootstrap() {
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    console.error('❌  JWT_SECRET is missing or too short (min 32 chars). Exiting.')
    process.exit(1)
  }
  await connectDB()
  app.listen(PORT, HOST, () => {
    console.log(`🚀  API running at http://${HOST}:${PORT}`)
    console.log(`📋  Health: http://${HOST}:${PORT}/health`)
  })
}

bootstrap()

export default app
