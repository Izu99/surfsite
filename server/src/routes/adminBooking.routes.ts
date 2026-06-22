import { Router } from 'express'
import { body } from 'express-validator'
import { protect } from '../middleware/auth'
import { listAll, updateStatus, remove } from '../controllers/adminBooking.controller'

const router = Router()

router.use(protect)

router.get('/', listAll)
router.patch(
  '/:id/status',
  [body('status').isIn(['pending', 'confirmed', 'cancelled', 'completed']).withMessage('Invalid status')],
  updateStatus,
)
router.delete('/:id', remove)

export default router
