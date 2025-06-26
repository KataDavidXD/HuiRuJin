 
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '惠如瑾 - 海事律师与专业潜水员',
  description: '专业的海事法和环境法服务结合专业潜水技能。专门处理国际航运争议和海洋保护。',
  keywords: ['海事法', '潜水教练', '法律服务', '环境法', '技术潜水', 'maritime law', 'diving instructor'],
  authors: [{ name: '惠如瑾' }],
  creator: '惠如瑾',
  publisher: '惠如瑾',
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
      'zh-CN': '/',
    },
  },
  openGraph: {
    title: '惠如瑾 - 海事律师与专业潜水员',
    description: '专业的海事法和环境法服务结合专业潜水技能。',
    url: 'https://katadavidxd.github.io/HuiRuJin',
    siteName: '惠如瑾',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '惠如瑾 - 海事律师与专业潜水员',
    description: '专业的海事法和环境法服务结合专业潜水技能。',
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
    <html lang="zh-CN" suppressHydrationWarning>
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