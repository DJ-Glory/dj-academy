export default function Ticker() {
  const items = [
    'AHMEDABAD DJ TRAINING',
    'WEDDING · CLUB · FESTIVAL',
    'REAL DECK PRACTICE',
    'BEGINNER → PROFESSIONAL',
    'GARBA · SANGEET · COMMERCIAL',
  ]
  // Duplicate for seamless loop
  const all = [...items, ...items]

  return (
    <div className="border-b border-[#3A2E52] bg-[#241933] overflow-hidden whitespace-nowrap">
      <div className="ticker-track">
        {all.map((item, i) => (
          <span key={i} className="px-6 border-r border-[#3A2E52]">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
