import { Router } from 'express'
import { listPublished, getBySlug } from '../controllers/blog.controller'

const router = Router()

router.get('/', listPublished)
router.get('/:slug', getBySlug)

export default router
