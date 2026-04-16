import { Request, Response, NextFunction } from 'express'

export interface AppError extends Error {
  statusCode?: number
  isOperational?: boolean
}

export function errorHandler(
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const statusCode = err.statusCode ?? 500
  const message = err.isOperational
    ? err.message
    : process.env.NODE_ENV === 'production'
    ? 'Internal server error'
    : err.message

  if (process.env.NODE_ENV !== 'production') {
    console.error('[Error]', err)
  }

  res.status(statusCode).json({
    success: false,
    message,
  })
}

export function notFound(_req: Request, res: Response): void {
  res.status(404).json({ success: false, message: 'Route not found' })
}
