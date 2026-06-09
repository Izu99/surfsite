'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isV2, setIsV2] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('site-theme')
    if (stored === 'v2') {
      document.documentElement.setAttribute('data-theme', 'v2')
      setIsV2(true)
    }
  }, [])

  const setTheme = (v2: boolean) => {
    setIsV2(v2)
    if (v2) {
      document.documentElement.setAttribute('data-theme', 'v2')
      localStorage.setItem('site-theme', 'v2')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('site-theme', 'v1')
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center bg-white border border-gray-200 shadow-2xl rounded-full overflow-hidden text-sm font-semibold select-none">
      <button
        onClick={() => setTheme(false)}
        className={`px-5 py-2.5 transition-colors duration-200 cursor-pointer ${!isV2 ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-gray-700'}`}
      >
        Version A
      </button>
      <div className="w-px h-6 bg-gray-200" />
      <button
        onClick={() => setTheme(true)}
        className={`px-5 py-2.5 transition-colors duration-200 cursor-pointer ${isV2 ? 'bg-[#2c6670] text-white' : 'text-gray-400 hover:text-gray-700'}`}
      >
        Version B
      </button>
    </div>
  )
}
