import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function splitPackageName(name: string): { title: string; subtitle?: string } {
  const match = name.match(/^(.*?)\s*(\(.*\))$/)
  if (!match) return { title: name }
  return { title: match[1], subtitle: match[2] }
}
