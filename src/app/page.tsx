import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '惠如瑾律师 Jasmine Hui - 民商事律师与社群连接者',
  description: '我是惠如瑾Jasmine Hui，专注于民商事争议解决、婚姻家事诉讼及体育娱乐法律事务。ENFP性格，热衷社群建设与公益事业。',
  keywords: ['惠如瑾', 'Jasmine Hui', '律师', '民商事诉讼', '婚姻家事', '体育娱乐法', '社群建设', '公益'],
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
    title: '惠如瑾律师 Jasmine Hui - 民商事律师与社群连接者',
    description: '专注于民商事争议解决、婚姻家事诉讼及体育娱乐法律事务。ENFP性格，热衷社群建设与公益事业。',
    url: 'https://katadavidxd.github.io/HuiRuJin',
    siteName: '惠如瑾律师',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
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
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-blue-600 text-white min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <img 
              src="/images/profile/jasmine-hui.png" 
              alt="惠如瑾律师 Jasmine Hui" 
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-xl object-cover"
            />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            惠如瑾律师
          </h1>
          <h2 className="text-xl md:text-2xl mb-4 font-light">
            Jasmine Hui
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed italic">
            "Earth Needs Funny Jigsaw. 世界需要有趣的拼图。"
          </p>
          <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            民商事争议解决 | 婚姻家事诉讼 | 体育娱乐法律事务<br/>
            ENFP社群连接者 | 海洋保护志愿者 | 宠物律师团队成员
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              法律咨询
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              社群连接
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              法律专业与人文温度的结合
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              我始终认为法律不该是冰冷僵硬的工具。在帮助客户解决纠纷、平衡各方利益的过程中，我致力于为客户提供清晰、高效、切实可行的解决方案，希望能在他们需要的时候，成为值得信赖的伙伴，带来一点光亮。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                教育背景与专业经历
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-600 mb-2">教育背景</h4>
                  <p className="text-gray-700 mb-2">📚 硕士：英国格拉斯哥大学 国际商法硕士</p>
                  <p className="text-gray-700">🎓 本科：西北政法大学法律系</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-600 mb-2">实习经历</h4>
                  <p className="text-gray-700 text-sm">
                    法院、律所、投行、咨询、私募基金、创业公司、跨境电商等多领域实习经验，深入理解商业运作的底层逻辑。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                专业领域
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">⚖️ 民商事争议解决</h4>
                  <p className="text-blue-700 text-sm">专业处理各类商事纠纷，提供高效解决方案</p>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">👨‍👩‍👧‍👦 婚姻家事诉讼</h4>
                  <p className="text-pink-700 text-sm">用法律守护家庭，平衡各方利益与情感</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🏃‍♀️ 体育娱乐法律事务</h4>
                  <p className="text-purple-700 text-sm">专业处理体育娱乐行业相关法律事务</p>
                </div>
              </div>
            </div>
          </div>

          {/* ENFP Personality Section */}
          <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                ENFP性格：90%快乐小狗属性 🐕
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                我是个典型的ENFP，热爱与人连接，充满活力。我相信真诚的交流能创造无限可能。
                严谨的法律工作和热忱的社交连接并不矛盾，它们共同构成了我理解世界和实现自我价值的方式。
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h4 className="font-semibold text-gray-800 mb-2">社群建设</h4>
                <p className="text-sm text-gray-600">西安/广州留学生群<br/>全球潜水员群<br/>北京互联网大厂群</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-semibold text-gray-800 mb-2">律师网络</h4>
                <p className="text-sm text-gray-600">活跃于全国数十个律师社群<br/>结识众多优秀律师朋友</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💫</div>
                <h4 className="font-semibold text-gray-800 mb-2">价值理念</h4>
                <p className="text-sm text-gray-600">广结善缘，真诚靠谱<br/>链接资源，搭建桥梁</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Service Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            公益实践：用行动传递温暖
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ocean Conservation */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-xl">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">🌊 海洋保护志愿者</h3>
              <p className="text-gray-700 mb-4">
                作为潜水志愿者，积极参与多次潜水捡垃圾活动，用实际行动保护我们的海洋环境。
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 海洋清洁行动志愿者</li>
                <li>• 潜水环保宣传</li>
                <li>• 海洋生态保护倡导</li>
              </ul>
            </div>

            {/* Pet Legal Services */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-8 rounded-xl">
              <div className="text-pink-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">🐾 宠物律师团队</h3>
              <p className="text-gray-700 mb-4">
                作为"宠物律师"团队的一员，不仅为宠物提供法律支持，更深知这背后守护的是人与动物之间那份珍贵的情感连接。
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 流浪动物救助法律支持</li>
                <li>• 宠物权益保护</li>
                <li>• 人动物情感连接守护</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <blockquote className="text-xl italic text-gray-700 max-w-4xl mx-auto">
              "法律人的责任，不仅在于专业，更在于对生命和社会的关怀。我希望在专业与公益、规则与人情、个体与社群的交汇点上不断前行，用法律守护值得守护的，用行动传递力所能及的温暖。"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            让我们连接，创造更多可能
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            无论您需要专业的法律建议、想要加入我们的社群，还是共同参与公益活动，都欢迎与我联系。
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">💬 微信咨询</h4>
              <p className="text-gray-300 text-sm">惠子律师Jasmine</p>
              <p className="text-gray-400 text-xs">ID: _Lyjasmine99</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">📱 小红书</h4>
              <p className="text-gray-300 text-sm">分享法律见解与生活</p>
              <p className="text-gray-400 text-xs">ID: 6250249873</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">💼 LinkedIn</h4>
              <p className="text-gray-300 text-sm">专业网络连接</p>
              <p className="text-gray-400 text-xs">Jasmine Hui</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              法律咨询预约
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors">
              加入社群
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl font-bold mb-4">
                惠如瑾律师 Jasmine Hui
              </h3>
              <p className="text-gray-400 mb-4">
                "Earth Needs Funny Jigsaw. 世界需要有趣的拼图。"
              </p>
              <p className="text-gray-500 text-sm">
                法律是专业的基石，用以明辨是非；而仁心与连接，则是让这份专业产生温度的灵魂。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">专业领域</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>民商事争议解决</li>
                <li>婚姻家事诉讼</li>
                <li>体育娱乐法律事务</li>
                <li>法律咨询服务</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">社群与公益</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>海洋保护志愿者</li>
                <li>宠物律师团队</li>
                <li>社群连接建设</li>
                <li>法律公益服务</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 惠如瑾律师 Jasmine Hui。用法律守护值得守护的，用行动传递温暖。
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}