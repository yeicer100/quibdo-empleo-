import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import { SearchIcon } from '../components/Icons'
import {
  JOBS, CATEGORIES, CONTRACTS, SALARY_RANGES, DATE_RANGES, SORTS, getCompany, normalize,
} from '../data/data'

const PAGE_SIZE = 6

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="filters__group">
      {title && <h3 className="filters__label">{title}</h3>}
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className={`opt ${value === o.value ? 'is-active' : ''}`}
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
        >
          {o.icon && <span className="opt__icon" aria-hidden="true">{o.icon}</span>}
          <span>{o.label}</span>
          {o.count != null && <span className="opt__count">{o.count}</span>}
        </button>
      ))}
    </div>
  )
}

export default function Jobs() {
  const [params, setParams] = useSearchParams()
  const category = params.get('cat') || 'Todas'
  const location = params.get('loc') || ''

  const [query, setQuery] = useState(params.get('q') || '')
  const [contract, setContract] = useState('Todos')
  const [salary, setSalary] = useState('any')
  const [date, setDate] = useState('any')
  const [sort, setSort] = useState('recent')
  const [page, setPage] = useState(1)

  const withReset = (setter) => (value) => { setter(value); setPage(1) }

  const setCategory = (value) => {
    const next = new URLSearchParams(params)
    if (value === 'Todas') next.delete('cat')
    else next.set('cat', value)
    setParams(next)
    setPage(1)
  }

  const clearFilters = () => {
    setQuery(''); setContract('Todos'); setSalary('any'); setDate('any'); setSort('recent'); setPage(1)
    setParams({})
  }

  const results = useMemo(() => {
    const q = normalize(query)
    const salaryTest = SALARY_RANGES.find((s) => s.value === salary).test
    const dateTest = DATE_RANGES.find((d) => d.value === date).test

    const list = JOBS.filter((j) => {
      const company = getCompany(j.companyId)
      const text = normalize(`${j.title} ${company.name} ${j.category}`)
      return (
        (!q || text.includes(q)) &&
        (category === 'Todas' || j.category === category) &&
        (!location || j.location.includes(location)) &&
        (contract === 'Todos' || j.contract === contract) &&
        salaryTest((j.salaryMin + j.salaryMax) / 2) &&
        dateTest(j.days)
      )
    })

    const sorters = {
      recent: (a, b) => a.days - b.days,
      'salary-desc': (a, b) => b.salaryMax - a.salaryMax,
      'salary-asc': (a, b) => a.salaryMin - b.salaryMin,
    }
    return list.sort(sorters[sort])
  }, [query, category, location, contract, salary, date, sort])

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE))
  const current = Math.min(page, totalPages)
  const visible = results.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE)

  const categoryOptions = [
    { value: 'Todas', label: 'Todas' },
    ...CATEGORIES.map((c) => ({ value: c.name, label: c.name, icon: c.icon, count: c.count })),
  ]

  return (
    <div className="container">
      <header className="page-head">
        <p className="eyebrow eyebrow--violet">Explorar</p>
        <h1>Buscar empleo</h1>
        <p>Encuentra oportunidades en Quibdó y el Chocó</p>
      </header>

      <form className="searchbar searchbar--wide" onSubmit={(e) => e.preventDefault()} role="search">
        <label className="searchbar__field">
          <SearchIcon />
          <input
            type="text"
            value={query}
            onChange={(e) => withReset(setQuery)(e.target.value)}
            placeholder="Cargo, empresa o categoría..."
            aria-label="Buscar empleo"
          />
        </label>
        <button type="submit" className="btn btn--primary btn--lg">Buscar</button>
      </form>

      <div className="jobs-layout">
        <aside className="filters" aria-label="Filtros">
          <h2 className="filters__heading">Filtros</h2>
          <FilterGroup title="Categoría" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup
            title="Contrato"
            options={CONTRACTS.map((c) => ({ value: c, label: c }))}
            value={contract}
            onChange={withReset(setContract)}
          />
          <FilterGroup
            title="Salario"
            options={SALARY_RANGES}
            value={salary}
            onChange={withReset(setSalary)}
          />
          <FilterGroup title="Fecha" options={DATE_RANGES} value={date} onChange={withReset(setDate)} />
        </aside>

        <section aria-live="polite">
          <div className="results__bar">
            <p className="results__count">
              <b>{results.length}</b> {results.length === 1 ? 'empleo encontrado' : 'empleos encontrados'}
            </p>
            <select
              className="select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Ordenar por"
            >
              {SORTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          {visible.length > 0 ? (
            <div className="grid grid--2">
              {visible.map((job) => <Card key={job.id} job={job} />)}
            </div>
          ) : (
            <div className="empty">
              <p>No hay empleos que coincidan con estos filtros.</p>
              <button type="button" className="btn btn--ghost" onClick={clearFilters}>
                Limpiar filtros
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <nav className="pager" aria-label="Paginación">
              <button type="button" disabled={current === 1} onClick={() => setPage(current - 1)} aria-label="Página anterior">←</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={n === current ? 'is-active' : ''}
                  aria-current={n === current ? 'page' : undefined}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
              <button type="button" disabled={current === totalPages} onClick={() => setPage(current + 1)} aria-label="Página siguiente">→</button>
            </nav>
          )}
        </section>
      </div>
    </div>
  )
}
