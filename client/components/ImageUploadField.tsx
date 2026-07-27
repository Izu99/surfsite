'use client'

import { useRef, useState } from 'react'
import { UploadCloud, AlertCircle } from 'lucide-react'
import { adminUploadApi } from '@/lib/api'
import { isAllowedImageUrl, IMAGE_URL_ERROR } from '@/lib/image-url'
import { cn } from '@/lib/utils'

const MAX_SIZE = 5 * 1024 * 1024 // keep in sync with the server multer limit
const ACCEPT = 'image/jpeg,image/png,image/webp,image/gif'

export default function ImageUploadField({
  value,
  onChange,
  error,
  inputCls,
}: {
  value: string
  onChange: (url: string) => void
  error?: string
  inputCls: (hasError: boolean) => string
}) {
  const fileRef = useRef<HTMLInputElement>(null)
  const dragDepth = useRef(0)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [dragging, setDragging] = useState(false)

  // Live feedback while typing; the server rejects the same URLs on save.
  const badUrl = !isAllowedImageUrl(value)

  const handleFile = async (file: File | undefined) => {
    if (!file) return
    if (!ACCEPT.split(',').includes(file.type)) {
      setUploadError('Only jpg, png, webp or gif images are allowed')
      return
    }
    if (file.size > MAX_SIZE) {
      setUploadError('Image is too large — maximum size is 5MB')
      return
    }
    setUploading(true)
    setUploadError('')
    try {
      const res = await adminUploadApi.upload(file)
      onChange(res.url)
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  // dragenter/dragleave also fire when crossing child elements, so track depth
  // instead of toggling on every event.
  const onDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    dragDepth.current += 1
    setDragging(true)
  }

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    dragDepth.current -= 1
    if (dragDepth.current <= 0) {
      dragDepth.current = 0
      setDragging(false)
    }
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    dragDepth.current = 0
    setDragging(false)
    if (uploading) return
    handleFile(e.dataTransfer.files?.[0])
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="https://images.unsplash.com/… or upload a file"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls(!!error || badUrl)}
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className={cn(
            'flex items-center gap-1.5 px-4 rounded-xl text-sm font-semibold border shrink-0 transition-colors',
            uploading
              ? 'border-gray-200 text-gray-400 cursor-not-allowed'
              : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary',
          )}
        >
          {uploading ? (
            <span className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          ) : (
            <UploadCloud className="h-4 w-4" />
          )}
          {uploading ? 'Uploading…' : 'Upload'}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept={ACCEPT}
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>

      <div
        onClick={() => !uploading && fileRef.current?.click()}
        onDragEnter={onDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={cn(
          'flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors',
          uploading ? 'cursor-not-allowed' : 'cursor-pointer',
          dragging
            ? 'border-primary bg-primary-50'
            : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50',
        )}
      >
        <UploadCloud className={cn('h-6 w-6', dragging ? 'text-primary' : 'text-gray-400')} />
        <p className="text-sm text-gray-600">
          {uploading ? (
            'Uploading…'
          ) : dragging ? (
            <span className="font-semibold text-primary">Drop the image to upload</span>
          ) : (
            <>
              Drag &amp; drop an image here, or{' '}
              <span className="font-semibold text-primary">browse</span>
            </>
          )}
        </p>
        <p className="text-xs text-gray-400">JPG, PNG, WEBP or GIF — up to 5MB</p>
      </div>

      {badUrl && (
        <p className="flex items-center gap-1.5 text-xs text-red-500">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {IMAGE_URL_ERROR}
        </p>
      )}

      {uploadError && (
        <p className="flex items-center gap-1.5 text-xs text-red-500">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {uploadError}
        </p>
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}

      {value && !badUrl && (
        <div className="w-48 h-32 rounded-xl overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  )
}
