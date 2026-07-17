import { Router } from 'express'
import { body } from 'express-validator'
import { protect } from '../middleware/auth'
import { getConditions, updateConditions, deleteConditions } from '../controllers/adminConditions.controller'

const router = Router()

router.use(protect)

const validation = [
  body('waveHeight').optional({ checkFalsy: true }).trim(),
  body('wind').optional({ checkFalsy: true }).trim(),
  body('waterTemp').optional({ checkFalsy: true }).trim(),
  body('airTemp').optional({ checkFalsy: true }).trim(),
  body('conditions').optional({ checkFalsy: true }).trim(),
]

router.get('/', getConditions)
router.put('/', validation, updateConditions)
router.delete('/', deleteConditions)

export default router
