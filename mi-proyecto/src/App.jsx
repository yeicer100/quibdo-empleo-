import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import Companies from './pages/Companies'
import About from './pages/About'
import './App.css'

// Sube al inicio de la página cada vez que cambia la ruta
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <div className="page">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
         
          
          <Route path="/empresas" element={<Companies />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/login" element={<Login mode="login" />} />
          <Route path="/registro" element={<Login mode="register" />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
