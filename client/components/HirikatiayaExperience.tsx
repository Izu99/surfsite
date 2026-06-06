const facts = [
  { label: 'Swell consistency', value: '95%' },
  { label: 'Water temp',        value: '27°C' },
  { label: 'Beginner days/yr',  value: '300+' },
  { label: 'Surf breaks',       value: '4' },
]

export default function HirikatiayaExperience() {
  return (
    <div>
      <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xl">
        A beautiful, hidden bay on Sri Lanka&apos;s south coast where the jungle meets the ocean. Perfect waves, warm water, and great vibes.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {facts.map(({ label, value }) => (
          <div key={label} className="border border-gray-200 rounded-2xl p-4 bg-gray-50">
            <p className="font-display text-3xl text-primary font-bold leading-none">{value}</p>
            <p className="text-gray-500 text-xs mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
