import { Link } from 'react-router-dom'
import { PinIcon } from './Icons'

export default function CompanyCard({ company }) {
  return (
    <Link to={`/empleos?q=${encodeURIComponent(company.name)}`} className="card company">
      <div className="company__head">
        <span className="avatar" style={{ background: company.gradient }}>{company.initials}</span>
        <div>
          <h3 className="company__name">{company.name}</h3>
          <p className="company__cat">{company.category}</p>
        </div>
      </div>
      <p className="company__desc">{company.description}</p>
      <div className="company__foot">
        <span className="company__loc"><PinIcon width={12} height={12} />{company.location}</span>
        <span className="badge-green">{company.vacancies} vacantes</span>
      </div>
    </Link>
  )
}
