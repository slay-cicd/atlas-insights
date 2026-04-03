import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0a0f1c',
        borderTop: '1px solid #1e2d4a',
        padding: '3rem 1.5rem',
        marginTop: '5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                background: '#00ff88',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '14px',
                color: '#0a0f1c',
              }}
            >
              A
            </div>
            <span style={{ fontWeight: 700, color: '#ffffff' }}>Atlas Insights</span>
          </div>
          <p style={{ color: '#718096', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px' }}>
            Das deutschsprachige Wissensportal für Prediction Markets im Fußball. Ein Projekt von{' '}
            <a href="https://atlas.market" style={{ color: '#00ff88', textDecoration: 'none' }}>Atlas Market</a>.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>
            Artikel
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>
              <Link href="/blog/was-sind-prediction-markets" style={{ color: '#718096', textDecoration: 'none', fontSize: '0.9rem' }}>
                Was sind Prediction Markets?
              </Link>
            </li>
            <li>
              <Link href="/blog/prediction-markets-vs-sportwetten" style={{ color: '#718096', textDecoration: 'none', fontSize: '0.9rem' }}>
                Prediction Markets vs Sportwetten
              </Link>
            </li>
            <li>
              <Link href="/blog/prediction-markets-bundesliga-revolution" style={{ color: '#718096', textDecoration: 'none', fontSize: '0.9rem' }}>
                Prediction Markets & Bundesliga
              </Link>
            </li>
            <li>
              <Link href="/blog/warum-prediction-markets-bessere-quoten-bieten" style={{ color: '#718096', textDecoration: 'none', fontSize: '0.9rem' }}>
                Bessere Quoten durch Prediction Markets
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>
            Jetzt starten
          </h3>
          <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>
            Erlebe Prediction Markets für Bundesliga und Champions League direkt auf Atlas Market.
          </p>
          <a
            href="https://atlas.market"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#00ff88',
              color: '#0a0f1c',
              padding: '0.6rem 1.25rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            atlas.market →
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '2rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid #1e2d4a',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p style={{ color: '#4a5568', fontSize: '0.85rem' }}>
          © 2025 Atlas Market. Alle Rechte vorbehalten.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/ueber-uns" style={{ color: '#4a5568', textDecoration: 'none', fontSize: '0.85rem' }}>
            Über uns
          </Link>
        </div>
      </div>
    </footer>
  )
}
