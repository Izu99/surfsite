import { Router } from 'express'
import { body } from 'express-validator'
import { protect } from '../middleware/auth'
import { getConditions, updateConditions } from '../controllers/adminConditions.controller'

const router = Router()

router.use(protect)

const validation = [
  body('waveHeight').trim().notEmpty().withMessage('Wave height is required'),
  body('wind').trim().notEmpty().withMessage('Wind is required'),
  body('waterTemp').trim().notEmpty().withMessage('Water temp is required'),
  body('airTemp').trim().notEmpty().withMessage('Air temp is required'),
  body('conditions').trim().notEmpty().withMessage('Conditions is required'),
]

router.get('/', getConditions)
router.put('/', validation, updateConditions)

export default router
