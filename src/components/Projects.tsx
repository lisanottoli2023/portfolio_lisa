'use client'

import ScrollReveal from './ScrollReveal'

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)' }}>

      {/* Header */}
      <ScrollReveal style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-end', gap: '4rem',
        marginBottom: '2.5rem', flexWrap: 'wrap',
      } as React.CSSProperties}>
        <div>
          <span className="s-label">Projects</span>
          <h2 className="s-title" style={{ marginBottom: 0 }}>Things I&apos;ve built.</h2>
        </div>
        <div style={{
          display: 'flex', gap: '2rem',
          fontFamily: 'var(--font-mono)', fontSize: '.7rem',
          color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase',
        }}>
          <span><strong style={{ color: 'var(--black)', fontWeight: 500 }}>03</strong> Shipped</span>
          <span><strong style={{ color: 'var(--black)', fontWeight: 500 }}>01</strong> In progress</span>
          <span><strong style={{ color: 'var(--black)', fontWeight: 500 }}>2025</strong> Last updated</span>
        </div>
      </ScrollReveal>

      {/* V4 Grid */}
      <ScrollReveal style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '1.5rem' } as React.CSSProperties}>

        {/* Featured card */}
        <a href="https://github.com/lisanottoli2023/stadium-flow" target="_blank" rel="noopener noreferrer" style={{
          backgroundImage: 'url(/pipeline_statdium.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 22, padding: '2.5rem',
          color: '#fff',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative', overflow: 'hidden',
          minHeight: 560,
          textDecoration: 'none',
        }}>
          {/* dark overlay for legibility */}
          <span style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,.55) 0%, rgba(0,0,0,.7) 100%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '.68rem',
              letterSpacing: '.15em', textTransform: 'uppercase',
              background: 'rgba(255,255,255,.2)',
              padding: '.35rem .75rem', borderRadius: 999,
            }}>
              Data Engineering
            </span>
            <span style={{
              fontFamily: 'var(--font-syne)', fontWeight: 800,
              fontSize: '2rem', letterSpacing: '-.02em', lineHeight: 1,
              position: 'relative',
            }}>01</span>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              fontFamily: 'var(--font-syne)', fontWeight: 800,
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              letterSpacing: '-.04em', lineHeight: .95,
              marginTop: '2rem',
            }}>
              Stadium.
            </div>
            <p style={{
              fontSize: '.98rem', lineHeight: 1.7,
              color: 'rgba(255,255,255,.85)',
              maxWidth: 460, marginTop: '1.25rem',
            }}>
              End-to-end football analytics pipeline. Public APIs ingested via Airflow, modelled with
              dbt, served through Metabase. A sandbox where I get to practise the entire data
              engineering lifecycle.
            </p>
            <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {['Airflow', 'dbt', 'PostgreSQL', 'Metabase', 'Docker'].map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '.65rem',
                  background: 'rgba(255,255,255,.15)',
                  border: '1px solid rgba(255,255,255,.25)',
                  color: '#fff',
                  padding: '.3rem .6rem', borderRadius: 999,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{
            position: 'relative',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', gap: '1rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,.25)',
            marginTop: '2rem',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '.72rem',
              color: 'var(--black)', background: '#fff',
              padding: '.8rem 1.5rem', borderRadius: 999,
              letterSpacing: '.08em', textTransform: 'uppercase',
            }}>
              View case study →
            </span>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '.68rem',
              color: 'rgba(255,255,255,.75)', letterSpacing: '.1em',
              textTransform: 'uppercase', textAlign: 'right',
            }}>
              <strong style={{
                color: '#fff', fontWeight: 500, display: 'block',
                fontSize: '1.5rem', fontFamily: 'var(--font-syne)',
                marginBottom: '.15rem', letterSpacing: '-.02em',
              }}>
              </strong>
              Pipeline runs
            </div>
          </div>
        </a>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          <MiniCard
            num="02"
            thumb="dark"
            href="https://github.com/EpitechMscProPromo2026/T-CLO-902-NCE_2"
            eyebrow="Cloud / Infra · Epitech"
            name="KubeQuest"
            desc="Helm-deployed monitoring & logging stack on AWS — Prometheus + Loki, observability from scratch."
          />

          <MiniCard
            num="03"
            thumb="outline"
            href="https://github.com/lisanottoli2023/histopathology-robustness-ihc"
            eyebrow="ML / Computer Vision · Research"
            name="Histopathology IHC"
            desc="Robustness evaluation of deep learning models on IHC-stained histopathology images — domain shift, stain variability, and generalisation under distribution shift."
          />

              </div>
      </ScrollReveal>
    </section>
  )
}

function MiniCard({ num, thumb, eyebrow, name, desc, href }: {
  num: string
  thumb: 'dark' | 'outline'
  eyebrow: string
  name: string
  desc: string
  href?: string
}) {
  return (
    <a href={href ?? '#'} target="_blank" rel="noopener noreferrer" style={{
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 18, padding: '1.5rem 1.75rem',
      display: 'grid',
      gridTemplateColumns: '56px 1fr auto',
      alignItems: 'center', gap: '1.25rem',
      flex: 1,
      textDecoration: 'none',
      color: 'inherit',
      transition: 'border-color .2s',
    }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--black)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      <div style={{
        width: 56, height: 56, borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.3rem',
        letterSpacing: '-.02em',
        color: thumb === 'dark' ? '#fff' : 'var(--black)',
        background: thumb === 'dark' ? 'var(--black)' : 'transparent',
        border: thumb === 'outline' ? '1.5px solid var(--black)' : 'none',
        flexShrink: 0,
      }}>
        {num}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '.62rem',
          letterSpacing: '.12em', textTransform: 'uppercase',
          color: 'var(--muted)', marginBottom: '.25rem',
        }}>
          {eyebrow}
        </div>
        <div style={{
          fontFamily: 'var(--font-syne)', fontWeight: 700,
          fontSize: '1.35rem', letterSpacing: '-.02em', marginBottom: '.35rem',
        }}>
          {name}
        </div>
        <p style={{ fontSize: '.8rem', color: 'var(--muted)', lineHeight: 1.55 }}>
          {desc}
        </p>
      </div>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--muted)',
        width: 36, height: 36, borderRadius: '50%',
        border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        →
      </span>
    </a>
  )
}
