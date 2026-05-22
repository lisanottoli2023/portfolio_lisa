import ScrollReveal from './ScrollReveal'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '7rem 3rem', background: 'var(--black)', color: '#fff' }}>



      <ScrollReveal>
        <h2 style={{
          fontFamily: 'var(--font-syne)', fontWeight: 800,
          fontSize: 'clamp(3rem, 7vw, 7rem)',
          letterSpacing: '-.04em', lineHeight: .9,
          color: '#fff',
        }}>
          The data
          <span style={{ color: 'transparent', WebkitTextStroke: '2px #fff', display: 'block' }}>won&apos;t model</span>
          <span style={{ color: 'transparent', WebkitTextStroke: '2px #fff', display: 'block' }}>itself.</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <p style={{
          fontSize: '1rem', color: 'rgba(255,255,255,.55)',
          lineHeight: 1.75, marginTop: '2rem', maxWidth: 560,
        }}>
          Hiring for data engineering, ML engineering, or anything in between? Let&apos;s talk. I&apos;m
          especially interested in teams where the output actually matters.
        </p>
      </ScrollReveal>

      <ScrollReveal style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginTop: '2.5rem' } as React.CSSProperties}>
        <a href="mailto:lisa.nottoli@epitech.eu" className="btn" style={{
          background: '#fff', color: 'var(--black)',
          fontFamily: 'var(--font-mono)', fontSize: '.72rem',
          letterSpacing: '.1em', textTransform: 'uppercase',
          padding: '.8rem 1.75rem', borderRadius: 999,
          textDecoration: 'none', display: 'inline-block',
        }}>
          Email me
        </a>
        <a href="https://www.linkedin.com/in/lisa-nottoli-b39131290/" target="_blank" rel="noopener noreferrer" className="btn" style={{
          background: 'transparent', color: '#fff',
          border: '1px solid rgba(255,255,255,.3)',
          fontFamily: 'var(--font-mono)', fontSize: '.72rem',
          letterSpacing: '.1em', textTransform: 'uppercase',
          padding: '.8rem 1.75rem', borderRadius: 999,
          textDecoration: 'none', display: 'inline-block',
        }}>
          LinkedIn
        </a>
        <a href="https://github.com/lisanottoli2023" target="_blank" rel="noopener noreferrer" className="btn" style={{
          background: 'transparent', color: '#fff',
          border: '1px solid rgba(255,255,255,.3)',
          fontFamily: 'var(--font-mono)', fontSize: '.72rem',
          letterSpacing: '.1em', textTransform: 'uppercase',
          padding: '.8rem 1.75rem', borderRadius: 999,
          textDecoration: 'none', display: 'inline-block',
        }}>
          GitHub
        </a>
        <a href="/nottoli_lisa_cv.pdf" download className="btn" style={{
          background: 'transparent', color: '#fff',
          border: '1px solid rgba(255,255,255,.3)',
          fontFamily: 'var(--font-mono)', fontSize: '.72rem',
          letterSpacing: '.1em', textTransform: 'uppercase',
          padding: '.8rem 1.75rem', borderRadius: 999,
          textDecoration: 'none', display: 'inline-block',
        }}>
          Download CV ↓
        </a>
      </ScrollReveal>

      <ScrollReveal style={{
        display: 'flex', gap: '2.5rem', flexWrap: 'wrap',
        marginTop: '2.5rem', paddingTop: '2rem',
        borderTop: '1px solid rgba(255,255,255,.12)',
      } as React.CSSProperties}>
        {[
          ['Location', 'Nice, FR · Remote OK'],
          ['Languages', 'FR · EN'],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: '.35rem' }}>
              {k}
            </div>
            <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1rem' }}>
              {v}
            </div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  )
}
