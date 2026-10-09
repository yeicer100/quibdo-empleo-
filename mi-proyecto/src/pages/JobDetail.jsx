import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PinIcon } from '../components/Icons'
import { getJob, getCompany, formatCOP, CONTRACT_CLASS } from '../data/data'

export default function JobDetail() {
  const { id } = useParams()
  const job = getJob(id)
  const [applied, setApplied] = useState(false)

  if (!job) {
    return (
      <div className="container detail">
        <div className="empty">
          <p>Esta oferta ya no está disponible.</p>
          <Link to="/empleos" className="btn btn--primary">Ver todas las ofertas</Link>
        </div>
      </div>
    )
  }

  const company = getCompany(job.companyId)

  return (
    <div className="container detail">
      <Link to="/empleos" className="detail__back">← Volver a empleos</Link>

      <article className="card detail__card">
        <div className="job__head">
          <span className="avatar avatar--lg" style={{ background: company.gradient }}>{company.initials}</span>
          <div className="job__id">
            <h1 className="detail__title">{job.title}</h1>
            <p className="job__company">{company.name}</p>
          </div>
          {job.top && <span className="badge-top">✦ TOP</span>}
        </div>

        <div className="job__meta">
          <span className="chip"><PinIcon width={12} height={12} />{job.location}</span>
          <span className="chip chip--salary">{formatCOP(job.salaryMin)} - {formatCOP(job.salaryMax)}</span>
          <span className={`chip chip--${CONTRACT_CLASS[job.contract]}`}>{job.contract}</span>
          <span className="chip">{job.category}</span>
        </div>

        <h2>Sobre el cargo</h2>
        <p className="detail__text">{job.summary}</p>

        <h2>Requisitos</h2>
        <ul className="detail__list">
          {job.requirements.map((r) => <li key={r}>{r}</li>)}
        </ul>

        <div className="detail__actions">
          <button
            type="button"
            className="btn btn--primary btn--lg"
            disabled={applied}
            onClick={() => setApplied(true)}
          >
            {applied ? 'Postulación enviada' : 'Postularme'}
          </button>
          <span className="job__time">Publicada hace {job.days} días</span>
        </div>
      </article>
    </div>
  )
}
