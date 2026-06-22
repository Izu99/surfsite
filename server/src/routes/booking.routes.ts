import { Router } from 'express'
import { body } from 'express-validator'
import { createBooking } from '../controllers/booking.controller'

const router = Router()

const bookingValidation = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Valid email required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('packageName').trim().notEmpty().withMessage('Package name is required'),
  body('sessionDate').trim().notEmpty().withMessage('Session date is required'),
  body('sessionTime').trim().notEmpty().withMessage('Session time is required'),
  body('groupSize').isInt({ min: 1, max: 20 }).withMessage('Group size must be between 1 and 20'),
  body('notes').optional().trim().isLength({ max: 1000 }),
]

router.post('/', bookingValidation, createBooking)

export default router
