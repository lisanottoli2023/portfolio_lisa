import ScrollReveal from './ScrollReveal'

const row1 = ['Python', 'Airflow', 'dbt', 'PyTorch', 'PostgreSQL', 'Docker', 'scikit-learn', 'SQL', 'NumPy', 'Kubernetes', 'Helm', 'pandas']
const row2 = ['Metabase', 'SimpleITK', 'Plotly Dash', 'Jenkins', 'OpenCV', 'Prometheus', 'NiBabel', 'Jira', 'scikit-image', 'Loki', 'Scrum', 'SonarQube']

const accented1 = new Set(['Python', 'Airflow', 'PyTorch', 'scikit-learn', 'Kubernetes'])
const accented2 = new Set(['SimpleITK', 'OpenCV', 'Jira', 'Scrum'])

function Pill({ label, accent }: { label: string; accent: boolean }) {
  return (
    <span className={`skill-pill${accent ? ' accent' : ''}`}>
      <span className="skill-pill-dot" />
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 0', background: 'var(--white)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ padding: '0 3rem' }}>
        <ScrollReveal><span className="s-label">Skills</span></ScrollReveal>
        <ScrollReveal><h2 className="s-title">Tools</h2></ScrollReveal>
      </div>

      <ScrollReveal className="marquee-wrapper">
        <div className="marquee-track">
          {[...row1, ...row1].map((s, i) => (
            <Pill key={i} label={s} accent={accented1.has(s)} />
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="marquee-wrapper">
        <div className="marquee-track marquee-track-reverse">
          {[...row2, ...row2].map((s, i) => (
            <Pill key={i} label={s} accent={accented2.has(s)} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
