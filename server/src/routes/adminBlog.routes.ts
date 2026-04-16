import { Router } from 'express'
import { body } from 'express-validator'
import { protect } from '../middleware/auth'
import {
  listAll,
  create,
  update,
  remove,
  togglePublish,
} from '../controllers/adminBlog.controller'

const router = Router()

// All admin blog routes require authentication
router.use(protect)

const blogValidation = [
  body('title').trim().notEmpty().withMessage('Title is required').isLength({ max: 200 }),
  body('description').trim().notEmpty().withMessage('Description is required').isLength({ max: 500 }),
  body('content').trim().notEmpty().withMessage('Content is required'),
  body('image').trim().notEmpty().withMessage('Cover image URL is required').isURL({ protocols: ['http', 'https'], require_protocol: true }).withMessage('Image must be a valid HTTP(S) URL'),
  body('category')
    .trim()
    .notEmpty()
    .withMessage('Category is required')
    .isIn(['Surf Tips', 'Sri Lanka', 'Gear', 'Lifestyle', 'News'])
    .withMessage('Invalid category'),
]

router.get('/', listAll)
router.post('/', blogValidation, create)
router.put('/:id', blogValidation, update)
router.delete('/:id', remove)
router.patch('/:id/toggle-publish', togglePublish)

export default router
