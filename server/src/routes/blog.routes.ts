import { Router } from 'express'
import { query } from 'express-validator'
import { listPublished, getBySlug } from '../controllers/blog.controller'

const router = Router()

router.get(
  '/',
  [
    query('category').optional().isString().trim().isLength({ max: 50 }),
    query('search').optional().isString().trim().isLength({ max: 100 }),
    query('page').optional().isInt({ min: 1 }),
    query('limit').optional().isInt({ min: 1, max: 50 }),
  ],
  listPublished,
)
router.get('/:slug', getBySlug)

export default router
