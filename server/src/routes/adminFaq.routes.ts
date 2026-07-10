import { Router } from 'express'
import { body } from 'express-validator'
import { protect } from '../middleware/auth'
import {
  listAll,
  create,
  update,
  remove,
  togglePublish,
} from '../controllers/adminFaq.controller'

const router = Router()

router.use(protect)

const faqValidation = [
  body('question').trim().notEmpty().withMessage('Question is required').isLength({ max: 300 }),
  body('answer').trim().notEmpty().withMessage('Answer is required'),
  body('published').optional().isBoolean(),
  body('order').optional().isInt({ min: 0 }),
]

router.get('/', listAll)
router.post('/', faqValidation, create)
router.put('/:id', faqValidation, update)
router.delete('/:id', remove)
router.patch('/:id/toggle-publish', togglePublish)

export default router
