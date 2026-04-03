import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Atlas Insights – Prediction Markets für Fußball',
    template: '%s | Atlas Insights',
  },
  description:
    'Atlas Insights ist das führende deutschsprachige Wissensportal über Prediction Markets im Fußball. Bundesliga-Prognosen, Champions League Analysen und alles über Sportwetten-Alternativen.',
  keywords: [
    'Prediction Market',
    'Fußball Vorhersage',
    'Bundesliga Prognose',
    'Sportwetten Alternative',
    'Atlas Market',
  ],
  authors: [{ name: 'Atlas Market', url: 'https://atlas.market' }],
  creator: 'Atlas Market',
  metadataBase: new URL('https://atlas-insights.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Atlas Insights',
    title: 'Atlas Insights – Prediction Markets für Fußball',
    description:
      'Prediction Markets erklärt: Bundesliga, Champions League und die smartere Alternative zu klassischen Sportwetten.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Insights – Prediction Markets für Fußball',
    description:
      'Prediction Markets erklärt: Bundesliga, Champions League und die smartere Alternative zu klassischen Sportwetten.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
