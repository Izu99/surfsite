'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingBag, X } from 'lucide-react'
import { services } from '@/components/ServicesSlider'

export default function FloatingShopButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Shop the collection"
      >
        <ShoppingBag className="h-6 w-6" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[88px]"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full max-h-[calc(100vh-104px)] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <p className="text-2xl font-bold text-primary border-b-2 border-primary pb-1">
                Noah Collection
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:text-primary cursor-pointer shrink-0"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 mb-5 text-sm text-gray-500 leading-relaxed">
              Take a piece of the ocean home with you. Hand-crafted surf wear and
              goods made by our crew, right here at the beach.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.title}>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 200px"
                    />
                  </div>
                  <p className="mt-2 text-sm font-bold text-gray-900">{service.title}</p>
                  <p className="text-sm font-semibold text-primary">${service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
