import { Router } from 'express'
import { listPublished } from '../controllers/faq.controller'

const router = Router()

router.get('/', listPublished)

export default router
