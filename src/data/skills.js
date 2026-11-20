// Les SVG sont servis via jsDelivr (CDN) pour les logos tiers
// Les logos AWS sont en local dans /images/logos/

const CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons'

export const skillsData = {
  cloud: {
    icon: 'cloud',
    items: [
      { name: 'AWS',            logo: '/images/logos/amazonaws.svg',   logoBg: '#FF9900' },
      { name: 'Terraform',      logo: `${CDN}/terraform.svg`,          logoBg: '#7B42BC' },
      { name: 'Docker',         logo: `${CDN}/docker.svg`,             logoBg: '#2496ED' },
      { name: 'Kubernetes',     logo: `${CDN}/kubernetes.svg`,         logoBg: '#326CE5' },
      { name: 'Linux',          logo: `${CDN}/linux.svg`,              logoBg: '#FCC624' },
      { name: 'Git',            logo: `${CDN}/git.svg`,                logoBg: '#F05032' },
      { name: 'Jenkins',        logo: `${CDN}/jenkins.svg`,            logoBg: '#D24939' },
      { name: 'GitHub Actions', logo: `${CDN}/githubactions.svg`,      logoBg: '#2088FF' },
    ],
  },
  backend: {
    icon: 'server',
    items: [
      { name: 'Java',       logo: `${CDN}/openjdk.svg`,    logoBg: '#ED8B00' },
      { name: 'Python',     logo: `${CDN}/python.svg`,     logoBg: '#3776AB' },
      { name: 'Spring Boot',logo: `${CDN}/springboot.svg`, logoBg: '#6DB33F' },
      { name: 'Flask',      logo: `${CDN}/flask.svg`,      logoBg: '#555555' },
      { name: 'FastAPI',    logo: `${CDN}/fastapi.svg`,    logoBg: '#009688' },
      { name: 'REST APIs',  logo: null,                    logoBg: null },
    ],
  },
  frontend: {
    icon: 'monitor',
    items: [
      { name: 'React',       logo: `${CDN}/react.svg`,       logoBg: '#20232A' },
      { name: 'Angular',     logo: `${CDN}/angular.svg`,     logoBg: '#DD0031' },
      { name: 'JavaScript',  logo: `${CDN}/javascript.svg`,  logoBg: '#F7DF1E' },
      { name: 'TypeScript',  logo: `${CDN}/typescript.svg`,  logoBg: '#3178C6' },
      { name: 'HTML5',       logo: `${CDN}/html5.svg`,       logoBg: '#E34F26' },
      { name: 'CSS3',        logo: `${CDN}/css3.svg`,        logoBg: '#1572B6' },
    ],
  },
  ai: {
    icon: 'cpu',
    items: [
      { name: 'Generative AI', logo: null, logoBg: null },
      { name: 'LLMs',          logo: null, logoBg: null },
      { name: 'NLP',           logo: null, logoBg: null },
      { name: 'Embeddings',    logo: null, logoBg: null },
      { name: 'Ollama',        logo: null, logoBg: null },
      { name: 'AWS Bedrock',   logo: '/images/logos/amazonbedrock.svg',  logoBg: '#232F3E' },
      { name: 'SageMaker',     logo: '/images/logos/amazonsagemaker.svg', logoBg: '#232F3E' },
    ],
  },
  databases: {
    icon: 'database',
    items: [
      { name: 'PostgreSQL', logo: `${CDN}/postgresql.svg`,           logoBg: '#4169E1' },
      { name: 'MySQL',      logo: `${CDN}/mysql.svg`,                logoBg: '#4479A1' },
      { name: 'DynamoDB',   logo: '/images/logos/amazondynamodb.svg', logoBg: '#4053D6' },
      { name: 'RDS',        logo: '/images/logos/amazonrds.svg',      logoBg: '#FF9900' },
      { name: 'Redis',      logo: `${CDN}/redis.svg`,                logoBg: '#DC382D' },
      { name: 'Prometheus', logo: `${CDN}/prometheus.svg`,           logoBg: '#E6522C' },
      { name: 'Grafana',    logo: `${CDN}/grafana.svg`,              logoBg: '#F46800' },
    ],
  },
}
