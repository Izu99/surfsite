import { Router } from 'express'
import { protect } from '../middleware/auth'
import { upload, uploadImage } from '../controllers/upload.controller'

const router = Router()

router.use(protect)

router.post('/', upload.single('image'), uploadImage)

export default router
