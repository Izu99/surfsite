'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Wind, Thermometer, Sun } from 'lucide-react'
import { conditionsApi, type SurfConditions } from '@/lib/api'

const DEFAULTS: SurfConditions = {
  waveHeight: '0.8 – 1.2 m',
  wind: '12 km/h SW',
  waterTemp: '27°C',
  airTemp: '31°C',
  conditions: 'Mellow Peaks',
}

export default function ConditionsBar() {
  const [data, setData] = useState<SurfConditions>(DEFAULTS)
  const [timeLabel, setTimeLabel] = useState('Hirikatiya Beach')

  useEffect(() => {
    conditionsApi.get()
      .then((res) => {
        setData(res.data)
        if (res.data.updatedAt) {
          const d = new Date(res.data.updatedAt)
          const time = d.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })
          setTimeLabel(`Updated ${time} · Hirikatiya Beach`)
        }
      })
      .catch(() => {})
  }, [])

  const items = [
    { label: 'Wave Height', value: data.waveHeight, Icon: CheckCircle },
    { label: 'Wind',        value: data.wind,        Icon: Wind        },
    { label: 'Water Temp',  value: data.waterTemp,   Icon: Thermometer },
    { label: 'Air Temp',    value: data.airTemp,     Icon: Sun         },
    { label: 'Conditions',  value: data.conditions,  Icon: CheckCircle },
  ]

  return (
    <section className="bg-[#0d1b2a] border-b border-white/10 py-4">
      <div className="container-site">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
              Hirikatiya Today
            </span>
          </div>
          <div className="flex flex-wrap gap-6">
            {items.map(({ label, value, Icon }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-wider leading-none mb-0.5">
                    {label}
                  </p>
                  <p className="text-xs font-bold text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="ml-auto text-[10px] text-white/25 hidden lg:block">
            {timeLabel}
          </p>
        </div>
      </div>
    </section>
  )
}
