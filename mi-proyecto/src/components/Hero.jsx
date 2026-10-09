import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchIcon, PinIcon, ChevronIcon } from './Icons'
import { LOCATIONS, HERO_CHIPS } from '../data/data'

export default function Hero() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState(LOCATIONS[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    if (location !== LOCATIONS[0]) params.set('loc', location)
    navigate(`/empleos?${params.toString()}`)
  }

  return (
    <section className="hero">
      <div className="container">
       

        <h1 className="hero__title">
          Tu próxima oportunidad laboral te espera en Quibdó
        </h1>

        <p className="hero__lead">
          La plataforma de empleo más avanzada del Chocó. Conectamos talento real con empresas que
          transforman la región.
        </p>

        <form className="searchbar" onSubmit={handleSubmit} role="search">
          <label className="searchbar__field">
            <SearchIcon />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cargo, empresa, categoría..."
              aria-label="Buscar empleo"
            />
          </label>
          <label className="searchbar__field searchbar__field--loc">
            <PinIcon />
            <select value={location} onChange={(e) => setLocation(e.target.value)} aria-label="Ubicación">
              {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
            </select>
            <ChevronIcon />
          </label>
          <button type="submit" className="btn btn--primary btn--lg">Buscar</button>
        </form>

        <div className="hero__chips">
          {HERO_CHIPS.map((c) => (
            <button
              key={c}
              type="button"
              className="pill"
              onClick={() => navigate(`/empleos?cat=${encodeURIComponent(c)}`)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
