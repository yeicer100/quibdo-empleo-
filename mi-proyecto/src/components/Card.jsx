import { Link } from 'react-router-dom'
import { PinIcon } from './Icons'
import { getCompany, formatCOP, CONTRACT_CLASS } from '../data/data'

// Tarjeta de oferta de empleo
export default function Card({ job }) {
  const company = getCompany(job.companyId)

  return (
    <article className="card job">
      <div className="job__head">
        <span className="avatar" style={{ background: company.gradient }}>{company.initials}</span>
        <div className="job__id">
          <h3 className="job__title" title={job.title}>{job.title}</h3>
          <p className="job__company" title={company.name}>{company.name}</p>
        </div>
        {job.top && <span className="badge-top">✦ TOP</span>}
      </div>

      <div className="job__meta">
        <span className="chip"><PinIcon width={12} height={12} />{job.location}</span>
        <span className="chip chip--salary">
          {formatCOP(job.salaryMin)} - {formatCOP(job.salaryMax)}
        </span>
      </div>

      <div className="job__meta">
        <span className={`chip chip--${CONTRACT_CLASS[job.contract]}`}>{job.contract}</span>
        <span className="chip">{job.category}</span>
      </div>

      <div className="job__foot">
        <span className="job__time">Hace {job.days}d</span>
        <Link to={`/empleos/${job.id}`} className="btn btn--primary">Ver oferta →</Link>
      </div>
    </article>
  )
}
