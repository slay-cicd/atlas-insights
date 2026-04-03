'use client'

import Link from 'next/link'
import { PostMeta } from '@/lib/posts'

interface ArticleCardProps {
  post: PostMeta
  featured?: boolean
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}

const categoryColors: Record<string, string> = {
  Grundlagen: '#3b82f6',
  Vergleich: '#8b5cf6',
  Bundesliga: '#ef4444',
  'Champions League': '#f59e0b',
}

export default function ArticleCard({ post, featured = false }: ArticleCardProps) {
  const catColor = categoryColors[post.category] || '#00ff88'

  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <article
        style={{
          background: '#141d35',
          border: '1px solid #1e2d4a',
          borderRadius: '12px',
          padding: featured ? '2rem' : '1.5rem',
          transition: 'border-color 0.2s, transform 0.2s',
          cursor: 'pointer',
          height: '100%',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.borderColor = '#00ff88'
          el.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.borderColor = '#1e2d4a'
          el.style.transform = 'translateY(0)'
        }}
      >
        {/* Category + read time */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span
            style={{
              background: `${catColor}22`,
              color: catColor,
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {post.category}
          </span>
          <span style={{ color: '#4a5568', fontSize: '0.8rem' }}>{post.readTime} Min. Lesezeit</span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: featured ? '1.4rem' : '1.1rem',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.35,
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
          }}
        >
          {post.title}
        </h2>

        {/* Description */}
        <p
          style={{
            color: '#718096',
            fontSize: '0.9rem',
            lineHeight: 1.65,
            marginBottom: '1.25rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.description}
        </p>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#4a5568', fontSize: '0.8rem' }}>{formatDate(post.date)}</span>
          <span style={{ color: '#00ff88', fontSize: '0.85rem', fontWeight: 600 }}>
            Weiterlesen →
          </span>
        </div>
      </article>
    </Link>
  )
}
