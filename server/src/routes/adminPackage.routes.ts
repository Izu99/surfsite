import { Router } from 'express'
import { body } from 'express-validator'
import { protect } from '../middleware/auth'
import {
  listAll,
  create,
  update,
  remove,
  togglePublish,
} from '../controllers/adminPackage.controller'

const router = Router()

router.use(protect)

const packageValidation = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('level')
    .trim()
    .notEmpty()
    .withMessage('Level is required')
    .isIn(['Beginner', 'Intermediate', 'Advanced', 'Beginner-Advance', 'Surf Guide'])
    .withMessage('Invalid level'),
  body('format').trim().notEmpty().withMessage('Format is required'),
  body('duration').trim().notEmpty().withMessage('Duration is required'),
  body('price').isNumeric().withMessage('Price must be a number').isFloat({ min: 0 }),
  body('priceNote').trim().notEmpty().withMessage('Price note is required'),
  body('image')
    .trim()
    .notEmpty()
    .withMessage('Image URL is required')
    .isURL({ protocols: ['http', 'https'], require_protocol: true })
    .withMessage('Image must be a valid HTTP(S) URL'),
]

router.get('/', listAll)
router.post('/', packageValidation, create)
router.put('/:id', packageValidation, update)
router.delete('/:id', remove)
router.patch('/:id/toggle-publish', togglePublish)

export default router
