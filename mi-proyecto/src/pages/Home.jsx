import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Card from '../components/Card'
import Categories from '../components/Categories'
import CompanyCard from '../components/CompanyCard'
import CtaBanner from '../components/CtaBanner'
import SectionHead from '../components/SectionHead'
import { JOBS, COMPANIES } from '../data/data'

export default function Home() {
  const featuredJobs = JOBS.filter((j) => j.top)
  const featuredCompanies = COMPANIES.slice(0, 4)

  return (
    <>
      <Hero />
      <Stats />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Destacadas" title="Ofertas de empleo" to="/empleos" />
          <div className="grid grid--4">
            {featuredJobs.map((job) => <Card key={job.id} job={job} />)}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Explorar" tone="green" title="Categorías laborales" />
          <Categories />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Directorio" title="Empresas destacadas" to="/empresas" />
          <div className="grid grid--4">
            {featuredCompanies.map((c) => <CompanyCard key={c.id} company={c} />)}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CtaBanner />
        </div>
      </section>
    </>
  )
}
