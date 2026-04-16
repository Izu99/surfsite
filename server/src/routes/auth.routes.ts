import { Router } from 'express'
import { body } from 'express-validator'
import { register, login, getMe, logout } from '../controllers/auth.controller'
import { protect } from '../middleware/auth'

const router = Router()

router.post(
  '/register',
  [
    body('username')
      .trim()
      .isLength({ min: 3, max: 30 })
      .withMessage('Username must be 3–30 characters')
      .matches(/^[a-zA-Z0-9_]+$/)
      .withMessage('Username may only contain letters, numbers, and underscores'),
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters'),
  ],
  register,
)

router.post(
  '/login',
  [
    body('identifier').trim().notEmpty().withMessage('Username or email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  login,
)

router.get('/me', protect, getMe)
router.post('/logout', protect, logout)

export default router
