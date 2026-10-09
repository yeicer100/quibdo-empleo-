import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MenuIcon, CloseIcon } from './Icons'

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/empleos', label: 'Empleos' },
  { to: '/empresas', label: 'Empresas' },
  { to: '/nosotros', label: 'Nosotros' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="brand" onClick={close}>
          
          <span className="brand__text">
            <strong>logo</strong>
           
          </span>
        </Link>

        <nav id="menu-principal" className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Principal">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={close}
              className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/login" className="navbar__link only-mobile" onClick={close}>
            Iniciar sesión
          </Link>
        </nav>

        <div className="navbar__actions">
          <Link to="/login" className="navbar__login">Iniciar sesión</Link>
          <Link to="/registro" className="btn btn--primary">Registrarse</Link>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="menu-principal"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
