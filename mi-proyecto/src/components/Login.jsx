import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

// mode: 'login' | 'register'
export default function Login({ mode = 'login' }) {
  const [params] = useSearchParams()
  const isRegister = mode === 'register'
  const [role, setRole] = useState(params.get('rol') === 'empresa' ? 'empresa' : 'candidato')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: aquí llamas a tu API (Express + MySQL) con fetch/axios.
    setStatus('Formulario listo. Falta conectar el backend para completar esta acción.')
  }

  return (
    <section className="auth">
      <div className="card auth__card">
        <h1>{isRegister ? 'Crea tu cuenta' : 'Inicia sesión'}</h1>
        <p className="auth__sub">
          {isRegister
            ? 'Regístrate gratis para postularte o publicar vacantes.'
            : 'Accede para ver tus postulaciones y vacantes.'}
        </p>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="seg" role="group" aria-label="Tipo de cuenta">
              {['candidato', 'empresa'].map((r) => (
                <button
                  key={r}
                  type="button"
                  className={role === r ? 'is-active' : ''}
                  aria-pressed={role === r}
                  onClick={() => setRole(r)}
                >
                  {r === 'candidato' ? 'Soy candidato' : 'Tengo una empresa'}
                </button>
              ))}
            </div>
          )}

          {isRegister && (
            <div className="field">
              <label htmlFor="name">{role === 'empresa' ? 'Nombre de la empresa' : 'Nombre completo'}</label>
              <input id="name" name="name" type="text" required autoComplete="name" />
            </div>
          )}

          <div className="field">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
          </div>

          <div className="field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              autoComplete={isRegister ? 'new-password' : 'current-password'}
            />
          </div>

          <button type="submit" className="btn btn--primary btn--lg btn--block">
            {isRegister ? 'Crear cuenta' : 'Entrar'}
          </button>
          {status && <p className="auth__status" role="status">{status}</p>}
        </form>

        <p className="auth__switch">
          {isRegister ? (
            <>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></>
          ) : (
            <>¿Aún no tienes cuenta? <Link to="/registro">Regístrate</Link></>
          )}
        </p>
      </div>
    </section>
  )
}
