import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="container about">
      <header className="about__head">
        <p className="eyebrow eyebrow--violet">Nuestra historia</p>
        <h1>Sobre Empleo Quibdó</h1>
        <p>
          La plataforma de empleo más avanzada del Chocó, comprometida con el desarrollo económico y
          social de la región.
        </p>
      </header>

      <div className="about__grid">
        <article className="card about__card about__card--violet">
          <span className="about__icon" aria-hidden="true">🎯</span>
          <h2>Nuestra misión</h2>
          <p>
            Conectar el talento chocoano con las mejores oportunidades laborales, contribuyendo al
            desarrollo económico del Chocó.
          </p>
        </article>
        <article className="card about__card about__card--green">
          <span className="about__icon" aria-hidden="true">🔭</span>
          <h2>Nuestra visión</h2>
          <p>
            Ser la plataforma de empleo de referencia para el Pacífico colombiano, reconocida por su
            impacto social e innovación.
          </p>
        </article>
      </div>

      <div className="cta cta--compact">
        <h2>¿Listo para comenzar?</h2>
        <p className="cta__text">Únete a la comunidad de empleo más grande del Chocó</p>
        <div className="cta__actions">
          <Link to="/registro?rol=candidato" className="btn btn--primary btn--lg">Soy candidato</Link>
          <Link to="/registro?rol=empresa" className="btn btn--ghost btn--lg">Tengo una empresa</Link>
        </div>
      </div>
    </div>
  )
}
