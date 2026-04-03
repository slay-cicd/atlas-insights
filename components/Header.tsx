'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{
        background: 'rgba(10, 15, 28, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1e2d4a',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              background: '#00ff88',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '16px',
              color: '#0a0f1c',
            }}
          >
            A
          </div>
          <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
            Atlas <span style={{ color: '#00ff88' }}>Insights</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}
            className="nav-link">
            Blog
          </Link>
          <Link href="/ueber-uns" style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
            Über uns
          </Link>
          <a
            href="https://atlas.market"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#00ff88',
              color: '#0a0f1c',
              padding: '0.5rem 1.25rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'background 0.2s',
            }}
          >
            Zu Atlas Market →
          </a>
        </nav>
      </div>
    </header>
  )
}
