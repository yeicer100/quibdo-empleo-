import { Link } from 'react-router-dom'

export default function SectionHead({ eyebrow, tone = 'violet', title, to, linkLabel = 'Ver todas →' }) {
  return (
    <div className="section-head">
      <div>
        <p className={`eyebrow eyebrow--${tone}`}>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {to && <Link to={to} className="section-head__link">{linkLabel}</Link>}
    </div>
  )
}
