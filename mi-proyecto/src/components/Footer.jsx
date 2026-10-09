import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    title: 'Candidatos',
    links: [
      { label: 'Buscar empleo', to: '/empleos' },
      { label: 'Crear perfil', to: '/registro?rol=candidato' },
      { label: 'Postulaciones', to: '/login' },
      { label: 'Consejos' },
    ],
  },
  {
    title: 'Empresas',
    links: [
      { label: 'Publicar vacante', to: '/registro?rol=empresa' },
      { label: 'Candidatos', to: '/registro?rol=empresa' },
      { label: 'Planes' },
      { label: 'Soporte' },
    ],
  },
  {
    title: 'Plataforma',
    links: [
      { label: 'Sobre nosotros', to: '/nosotros' },
      { label: 'Contacto' },
      { label: 'Privacidad' },
      { label: 'Términos' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="brand">
            <span className="brand__mark">EQ</span>
            <span className="brand__text">
              <strong>Empleo Quibdó</strong>
              <small>Chocó, Colombia</small>
            </span>
          </Link>
          <p>Conectando el talento chocoano con las mejores oportunidades laborales.</p>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h4 className="footer__title">{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link to={l.to}>{l.label}</Link>
                  ) : (
                    <a href="#" onClick={(e) => e.preventDefault()}>{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container footer__bottom">
        <span>© 2026 Empleo Quibdó · Quibdó, Chocó, Colombia</span>
        <span>Hecho con orgullo en el Pacífico colombiano 🌿</span>
      </div>
    </footer>
  )
}
