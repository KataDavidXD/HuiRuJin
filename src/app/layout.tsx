 
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HuiRuJin - Maritime Lawyer & Professional Diver',
  description: 'Professional maritime law services combined with expert diving expertise. Specializing in international shipping disputes and marine conservation.',
  keywords: ['maritime law', 'diving instructor', 'legal services', 'environmental law', 'technical diving'],
  authors: [{ name: 'HuiRuJin' }],
  creator: 'HuiRuJin',
  publisher: 'HuiRuJin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://katadavidxd.github.io/HuiRuJin'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'zh': '/zh',
    },
  },
  openGraph: {
    title: 'HuiRuJin - Maritime Lawyer & Professional Diver',
    description: 'Professional maritime law services combined with expert diving expertise.',
    url: 'https://katadavidxd.github.io/HuiRuJin',
    siteName: 'HuiRuJin',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HuiRuJin - Maritime Lawyer & Professional Diver',
    description: 'Professional maritime law services combined with expert diving expertise.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
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
    <html lang="en" suppressHydrationWarning>
      <body 
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}