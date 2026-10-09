import { useMemo, useState } from 'react'
import CompanyCard from '../components/CompanyCard'
import CtaBanner from '../components/CtaBanner'
import { SearchIcon } from '../components/Icons'
import { COMPANIES, COMPANY_FILTERS, normalize } from '../data/data'

export default function Companies() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('Todos')

  const list = useMemo(() => {
    const q = normalize(query)
    return COMPANIES.filter(
      (c) =>
        (filter === 'Todos' || c.category === filter) &&
        (!q || normalize(`${c.name} ${c.category}`).includes(q)),
    )
  }, [query, filter])

  return (
    <div className="container">
      <header className="page-head">
        <p className="eyebrow eyebrow--green">Directorio</p>
        <h1>Empresas en Quibdó</h1>
        <p>{COMPANIES.length} empresas registradas en la plataforma</p>
      </header>

      <label className="searchbar searchbar--wide searchbar--plain">
        <span className="searchbar__field">
          <SearchIcon />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar empresa o sector..."
            aria-label="Buscar empresa"
          />
        </span>
      </label>

      <div className="hero__chips hero__chips--left">
        {COMPANY_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={`pill ${filter === f ? 'is-active' : ''}`}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {list.length > 0 ? (
        <div className="grid grid--3 companies-grid">
          {list.map((c) => <CompanyCard key={c.id} company={c} />)}
        </div>
      ) : (
        <div className="empty">
          <p>No encontramos empresas con esa búsqueda.</p>
          <button type="button" className="btn btn--ghost" onClick={() => { setQuery(''); setFilter('Todos') }}>
            Ver todas las empresas
          </button>
        </div>
      )}

      <div className="section section--tight">
        <CtaBanner />
      </div>
    </div>
  )
}
