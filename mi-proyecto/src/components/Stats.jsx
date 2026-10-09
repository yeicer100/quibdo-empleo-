import { STATS } from '../data/data'

export default function Stats() {
  return (
    <section className="stats" aria-label="Cifras de la plataforma">
      <div className="container stats__grid">
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <p className={`stat__value stat__value--${s.tone}`}>{s.value}</p>
            <p className="stat__label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
