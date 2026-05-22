const pipelineNodes = [
  { num: '01', stage: '2023 · Source',   tool: 'Registered Nurse',              tag: 'Pivot',        active: false, dashed: false },
  { num: '02', stage: '2024-2025 · Transform', tool: 'Data Scientist at AMK Biotech', tag: 'Python',      active: false, dashed: false },
  { num: '03', stage: '2025-2026 · Now',       tool: 'Data Engineer  at Median Technologies ',  tag: 'Airflow', active: true,  dashed: false },
  { num: '04', stage: '2026 · Sink',      tool: 'Available in October 2026',               tag: 'Open',         active: false, dashed: true  },
]

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      padding: '8rem 3rem 4rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center',
      borderBottom: '1px solid var(--border)',
    }}>
      {/* Left */}
      <div className="animate-fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '.72rem',
          letterSpacing: '.18em', textTransform: 'uppercase',
          color: 'var(--coral2)', display: 'flex', alignItems: 'center', gap: '.75rem',
        }}>
      </div> 


        <h1 style={{
          fontFamily: 'var(--font-syne)', fontWeight: 800,
          fontSize: 'clamp(3rem, 6vw, 5.5rem)',
          lineHeight: .95, letterSpacing: '-.04em',
        }}>
          Lisa.<br />
          <span style={{ color: 'var(--coral2)', fontStyle: 'italic', fontWeight: 500 }}>
            data engineer
          </span>
        </h1>

        <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: 460 }}>
          Three years of school projects spanning web development, project management, data science, and data engineering.
                    Alongside that, worked in two environments where I got to apply those skills in the real world: a biotech startup and a medtech scale-up.
        </p>

        <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
          <a href="#projects" className="btn btn-primary">View projects</a>
          <a href="#contact" className="btn btn-outline">Get in touch</a>
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '.65rem',
          color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase',
        }}>
          Based in Nice, France open to <strong style={{ color: 'var(--black)', fontWeight: 500 }}>full-time roles starting October 2026</strong>
        </div>
      </div>

      {/* Right — Pipeline card */}
      <div className="animate-fade-up-delay" style={{
        border: '1px solid var(--border)', borderRadius: 18,
        background: 'var(--white)', padding: '2rem',
        boxShadow: '0 30px 60px -30px rgba(14,13,12,.12)',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingBottom: '1rem', borderBottom: '1px solid var(--border)',
          marginBottom: '1.25rem',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.68rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            ~/lisa.pipeline · <strong style={{ color: 'var(--black)', fontWeight: 500 }}>career.dag</strong>
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '.6rem',
            letterSpacing: '.12em', textTransform: 'uppercase',
            color: '#4caf6e', display: 'flex', alignItems: 'center', gap: '.4rem',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#4caf6e',
              boxShadow: '0 0 0 3px rgba(76,175,110,.18)',
              display: 'block',
            }} />
            running
          </span>
        </div>

        {/* Nodes */}
        {pipelineNodes.map((node, i) => (
          <div key={node.num} style={{
            display: 'grid', gridTemplateColumns: '36px 1fr auto',
            alignItems: 'center', gap: '1rem',
            padding: '.85rem 1rem',
            border: `1px ${node.dashed ? 'dashed' : 'solid'} var(--border)`,
            borderRadius: 10,
            background: 'var(--bg)',
            position: 'relative',
            marginTop: i > 0 ? '1.5rem' : 0,
            opacity: node.dashed ? .6 : 1,
          }}>
            {/* Connector line + arrow */}
            {i > 0 && (
              <>
                <span style={{
                  content: '', position: 'absolute', top: '-1.5rem', left: 18,
                  width: 1, height: '1.5rem', background: 'var(--border)', display: 'block',
                }} />
                <span style={{
                  content: '', position: 'absolute', top: '-.55rem', left: 14,
                  width: 9, height: 9,
                  borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
                  transform: 'rotate(45deg)', background: 'var(--bg)', display: 'block',
                }} />
              </>
            )}

            <span style={{
              width: 36, height: 36, borderRadius: '50%',
              background: node.active ? 'var(--coral)' : 'var(--white)',
              border: `1px solid ${node.active ? 'var(--coral)' : 'var(--border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-mono)', fontSize: '.7rem',
              color: node.active ? '#fff' : 'var(--black)',
            }}>
              {node.num}
            </span>

            <div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '.6rem',
                letterSpacing: '.12em', textTransform: 'uppercase',
                color: 'var(--muted)', marginBottom: '.15rem',
              }}>
                {node.stage}
              </div>
              <div style={{
                fontFamily: 'var(--font-syne)', fontWeight: 700,
                fontSize: '1.05rem', letterSpacing: '-.02em',
              }}>
                {node.tool}
              </div>
            </div>

            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '.6rem',
              letterSpacing: '.1em', textTransform: 'uppercase',
              background: node.active ? 'rgba(212,168,193,.12)' : 'var(--white)',
              border: `1px solid ${node.active ? 'rgba(212,168,193,.35)' : 'var(--border)'}`,
              color: node.active ? 'var(--coral2)' : 'var(--muted)',
              padding: '.2rem .55rem', borderRadius: 999,
            }}>
              {node.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
