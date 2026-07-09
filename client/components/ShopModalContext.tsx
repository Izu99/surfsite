'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'
import { services } from '@/data/shop'

const ShopModalContext = createContext<(() => void) | null>(null)

export function useShopModal() {
  const openShopModal = useContext(ShopModalContext)
  if (!openShopModal) throw new Error('useShopModal must be used within ShopModalProvider')
  return openShopModal
}

export function ShopModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openShopModal = useCallback(() => setOpen(true), [])

  return (
    <ShopModalContext.Provider value={openShopModal}>
      {children}

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[88px]"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full max-h-[calc(100vh-104px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-white flex items-start justify-between p-6 pb-0">
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

            <p className="mt-3 mb-5 text-sm text-gray-500 leading-relaxed px-6">
              Items from our Noah Collection — you can buy any of these from our shop.
            </p>

            <div className="grid grid-cols-2 gap-4 px-6 pb-6">
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
                  <p className="text-sm font-semibold text-primary">Rs {service.price.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">Sizes: {service.sizes.join(', ')}</p>
                </div>
              ))}
            </div>

            <div className="px-6 pb-6 text-center">
              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-primary transition-colors duration-200 cursor-pointer shadow-md group"
              >
                Shop The Collection
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </ShopModalContext.Provider>
  )
}
