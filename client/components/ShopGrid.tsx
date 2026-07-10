'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { shopApi, type ShopItem } from '@/lib/api'

const WHATSAPP_NUMBER = '94713207241'

export default function ShopGrid() {
  const [items, setItems] = useState<ShopItem[]>([])

  useEffect(() => {
    shopApi
      .list()
      .then((res) => setItems(res.data))
      .catch(() => {})
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => {
        const message = `Hi! I'd like to order the ${item.title} (Rs ${item.price.toLocaleString()}).`
        const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

        return (
          <div
            key={item._id}
            className="flex flex-col w-full h-full rounded-2xl overflow-hidden border border-white/20 bg-white shadow-md"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-col flex-1 p-6 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {item.description}
              </p>

              {item.sizes && item.sizes.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {item.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              )}

              <div className="border-t border-gray-100 pt-3">
                <div className="flex items-start leading-none gap-0.5 mb-4">
                  <span className="text-lg font-bold mt-1 text-primary">Rs</span>
                  <span className="text-3xl font-extrabold text-primary">
                    {item.price.toLocaleString()}
                  </span>
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-colors border-2 border-gray-700 text-gray-700 hover:border-primary hover:bg-primary hover:text-white cursor-pointer"
                >
                  Order via WhatsApp
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
