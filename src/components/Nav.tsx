'use client'

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.25rem 3rem',
      background: 'rgba(245,243,239,.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--font-syne)', fontWeight: 800,
          fontSize: '.9rem', color: 'var(--black)',
          textDecoration: 'none', letterSpacing: '-.01em',
        }}
      >
        Lisa.
      </a>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {[
          ['About', '#about'],
          ['Skills', '#skills'],
          ['Projects', '#projects'],
          ['Experience', '#experience'],
          ['Contact', '#contact'],
        ].map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '.72rem',
                letterSpacing: '.1em',
                color: 'var(--muted)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color .2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--black)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
