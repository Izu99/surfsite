import { Router } from 'express'
import { listPublished } from '../controllers/package.controller'

const router = Router()

router.get('/', listPublished)

export default router
