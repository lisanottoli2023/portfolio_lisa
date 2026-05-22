import ScrollReveal from './ScrollReveal'

const experiences = [
  {
    role: 'Data Engineer apprentice',
    company: 'Median Technologies, Sophia Antipolis',
    dates: '2025 – 2026',
    tags: ['Dash', 'PostgreSQL', 'Docker', 'Jenkins', 'SonarQube', 'Pydicom'],
  },
  {
    role: 'Data Scientist apprentice',
    company: 'AMK Biotech, Sophia Antipolis',
    dates: '2024 – 2025',
    tags: ['PyTorch', 'scikit-image', 'NumPy', 'Tiffile', 'Pandas'],
  },
  {
    role: 'Master in Artificial Intelligence & Big Data',
    company: 'Epitech Nice : Graduation in September 2026',
    dates: '2023 – Now',
    tags: ['Data Science', 'Data Engineering'],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 3rem', background: 'var(--white)', borderBottom: '1px solid var(--border)' }}>

      <ScrollReveal style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'start',
      } as React.CSSProperties}>
        <div>
          <span className="s-label">Experience</span>
          <h2 className="s-title" style={{ marginBottom: 0 }}>A snapshot<br />of my journey.</h2>
        </div>
        <p style={{ fontSize: '.97rem', color: 'var(--muted)', lineHeight: 1.75, paddingTop: '.5rem' }}>
          ....
        </p>
      </ScrollReveal>

      <ScrollReveal style={{ marginTop: '3rem' }}>
        {experiences.map((exp, i) => (
          <ExpRow key={exp.role + exp.company} exp={exp} first={i === 0} />
        ))}
      </ScrollReveal>
    </section>
  )
}

function ExpRow({ exp, first }: {
  exp: { role: string; company: string; dates: string; tags: string[] }
  first: boolean
}) {
  return (
    <div className="exp-row" style={{
      display: 'grid', gridTemplateColumns: '1fr auto',
      alignItems: 'center', gap: '2rem',
      padding: '2rem 0',
      borderBottom: '1px solid var(--border)',
      borderTop: first ? '1px solid var(--border)' : 'none',
      cursor: 'pointer',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.2rem' }}>
        <span className="exp-role" style={{
          fontFamily: 'var(--font-syne)', fontWeight: 700,
          fontSize: '1.35rem', letterSpacing: '-.02em',
          transition: 'color .2s',
        }}>
          {exp.role}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.75rem', color: 'var(--muted)', letterSpacing: '.06em' }}>
          {exp.company}
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem', marginTop: '.5rem' }}>
          {exp.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
        </div>
      </div>
      <div className="exp-date" style={{
        fontFamily: 'var(--font-syne)', fontWeight: 800,
        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
        letterSpacing: '-.04em',
        whiteSpace: 'nowrap', textAlign: 'right',
        transition: 'color .2s',
      }}>
        {exp.dates}
      </div>
    </div>
  )
}
