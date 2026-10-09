// Datos de ejemplo. Cuando tengas backend (MySQL), reemplaza esto por llamadas a tu API.

export const CATEGORIES = [
  { name: 'Salud', icon: '🏥', count: 24, tone: 'violet' },
  { name: 'Educación', icon: '📚', count: 18, tone: 'green' },
  { name: 'Tecnología', icon: '💻', count: 15, tone: 'violet' },
  { name: 'Ingeniería', icon: '⚙️', count: 12, tone: 'amber' },
  { name: 'Administración', icon: '📋', count: 20, tone: 'violet' },
  { name: 'Legal', icon: '⚖️', count: 8, tone: 'green' },
  { name: 'Construcción', icon: '🏗️', count: 10, tone: 'violet' },
  { name: 'Comercio', icon: '🛒', count: 14, tone: 'amber' },
]

export const COMPANIES = [
  {
    id: 'hospital',
    name: 'Hospital Universitario San Francisco de Asís',
    initials: 'SF',
    gradient: 'linear-gradient(135deg,#4f8bff,#3b5bfc)',
    category: 'Salud',
    location: 'Quibdó, Chocó',
    vacancies: 8,
    description:
      'Principal centro hospitalario de referencia del Departamento del Chocó, con más de 60 años al servicio de la salud de la región.',
  },
  {
    id: 'constructora',
    name: 'Constructora Pacífico S.A.S',
    initials: 'CP',
    gradient: 'linear-gradient(135deg,#f5a524,#e8730c)',
    category: 'Construcción',
    location: 'Quibdó, Chocó',
    vacancies: 5,
    description:
      'Empresa líder en construcción de infraestructura vial, social y habitacional en el departamento del Chocó.',
  },
  {
    id: 'chocodigital',
    name: 'Chocó Digital S.A.S',
    initials: 'CD',
    gradient: 'linear-gradient(135deg,#8b6cf7,#6a4df0)',
    category: 'Tecnología',
    location: 'Quibdó, Chocó',
    vacancies: 3,
    description:
      'Startup tecnológica chocoana dedicada al desarrollo de soluciones digitales para el sector público y privado.',
  },
  {
    id: 'camara',
    name: 'Cámara de Comercio de Quibdó',
    initials: 'CC',
    gradient: 'linear-gradient(135deg,#e9539c,#b44ce0)',
    category: 'Comercio',
    location: 'Quibdó, Chocó',
    vacancies: 2,
    description:
      'Institución que promueve el desarrollo empresarial y la formalización comercial en la región del Chocó.',
  },
  {
    id: 'codechoco',
    name: 'Codechocó',
    initials: 'CO',
    gradient: 'linear-gradient(135deg,#14c58f,#0ea371)',
    category: 'Medio Ambiente',
    location: 'Quibdó, Chocó',
    vacancies: 4,
    description:
      'Corporación Autónoma Regional del Chocó, entidad encargada de la administración y preservación de los recursos naturales.',
  },
  {
    id: 'colegio',
    name: 'Institución Educativa Manuel Saturio Valencia',
    initials: 'MS',
    gradient: 'linear-gradient(135deg,#7c6cf8,#5b4be0)',
    category: 'Educación',
    location: 'Quibdó, Chocó',
    vacancies: 6,
    description:
      'Una de las instituciones educativas más importantes de Quibdó, con tradición de más de 50 años formando ciudadanos.',
  },
]

export const COMPANY_FILTERS = [
  'Todos', 'Salud', 'Construcción', 'Tecnología', 'Educación', 'Comercio', 'Medio Ambiente', 'Legal',
]

