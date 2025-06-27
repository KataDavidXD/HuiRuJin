import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '个人介绍 - 惠如瑾律师 Jasmine Hui',
  description: '惠如瑾律师的教育背景与专业经历，包括格拉斯哥大学国际商法硕士、西北政法大学本科及多领域实习经验。',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#93B8D4', color: '#F5CB76' }}>
      {/* Language Toggle Bar */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <a 
            href="/" 
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            ← 返回首页
          </a>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded bg-blue-600 text-white text-sm font-medium">
              中文
            </span>
            <a 
              href="/en/about" 
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm font-medium transition-colors"
            >
              English
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6" style={{ color: '#F5CB76' }}>
            个人介绍
          </h1>
          <p className="text-xl mb-8" style={{ color: '#F5CB76' }}>
            教育背景与专业经历
          </p>
        </div>
      </section>

      {/* Education Background */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8" style={{ color: '#F5CB76' }}>
                教育背景
              </h2>
              <div className="space-y-6">
                <div className="bg-white/10 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">🎓</span>
                    <div>
                      <h3 className="font-semibold text-xl" style={{ color: '#F5CB76' }}>硕士学位</h3>
                      <p className="text-sm opacity-80" style={{ color: '#F5CB76' }}>2022-2023</p>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>英国格拉斯哥大学</h4>
                  <p className="mb-2" style={{ color: '#F5CB76' }}>国际商法硕士 (LLM in International Commercial Law)</p>
                  <ul className="text-sm opacity-90" style={{ color: '#F5CB76' }}>
                    <li>• 深入学习国际贸易法、国际投资法</li>
                    <li>• 掌握英美法系法律思维与实务操作</li>
                    <li>• 跨文化法律环境下的专业训练</li>
                  </ul>
                </div>

                <div className="bg-white/10 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">📚</span>
                    <div>
                      <h3 className="font-semibold text-xl" style={{ color: '#F5CB76' }}>本科学位</h3>
                      <p className="text-sm opacity-80" style={{ color: '#F5CB76' }}>2018-2022</p>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>西北政法大学</h4>
                  <p className="mb-2" style={{ color: '#F5CB76' }}>法学学士 (Bachelor of Laws)</p>
                  <ul className="text-sm opacity-90" style={{ color: '#F5CB76' }}>
                    <li>• 系统学习中国法律体系</li>
                    <li>• 扎实的法学理论基础</li>
                    <li>• 优秀的学术表现与实践能力</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-8" style={{ color: '#F5CB76' }}>
                专业经历
              </h2>
              <div className="space-y-6">
                <div className="bg-white/10 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">⚖️</span>
                    <div>
                      <h3 className="font-semibold text-xl" style={{ color: '#F5CB76' }}>执业律师</h3>
                      <p className="text-sm opacity-80" style={{ color: '#F5CB76' }}>2023年至今</p>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>北京乾成律师事务所（深圳）</h4>
                  <p className="mb-2" style={{ color: '#F5CB76' }}>专职律师</p>
                  <ul className="text-sm opacity-90" style={{ color: '#F5CB76' }}>
                    <li>• 专注民商事争议解决</li>
                    <li>• 婚姻家事法律服务</li>
                    <li>• 体育娱乐法律事务</li>
                    <li>• 为客户提供全方位法律咨询</li>
                  </ul>
                </div>

                <div className="bg-white/10 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">💼</span>
                    <div>
                      <h3 className="font-semibold text-xl" style={{ color: '#F5CB76' }}>多领域实习</h3>
                      <p className="text-sm opacity-80" style={{ color: '#F5CB76' }}>2020-2023</p>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-4" style={{ color: '#F5CB76' }}>丰富的实践经验</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm" style={{ color: '#F5CB76' }}>
                    <div>
                      <p className="font-medium mb-1">司法系统</p>
                      <p className="opacity-80">• 法院实习</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">法律服务</p>
                      <p className="opacity-80">• 律师事务所</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">金融领域</p>
                      <p className="opacity-80">• 投资银行<br/>• 私募基金</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">商业实践</p>
                      <p className="opacity-80">• 咨询公司<br/>• 创业公司<br/>• 跨境电商</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-8" style={{ color: '#F5CB76' }}>
            专业理念
          </h2>
          <blockquote className="text-xl italic leading-relaxed mb-8" style={{ color: '#F5CB76' }}>
            "法律的价值在于保护权益、平衡利益、维护公正。但法律人的价值，在于为法律注入人文关怀，让专业服务带有温度。我希望在每一个案件中，都能为当事人提供不仅是法律上的解决方案，更是情理上的理解与支持。"
          </blockquote>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>专业严谨</h4>
              <p className="text-sm opacity-90" style={{ color: '#F5CB76' }}>扎实的法学功底，严谨的工作态度</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>真诚沟通</h4>
              <p className="text-sm opacity-90" style={{ color: '#F5CB76' }}>倾听客户需求，提供贴心服务</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl mb-3">⭐</div>
              <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>持续成长</h4>
              <p className="text-sm opacity-90" style={{ color: '#F5CB76' }}>不断学习，与时俱进，追求卓越</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`${process.env.NODE_ENV === 'production' ? '/HuiRuJin' : ''}/`}
              className="bg-white/20 text-current px-8 py-3 rounded-lg font-medium transition-colors hover:bg-white/30"
              style={{ color: '#F5CB76' }}
            >
              返回首页
            </a>
            <a 
              href={`${process.env.NODE_ENV === 'production' ? '/HuiRuJin' : ''}/resources`}
              className="px-8 py-3 rounded-lg font-medium transition-colors hover:opacity-80"
              style={{ backgroundColor: '#F5CB76', color: '#93B8D4' }}
            >
              能帮助链接的资源
            </a>
            <a 
              href={`${process.env.NODE_ENV === 'production' ? '/HuiRuJin' : ''}/contact`}
              className="px-8 py-3 rounded-lg font-medium transition-colors hover:opacity-80"
              style={{ backgroundColor: '#F5CB76', color: '#93B8D4' }}
            >
              联系方式
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 