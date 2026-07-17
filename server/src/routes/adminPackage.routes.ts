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
  body('name').optional({ checkFalsy: true }).trim().isLength({ max: 100 }),
  body('level')
    .optional({ checkFalsy: true })
    .trim()
    .isIn(['Beginner', 'Intermediate', 'Advanced', 'Beginner-Advance', 'Surf Guide', 'Agency'])
    .withMessage('Invalid level'),
  body('format').optional({ checkFalsy: true }).trim(),
  body('duration').optional({ checkFalsy: true }).trim(),
  body('price').optional({ checkFalsy: true }).isFloat({ min: 0 }).withMessage('Price must be a positive number'),
  body('priceNote').optional({ checkFalsy: true }).trim(),
  body('description').optional().trim().isLength({ max: 1000 }),
  body('shortDescription').optional().trim(),
  body('includes').optional().isArray(),
  body('image')
    .optional({ checkFalsy: true })
    .trim()
    .custom((value: string) => value.startsWith('/') || /^https?:\/\/\S+$/.test(value))
    .withMessage('Image must be an uploaded file path or a valid http(s) URL'),
]

router.get('/', listAll)
router.post('/', packageValidation, create)
router.put('/:id', packageValidation, update)
router.delete('/:id', remove)
router.patch('/:id/toggle-publish', togglePublish)

export default router
