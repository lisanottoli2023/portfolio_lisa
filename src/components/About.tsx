import ScrollReveal from './ScrollReveal'



export default function About() {
  return (
    <section id="about" style={{
      padding: '6rem 3rem',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: '5rem', alignItems: 'start',
      borderBottom: '1px solid var(--border)',
    }}>
      <ScrollReveal>
        <span className="s-label">About</span>
          <p style={{ marginBottom: '1.1rem' }}>
            I am currently looking for a position in the field of data science or data engineering starting from October 2026.
          </p>
          <p>
            Outside of work I build data projects for fun. that you can find on my project section or on my Github.
          </p>
      </ScrollReveal>


    </section>
  )
}
