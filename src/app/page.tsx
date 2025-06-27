import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '惠如瑾律师 Jasmine Hui - 民商事律师',
  description: '我是惠如瑾Jasmine Hui，专注于民商事争议解决、婚姻家事诉讼及体育娱乐法律事务。北京乾成律师事务所（深圳）。',
  keywords: ['惠如瑾', 'Jasmine Hui', '律师', '民商事诉讼', '婚姻家事', '体育娱乐法', '乾成律师事务所'],
  authors: [{ name: '惠如瑾 Jasmine Hui' }],
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
    title: '惠如瑾律师 Jasmine Hui - 民商事律师',
    description: '专注于民商事争议解决、婚姻家事诉讼及体育娱乐法律事务。北京乾成律师事务所（深圳）。',
    url: 'https://katadavidxd.github.io/HuiRuJin',
    siteName: '惠如瑾律师',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#02AFB7', color: '#F5CB76' }}>
      {/* Language Toggle Bar */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-end">
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded bg-blue-600 text-white text-sm font-medium">
              中文
            </span>
            <a 
              href="/en" 
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm font-medium transition-colors"
            >
              English
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Avatar - Left side, rectangular */}
            <div className="flex-shrink-0">
              <img 
                src={`${process.env.NODE_ENV === 'production' ? '/HuiRuJin' : ''}/images/profile/jasmine-hui.png`}
                alt="惠如瑾律师 Jasmine Hui" 
                className="w-64 h-80 object-cover border-4 border-white/20 shadow-xl"
                style={{ borderColor: '#F5CB76' }}
              />
            </div>
            
            {/* Text Content - Right side */}
            <div className="flex-1 text-left">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4" style={{ color: '#F5CB76' }}>
                惠如瑾律师
              </h1>
              <h2 className="text-xl md:text-2xl mb-4 font-light" style={{ color: '#F5CB76' }}>
                Jasmine Hui
              </h2>
              <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: '#F5CB76' }}>
                北京乾成律师事务所（深圳）
              </p>
              <p className="text-lg md:text-xl mb-8 leading-relaxed italic" style={{ color: '#F5CB76' }}>
                "Earth Needs Funny Jigsaw. 世界需要有趣的拼图。"
              </p>
              <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: '#F5CB76' }}>
                民商事争议解决 | 婚姻家事诉讼 | 体育娱乐法律事务
              </p>
              
              {/* New Button Layout */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/about" 
                  className="bg-black text-pink-400 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-gray-800"
                >
                  个人介绍
                </a>
                <a 
                  href="/resources" 
                  className="bg-black text-pink-400 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-gray-800"
                >
                  能帮助链接的资源
                </a>
                <a 
                  href="/contact" 
                  className="bg-black text-pink-400 px-8 py-3 rounded-lg font-medium transition-colors hover:bg-gray-800"
                >
                  联系方式
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Introduction Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F5CB76' }}>
              法律专业与人文温度的结合
            </h2>
            <p className="text-lg max-w-4xl mx-auto" style={{ color: '#F5CB76' }}>
              我始终认为法律不该是冰冷僵硬的工具。在帮助客户解决纠纷、平衡各方利益的过程中，我致力于为客户提供清晰、高效、切实可行的解决方案，希望能在他们需要的时候，成为值得信赖的伙伴，带来一点光亮。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white/10 p-6 rounded-lg">
              <div className="text-4xl mb-4">⚖️</div>
              <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>民商事争议解决</h4>
              <p className="text-sm" style={{ color: '#F5CB76' }}>专业处理各类商事纠纷，提供高效解决方案</p>
            </div>
            <div className="text-center bg-white/10 p-6 rounded-lg">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>婚姻家事诉讼</h4>
              <p className="text-sm" style={{ color: '#F5CB76' }}>用法律守护家庭，平衡各方利益与情感</p>
            </div>
            <div className="text-center bg-white/10 p-6 rounded-lg">
              <div className="text-4xl mb-4">🏃‍♀️</div>
              <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>体育娱乐法律事务</h4>
              <p className="text-sm" style={{ color: '#F5CB76' }}>专业处理体育娱乐行业相关法律事务</p>
            </div>
          </div>

          <div className="text-center">
            <blockquote className="text-xl italic max-w-4xl mx-auto" style={{ color: '#F5CB76' }}>
              "法律人的责任，不仅在于专业，更在于对生命和社会的关怀。我希望在专业与公益、规则与人情、个体与社群的交汇点上不断前行，用法律守护值得守护的，用行动传递力所能及的温暖。"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Simple Contact at Bottom */}
      <footer className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" style={{ color: '#F5CB76' }}>
            联系方式
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>💬 微信咨询</h4>
              <p className="text-sm" style={{ color: '#F5CB76' }}>惠子律师Jasmine</p>
              <p className="text-xs opacity-80" style={{ color: '#F5CB76' }}>ID: _Lyjasmine99</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>💼 LinkedIn</h4>
              <p className="text-sm" style={{ color: '#F5CB76' }}>专业网络连接</p>
              <p className="text-xs opacity-80" style={{ color: '#F5CB76' }}>Jasmine Hui</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8">
            <p className="text-sm opacity-80" style={{ color: '#F5CB76' }}>
              © 2024 惠如瑾律师 Jasmine Hui。用法律守护值得守护的，用行动传递温暖。
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}