export const JOBS = [
  {
    id: 'enfermera-jefe',
    title: 'Enfermera Jefe',
    companyId: 'hospital',
    category: 'Salud',
    contract: 'Indefinido',
    location: 'Quibdó, Chocó',
    salaryMin: 2500000,
    salaryMax: 3200000,
    days: 11,
    top: true,
    summary:
      'Coordinarás el equipo de enfermería del servicio de hospitalización, garantizando la calidad y la seguridad de la atención a los pacientes.',
    requirements: [
      'Título profesional en Enfermería',
      'Tarjeta profesional vigente',
      'Mínimo 2 años de experiencia hospitalaria',
    ],
  },
  {
    id: 'ingeniero-civil',
    title: 'Ingeniero Civil',
    companyId: 'constructora',
    category: 'Ingeniería',
    contract: 'Término fijo',
    location: 'Quibdó, Chocó',
    salaryMin: 3800000,
    salaryMax: 5000000,
    days: 13,
    top: true,
    summary:
      'Liderarás la ejecución de obras de infraestructura vial y social, controlando presupuesto, cronograma y calidad.',
    requirements: [
      'Título de Ingeniería Civil',
      'Matrícula profesional vigente',
      '3 años de experiencia en obra',
    ],
  },
  {
    id: 'docente-matematicas',
    title: 'Docente de Matemáticas',
    companyId: 'colegio',
    category: 'Educación',
    contract: 'Temporal',
    location: 'Quibdó, Chocó',
    salaryMin: 2100000,
    salaryMax: 2700000,
    days: 16,
    top: false,
    summary:
      'Dictarás matemáticas en básica secundaria y media, con planeación de clases y seguimiento del desempeño de los estudiantes.',
    requirements: [
      'Licenciatura en Matemáticas o afín',
      'Experiencia docente deseable',
      'Disponibilidad de jornada completa',
    ],
  },
  {
    id: 'desarrollador-full-stack',
    title: 'Desarrollador Web Full Stack',
    companyId: 'chocodigital',
    category: 'Tecnología',
    contract: 'Indefinido',
    location: 'Quibdó, Chocó (Remoto parcial)',
    salaryMin: 4500000,
    salaryMax: 6000000,
    days: 9,
    top: true,
    summary:
      'Construirás y mantendrás aplicaciones web para clientes del sector público y privado, con trabajo remoto parcial.',
    requirements: [
      'Experiencia con React y Node.js',
      'Manejo de bases de datos SQL',
      'Trabajo con Git en equipo',
    ],
  },
  {
    id: 'administrador-empresas',
    title: 'Administrador de Empresas',
    companyId: 'camara',
    category: 'Administración',
    contract: 'Indefinido',
    location: 'Quibdó, Chocó',
    salaryMin: 3000000,
    salaryMax: 4000000,
    days: 14,
    top: false,
    summary:
      'Apoyarás los programas de formalización y desarrollo empresarial de la Cámara, con atención a comerciantes de la región.',
    requirements: [
      'Profesional en Administración de Empresas o afín',
      '2 años de experiencia',
      'Manejo de Excel y herramientas ofimáticas',
    ],
  },
  {
    id: 'abogado-ambiental',
    title: 'Abogado Especialista en Derecho Ambiental',
    companyId: 'codechoco',
    category: 'Legal',
    contract: 'Indefinido',
    location: 'Quibdó, Chocó',
    salaryMin: 4200000,
    salaryMax: 5500000,
    days: 18,
    top: false,
    summary:
      'Asesorarás a la corporación en procesos sancionatorios y licencias ambientales, y representarás sus intereses en trámites legales.',
    requirements: [
      'Título de Abogado con tarjeta profesional',
      'Especialización en Derecho Ambiental',
      'Experiencia en procesos administrativos',
    ],
  },
]

export const STATS = [
  { value: '347+', label: 'Vacantes activas', tone: 'violet' },
  { value: '89', label: 'Empresas registradas', tone: 'green' },
  { value: '2840+', label: 'Candidatos', tone: 'purple' },
  { value: '1256+', label: 'Postulaciones', tone: 'amber' },
]

export const LOCATIONS = ['Toda Colombia', 'Quibdó', 'Istmina', 'Tadó', 'Remoto']
export const HERO_CHIPS = ['Salud', 'Tecnología', 'Educación', 'Ingeniería', 'Administración']

export const CONTRACTS = ['Todos', 'Indefinido', 'Término fijo', 'Temporal', 'Prestación de servicios']

export const SALARY_RANGES = [
  { value: 'any', label: 'Cualquier salario', test: () => true },
  { value: 'lt2', label: 'Menos de $2M', test: (m) => m < 2e6 },
  { value: '2-3', label: '$2M – $3M', test: (m) => m >= 2e6 && m < 3e6 },
  { value: '3-5', label: '$3M – $5M', test: (m) => m >= 3e6 && m < 5e6 },
  { value: 'gt5', label: 'Más de $5M', test: (m) => m >= 5e6 },
]

export const DATE_RANGES = [
  { value: 'any', label: 'Cualquier fecha', test: () => true },
  { value: '24h', label: 'Últimas 24h', test: (d) => d <= 1 },
  { value: 'week', label: 'Última semana', test: (d) => d <= 7 },
  { value: 'month', label: 'Último mes', test: (d) => d <= 30 },
]

export const SORTS = [
  { value: 'recent', label: 'Más recientes' },
  { value: 'salary-desc', label: 'Mayor salario' },
  { value: 'salary-asc', label: 'Menor salario' },
]

// ---------- Utilidades ----------
export const getCompany = (id) => COMPANIES.find((c) => c.id === id)
export const getJob = (id) => JOBS.find((j) => j.id === id)
export const formatCOP = (n) => `$${n.toLocaleString('es-CO')}`
export const normalize = (s) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export const CONTRACT_CLASS = {
  Indefinido: 'indefinido',
  'Término fijo': 'fijo',
  Temporal: 'temporal',
  'Prestación de servicios': 'servicios',
}
