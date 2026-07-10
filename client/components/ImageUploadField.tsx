'use client'

import { useRef, useState } from 'react'
import { UploadCloud, AlertCircle } from 'lucide-react'
import { adminUploadApi } from '@/lib/api'
import { cn } from '@/lib/utils'

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
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  const handleFile = async (file: File | undefined) => {
    if (!file) return
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

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="https://images.unsplash.com/… or /local-image.webp, or upload a file"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls(!!error)}
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
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>

      {uploadError && (
        <p className="flex items-center gap-1.5 text-xs text-red-500">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {uploadError}
        </p>
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}

      {value && (
        <div className="w-48 h-32 rounded-xl overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  )
}
