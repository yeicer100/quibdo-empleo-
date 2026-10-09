import { Link } from 'react-router-dom'

export default function CtaBanner() {
  return (
    <div className="cta">
      <p className="eyebrow eyebrow--violet">Para empresas</p>
      <h2>¿Tienes una empresa en Quibdó?</h2>
      <p className="cta__text">
        Publica tus vacantes y conecta con el talento chocoano. Registro gratuito.
      </p>
      <div className="cta__actions">
        <Link to="/registro?rol=empresa" className="btn btn--primary btn--lg">Registrar empresa</Link>
        <Link to="/registro?rol=candidato" className="btn btn--ghost btn--lg">Soy candidato</Link>
      </div>
    </div>
  )
}
