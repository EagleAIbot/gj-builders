export function Marquee({ items, dark = false }) {
  const track = [...items, ...items]
  return (
    <div className={`marquee${dark ? ' marquee--dark' : ''}`} aria-hidden="true">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
