import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data/data'

export default function Categories() {
  return (
    <div className="cat-grid">
      {CATEGORIES.map((c) => (
        <Link
          key={c.name}
          to={`/empleos?cat=${encodeURIComponent(c.name)}`}
          className={`cat cat--${c.tone}`}
        >
          <span className="cat__icon" aria-hidden="true">{c.icon}</span>
          <span className="cat__name">{c.name}</span>
          <span className="cat__count">{c.count}</span>
        </Link>
      ))}
    </div>
  )
}
