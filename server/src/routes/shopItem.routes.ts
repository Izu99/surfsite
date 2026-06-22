import { Router } from 'express'
import { listPublished } from '../controllers/shopItem.controller'

const router = Router()

router.get('/', listPublished)

export default router
