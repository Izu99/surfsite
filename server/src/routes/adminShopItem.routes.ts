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
  body('title').optional({ checkFalsy: true }).trim().isLength({ max: 100 }),
  body('description').optional({ checkFalsy: true }).trim().isLength({ max: 500 }),
  body('image').optional({ checkFalsy: true }).trim(),
  body('alt').optional({ checkFalsy: true }).trim(),
  body('price').optional({ checkFalsy: true }).isFloat({ min: 0 }).withMessage('Price must be a positive number'),
  body('sizes').optional().isArray(),
  body('published').optional().isBoolean(),
  body('order').optional().isInt({ min: 0 }),
]

router.get('/', listAll)
router.post('/', shopItemValidation, create)
router.put('/:id', shopItemValidation, update)
router.delete('/:id', remove)
router.patch('/:id/toggle-publish', togglePublish)

export default router
