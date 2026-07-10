import { Request, Response, NextFunction } from 'express'
import path from 'path'
import multer, { FileFilterCallback } from 'multer'
import { v4 as uuidv4 } from 'uuid'

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(process.cwd(), 'uploads'))
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase()
    cb(null, `${uuidv4()}${ext}`)
  },
})

const fileFilter = (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const allowedExt = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
  const allowedMime = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
  const ext = path.extname(file.originalname).toLowerCase()
  if (allowedExt.includes(ext) && allowedMime.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error('Only image files are allowed (jpg, jpeg, png, webp, gif)'))
  }
}

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter,
})

export function uploadImage(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    if (!req.file) {
      res.status(400).json({ success: false, message: 'No image file provided' })
      return
    }
    const host = `${req.protocol}://${req.get('host')}`
    const url = `${host}/uploads/${req.file.filename}`
    res.status(201).json({ success: true, url })
  } catch (err) {
    next(err)
  }
}
