'use client'

import { useState, useMemo } from 'react'
import {
  LayoutDashboard,
  Calendar,
  Clock,
  Users,
  Mail,
  Phone,
  Check,
  X,
  AlertCircle,
  MessageSquare,
  ChevronDown,
  Search,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Booking } from '@/lib/api'

// ─── Hardcoded demo data ──────────────────────────────────────────────────────
const DEMO_BOOKINGS: Booking[] = [
  {
    _id: '1',
    name: 'Emma Johnson',
    email: 'emma.johnson@email.com',
    phone: '+44 7700 900123',
    packageName: 'Beginner Group Lesson',
    sessionDate: '2026-04-20',
    sessionTime: '08:00 AM',
    groupSize: 2,
    notes: 'First time surfing. Excited!',
    status: 'confirmed',
    source: 'form',
    createdAt: '2026-04-17T06:30:00Z',
  },
  {
    _id: '2',
    name: 'Lucas Weber',
    email: 'lucas.weber@gmail.com',
    phone: '+49 151 12345678',
    packageName: 'Private Lesson — 1 Hour',
    sessionDate: '2026-04-21',
    sessionTime: '10:00 AM',
    groupSize: 1,
    notes: 'Intermediate surfer, wants to work on cutbacks.',
    status: 'pending',
    source: 'whatsapp',
    createdAt: '2026-04-17T08:15:00Z',
  },
  {
    _id: '3',
    name: 'Aisha Patel',
    email: 'aisha.p@outlook.com',
    phone: '+61 412 345 678',
    packageName: '3-Day Surf Camp',
    sessionDate: '2026-04-22',
    sessionTime: '07:00 AM',
    groupSize: 4,
    notes: 'Family booking — 2 adults, 2 children (ages 10 & 12).',
    status: 'confirmed',
    source: 'form',
    createdAt: '2026-04-16T14:20:00Z',
  },
  {
    _id: '4',
    name: 'Marco Rossi',
    email: 'marco.rossi@libero.it',
    phone: '+39 333 123 4567',
    packageName: 'Semi-Private Lesson',
    sessionDate: '2026-04-19',
    sessionTime: '09:00 AM',
    groupSize: 2,
    notes: '',
    status: 'completed',
    source: 'walk-in',
    createdAt: '2026-04-14T11:00:00Z',
  },
  {
    _id: '5',
    name: 'Sofia Lindqvist',
    email: 'sofia.l@hotmail.se',
    phone: '+46 70 123 45 67',
    packageName: 'Beginner Group Lesson',
    sessionDate: '2026-04-18',
    sessionTime: '08:00 AM',
    groupSize: 1,
    notes: 'Prefers female instructor if available.',
    status: 'cancelled',
    source: 'form',
    createdAt: '2026-04-15T09:45:00Z',
  },
  {
    _id: '6',
    name: 'Ryan Thompson',
    email: 'ryan.t@icloud.com',
    phone: '+1 555 234 5678',
    packageName: 'Advanced Coaching Session',
    sessionDate: '2026-04-23',
    sessionTime: '06:30 AM',
    groupSize: 1,
    notes: 'Experienced surfer, competing next month.',
    status: 'pending',
    source: 'whatsapp',
    createdAt: '2026-04-17T10:00:00Z',
  },
  {
    _id: '7',
    name: 'Priya Nair',
    email: 'priya.nair@gmail.com',
    phone: '+91 98765 43210',
    packageName: 'Private Lesson — 1 Hour',
    sessionDate: '2026-04-24',
    sessionTime: '11:00 AM',
    groupSize: 1,
    notes: '',
    status: 'confirmed',
    source: 'form',
    createdAt: '2026-04-17T12:00:00Z',
  },
  {
    _id: '8',
    name: 'Oliver Müller',
    email: 'o.mueller@web.de',
    phone: '+49 170 9876543',
    packageName: '3-Day Surf Camp',
    sessionDate: '2026-04-25',
    sessionTime: '07:00 AM',
    groupSize: 3,
    notes: 'Corporate team building group.',
    status: 'pending',
    source: 'form',
    createdAt: '2026-04-16T16:30:00Z',
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────
const STATUS_STYLES: Record<Booking['status'], string> = {
  pending: 'bg-amber-100 text-amber-700',
  confirmed: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
  completed: 'bg-gray-100 text-gray-600',
}

const STATUS_LABELS: Record<Booking['status'], string> = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  cancelled: 'Cancelled',
  completed: 'Completed',
}

const SOURCE_STYLES: Record<Booking['source'], string> = {
  form: 'bg-primary-50 text-primary',
  whatsapp: 'bg-green-50 text-green-700',
  'walk-in': 'bg-purple-50 text-purple-700',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

const STATUSES: Array<Booking['status'] | 'All'> = ['All', 'pending', 'confirmed', 'completed', 'cancelled']

// ─── Component ───────────────────────────────────────────────────────────────
export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>(DEMO_BOOKINGS)
  const [statusFilter, setStatusFilter] = useState<Booking['status'] | 'All'>('All')
  const [search, setSearch] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    let result = bookings
    if (statusFilter !== 'All') result = result.filter((b) => b.status === statusFilter)
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.email.toLowerCase().includes(q) ||
          b.packageName.toLowerCase().includes(q),
      )
    }
    return result
  }, [bookings, statusFilter, search])

  const counts = useMemo(
    () => ({
      all: bookings.length,
      pending: bookings.filter((b) => b.status === 'pending').length,
      confirmed: bookings.filter((b) => b.status === 'confirmed').length,
      completed: bookings.filter((b) => b.status === 'completed').length,
      cancelled: bookings.filter((b) => b.status === 'cancelled').length,
    }),
    [bookings],
  )

  const updateStatus = (id: string, status: Booking['status']) => {
    setBookings((prev) => prev.map((b) => (b._id === id ? { ...b, status } : b)))
    setExpandedId(null)
  }

  return (
    <>
      {/* ── Admin header ── */}
      <div className="bg-[#1a2e4a] border-b border-white/10">
        <div className="container-site py-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Admin Panel</p>
              <h1 className="text-white font-bold text-lg">Booking Management</h1>
            </div>
          </div>
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors"
          >            <MessageSquare className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <section className="section-padding bg-primary-50">
        <div className="container-site space-y-6">

          {/* ── Stats row ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Bookings', value: counts.all, color: 'text-gray-900' },
              { label: 'Pending', value: counts.pending, color: 'text-amber-600' },
              { label: 'Confirmed', value: counts.confirmed, color: 'text-green-600' },
              { label: 'Completed', value: counts.completed, color: 'text-gray-500' },
            ].map(({ label, value, color }) => (
              <div key={label} className="bg-white rounded-2xl p-5 shadow-[var(--shadow-card)]">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                <p className={`text-3xl font-extrabold ${color}`}>{value}</p>
              </div>
            ))}
          </div>

          {/* ── Filters ── */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <input
                type="search"
                placeholder="Search by name, email, or package…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              />
            </div>
            {/* Status filter */}
            <div className="flex gap-2 flex-wrap">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={cn(
                    'px-4 py-2 rounded-xl text-sm font-medium transition-all capitalize',
                    statusFilter === s
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200',
                  )}
                >
                  {s === 'All' ? `All (${counts.all})` : `${STATUS_LABELS[s]} (${counts[s]})`}
                </button>
              ))}
            </div>
          </div>

          {/* ── Table ── */}
          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-12 text-center">
              <AlertCircle className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-400">No bookings found.</p>
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="mt-3 text-sm text-primary underline"
                >
                  Clear search
                </button>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
              {/* Table header */}
              <div className="hidden md:grid grid-cols-[1fr_160px_130px_110px_90px_120px] gap-4 px-6 py-3.5 bg-gray-50 border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-gray-500">
                <span>Guest</span>
                <span>Package</span>
                <span>Session</span>
                <span>Source</span>
                <span>Status</span>
                <span className="text-right">Actions</span>
              </div>

              {filtered.map((booking, idx) => (
                <div key={booking._id}>
                  <div
                    className={cn(
                      'grid md:grid-cols-[1fr_160px_130px_110px_90px_120px] gap-4 items-center px-6 py-4 transition-colors hover:bg-gray-50 cursor-pointer',
                      idx !== filtered.length - 1 && !expandedId && 'border-b border-gray-100',
                    )}
                    onClick={() =>
                      setExpandedId(expandedId === booking._id ? null : booking._id)
                    }
                  >
                    {/* Guest */}
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{booking.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5 truncate max-w-[200px]">
                        {booking.email}
                      </p>
                    </div>

                    {/* Package */}
                    <p className="hidden md:block text-xs text-gray-600 leading-snug">
                      {booking.packageName}
                    </p>

                    {/* Session */}
                    <div className="hidden md:flex flex-col gap-0.5">
                      <span className="flex items-center gap-1 text-xs text-gray-700">
                        <Calendar className="h-3 w-3 text-primary shrink-0" />
                        {formatDate(booking.sessionDate)}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="h-3 w-3 shrink-0" />
                        {booking.sessionTime}
                      </span>
                    </div>

                    {/* Source */}
                    <span
                      className={cn(
                        'hidden md:inline-flex text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-fit capitalize',
                        SOURCE_STYLES[booking.source],
                      )}
                    >
                      {booking.source}
                    </span>

                    {/* Status */}
                    <span
                      className={cn(
                        'hidden md:inline-flex text-xs font-bold px-2.5 py-1 rounded-full w-fit',
                        STATUS_STYLES[booking.status],
                      )}
                    >
                      {STATUS_LABELS[booking.status]}
                    </span>

                    {/* Actions */}
                    <div className="flex items-center gap-1 md:justify-end">
                      {booking.status === 'pending' && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              updateStatus(booking._id, 'confirmed')
                            }}
                            title="Confirm"
                            className="p-2 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            <Check className="h-4 w-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              updateStatus(booking._id, 'cancelled')
                            }}
                            title="Cancel"
                            className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      {booking.status === 'confirmed' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            updateStatus(booking._id, 'completed')
                          }}
                          title="Mark as Completed"
                          className="p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-primary-50 transition-colors"
                        >
                          <Check className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setExpandedId(expandedId === booking._id ? null : booking._id)
                        }}
                        title="Details"
                        className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            expandedId === booking._id && 'rotate-180',
                          )}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Expanded detail row */}
                  {expandedId === booking._id && (
                    <div className="px-6 py-5 bg-primary-50 border-t border-b border-gray-100">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                            Contact
                          </p>
                          <a
                            href={`tel:${booking.phone}`}
                            className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-primary transition-colors"
                          >
                            <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                            {booking.phone}
                          </a>
                          <a
                            href={`mailto:${booking.email}`}
                            className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-primary transition-colors mt-1"
                          >
                            <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                            {booking.email}
                          </a>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                            Session
                          </p>
                          <p className="text-sm text-gray-700">{booking.packageName}</p>
                          <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                            <Users className="h-3.5 w-3.5 text-primary shrink-0" />
                            {booking.groupSize} {booking.groupSize === 1 ? 'person' : 'people'}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                            Booked
                          </p>
                          <p className="text-sm text-gray-700">
                            {formatDate(booking.createdAt)}
                          </p>
                          <p className="text-xs text-gray-400 mt-1 capitalize">
                            via {booking.source}
                          </p>
                        </div>
                        {booking.notes && (
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                              Notes
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {booking.notes}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Quick action buttons */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        <a
                          href={`https://wa.me/${booking.phone.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#20bd5a] transition-colors"
                        >
                          <MessageSquare className="h-3.5 w-3.5" />
                          WhatsApp
                        </a>
                        <a
                          href={`mailto:${booking.email}`}
                          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary-dark transition-colors"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          Email
                        </a>
                        {booking.status === 'pending' && (
                          <button
                            onClick={() => updateStatus(booking._id, 'confirmed')}
                            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-green-700 transition-colors"
                          >
                            <Check className="h-3.5 w-3.5" />
                            Confirm Booking
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <p className="text-xs text-gray-400 text-right">
            {filtered.length} booking{filtered.length !== 1 ? 's' : ''}
            {statusFilter !== 'All' && ` · ${STATUS_LABELS[statusFilter]}`}
          </p>
        </div>
      </section>
    </>
  )
}
