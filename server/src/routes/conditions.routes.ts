import { Router } from 'express'
import { getConditions } from '../controllers/conditions.controller'

const router = Router()

router.get('/', getConditions)

export default router
