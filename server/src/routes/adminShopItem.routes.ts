import { Router } from 'express'
import { body } from 'express-validator'
import { protect } from '../middleware/auth'
import {
  listAll,
  create,
  update,
  remove,
  togglePublish,
} from '../controllers/adminShopItem.controller'

const router = Router()

router.use(protect)

const shopItemValidation = [
  body('title').trim().notEmpty().withMessage('Title is required').isLength({ max: 100 }),
  body('description').trim().notEmpty().withMessage('Description is required').isLength({ max: 500 }),
  body('image').trim().notEmpty().withMessage('Image is required'),
  body('alt').trim().notEmpty().withMessage('Alt text is required'),
  body('price').isNumeric().withMessage('Price must be a number').isFloat({ min: 0 }),
  body('published').optional().isBoolean(),
  body('order').optional().isInt({ min: 0 }),
]

router.get('/', listAll)
router.post('/', shopItemValidation, create)
router.put('/:id', shopItemValidation, update)
router.delete('/:id', remove)
router.patch('/:id/toggle-publish', togglePublish)

export default router
