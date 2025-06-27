import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '能帮助链接的资源 - 惠如瑾律师 Jasmine Hui',
  description: '惠如瑾律师的ENFP性格特质、社群建设能力以及海洋保护、宠物律师团队等公益实践活动。',
}

export default function ResourcesPage() {
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
              href="/en/resources" 
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
            能帮助链接的资源
          </h1>
          <p className="text-xl mb-8" style={{ color: '#F5CB76' }}>
            ENFP性格特质 · 社群建设 · 公益实践
          </p>
        </div>
      </section>

      {/* ENFP Personality Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F5CB76' }}>
              ENFP性格：90%快乐小狗属性 🐕
            </h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed" style={{ color: '#F5CB76' }}>
              我是个典型的ENFP，热爱与人连接，充满活力。我相信真诚的交流能创造无限可能。
              严谨的法律工作和热忱的社交连接并不矛盾，它们共同构成了我理解世界和实现自我价值的方式。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white/10 p-8 rounded-lg">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="font-semibold text-xl mb-4" style={{ color: '#F5CB76' }}>社群建设</h3>
              <div className="space-y-2 text-sm" style={{ color: '#F5CB76' }}>
                <p className="font-medium">已建立并维护的社群：</p>
                <p>• 西安/广州留学生群</p>
                <p>• 全球潜水员群</p>
                <p>• 北京互联网大厂群</p>
                <p>• 多个专业律师交流群</p>
              </div>
            </div>
            <div className="text-center bg-white/10 p-8 rounded-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-semibold text-xl mb-4" style={{ color: '#F5CB76' }}>律师网络</h3>
              <div className="space-y-2 text-sm" style={{ color: '#F5CB76' }}>
                <p className="font-medium">专业连接能力：</p>
                <p>• 活跃于全国数十个律师社群</p>
                <p>• 结识众多优秀律师朋友</p>
                <p>• 跨地域法律资源整合</p>
                <p>• 专业问题快速对接</p>
              </div>
            </div>
            <div className="text-center bg-white/10 p-8 rounded-lg">
              <div className="text-5xl mb-4">💫</div>
              <h3 className="font-semibold text-xl mb-4" style={{ color: '#F5CB76' }}>价值理念</h3>
              <div className="space-y-2 text-sm" style={{ color: '#F5CB76' }}>
                <p className="font-medium">连接创造价值：</p>
                <p>• 广结善缘，真诚靠谱</p>
                <p>• 链接资源，搭建桥梁</p>
                <p>• 互助共赢，共同成长</p>
                <p>• 让世界变得更有趣</p>
              </div>
            </div>
          </div>

          {/* What I Can Help Connect - Optimized Layout */}
          <div className="bg-black/20 p-12 rounded-xl">
            <h3 className="font-serif text-2xl font-bold text-center mb-12" style={{ color: '#F5CB76' }}>
              我能帮助链接的资源
            </h3>
            <div className="space-y-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-semibold text-xl mb-6 flex items-center" style={{ color: '#F5CB76' }}>
                  🏛️ 法律专业资源
                </h4>
                <ul className="space-y-3 text-base leading-relaxed" style={{ color: '#F5CB76' }}>
                  <li>• 各地优秀律师推荐与对接</li>
                  <li>• 不同专业领域法律专家咨询</li>
                  <li>• 法律实务经验分享与交流</li>
                  <li>• 跨境法律服务资源整合</li>
                  <li>• 法律职业发展指导与建议</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-semibold text-xl mb-6 flex items-center" style={{ color: '#F5CB76' }}>
                  🌍 生活社交资源
                </h4>
                <ul className="space-y-3 text-base leading-relaxed" style={{ color: '#F5CB76' }}>
                  <li>• 海外留学生活经验分享</li>
                  <li>• 潜水爱好者群体连接</li>
                  <li>• 互联网行业人脉推荐</li>
                  <li>• 公益志愿活动组织参与</li>
                  <li>• 兴趣爱好社群建立维护</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Service Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#F5CB76' }}>
            公益实践：用行动传递温暖
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ocean Conservation */}
            <div className="bg-white/10 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🌊</span>
                <h3 className="font-serif text-2xl font-bold" style={{ color: '#F5CB76' }}>海洋保护志愿者</h3>
              </div>
              <p className="mb-6 leading-relaxed" style={{ color: '#F5CB76' }}>
                作为潜水志愿者，积极参与多次潜水捡垃圾活动，用实际行动保护我们的海洋环境。
                每一次下潜，都是对海洋生态的守护，对地球家园的热爱。
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold" style={{ color: '#F5CB76' }}>参与活动：</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#F5CB76' }}>
                  <li>🗑️ 海洋清洁行动志愿者</li>
                  <li>📢 潜水环保知识宣传</li>
                  <li>🐠 海洋生态保护倡导</li>
                  <li>📸 水下环境记录与分享</li>
                  <li>🌱 环保意识培养推广</li>
                </ul>
              </div>
            </div>

            {/* Pet Legal Services */}
            <div className="bg-white/10 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🐾</span>
                <h3 className="font-serif text-2xl font-bold" style={{ color: '#F5CB76' }}>宠物律师团队</h3>
              </div>
              <p className="mb-6 leading-relaxed" style={{ color: '#F5CB76' }}>
                作为"宠物律师"团队的一员，不仅为宠物提供法律支持，更深知这背后守护的是人与动物之间那份珍贵的情感连接。
                法律不只是条文，更是保护爱与责任的工具。
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold" style={{ color: '#F5CB76' }}>服务范围：</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#F5CB76' }}>
                  <li>🏠 流浪动物救助法律支持</li>
                  <li>⚖️ 宠物权益保护法律咨询</li>
                  <li>❤️ 人动物情感连接法律守护</li>
                  <li>📋 宠物相关纠纷调解</li>
                  <li>🎯 动物保护法律知识普及</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Impact & Values */}
          <div className="mt-16 text-center bg-black/20 p-12 rounded-xl">
            <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: '#F5CB76' }}>
              公益理念与影响
            </h3>
            <blockquote className="text-xl italic leading-relaxed mb-8" style={{ color: '#F5CB76' }}>
              "法律人的责任，不仅在于专业，更在于对生命和社会的关怀。我希望在专业与公益、规则与人情、个体与社群的交汇点上不断前行，用法律守护值得守护的，用行动传递力所能及的温暖。"
            </blockquote>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-3">🌍</div>
                <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>环境守护</h4>
                <p className="text-sm opacity-90" style={{ color: '#F5CB76' }}>保护海洋，就是保护未来</p>
              </div>
              <div>
                <div className="text-3xl mb-3">💝</div>
                <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>生命关怀</h4>
                <p className="text-sm opacity-90" style={{ color: '#F5CB76' }}>守护人与动物的温暖连接</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🤲</div>
                <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>社会责任</h4>
                <p className="text-sm opacity-90" style={{ color: '#F5CB76' }}>用专业技能回馈社会</p>
              </div>
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
              href={`${process.env.NODE_ENV === 'production' ? '/HuiRuJin' : ''}/about`}
              className="px-8 py-3 rounded-lg font-medium transition-colors hover:opacity-80"
              style={{ backgroundColor: '#F5CB76', color: '#93B8D4' }}
            >
              个人介绍
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