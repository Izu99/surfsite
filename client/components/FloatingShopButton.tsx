'use client'

import { ShoppingBag } from 'lucide-react'
import { useShopModal } from '@/components/ShopModalContext'

export default function FloatingShopButton() {
  const openShopModal = useShopModal()

  return (
    <button
      type="button"
      onClick={openShopModal}
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
      aria-label="Shop the collection"
    >
      <ShoppingBag className="h-6 w-6" />
    </button>
  )
}
