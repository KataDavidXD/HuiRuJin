import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '联系方式 - 惠如瑾律师 Jasmine Hui',
  description: '联系惠如瑾律师，获取专业法律咨询服务。微信、LinkedIn等多种联系方式，随时为您提供帮助。',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#02AFB7', color: '#F5CB76' }}>
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
              href="/en/contact" 
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
            联系方式
          </h1>
          <p className="text-xl mb-8" style={{ color: '#F5CB76' }}>
            让我们连接，创造更多可能
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#F5CB76' }}>
            无论您需要专业的法律建议、想要加入我们的社群，还是共同参与公益活动，都欢迎与我联系。
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* WeChat Contact */}
            <div className="bg-white/10 p-12 rounded-xl text-center">
              <div className="text-6xl mb-6">💬</div>
              <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: '#F5CB76' }}>
                微信咨询
              </h3>
              <div className="space-y-4 mb-8">
                <p className="text-lg font-medium" style={{ color: '#F5CB76' }}>
                  惠子律师Jasmine
                </p>
                <p className="text-sm opacity-80" style={{ color: '#F5CB76' }}>
                  微信号：_Lyjasmine99
                </p>
              </div>
              
              <div className="bg-black/20 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3" style={{ color: '#F5CB76' }}>微信服务内容：</h4>
                <ul className="text-sm space-y-2 text-left" style={{ color: '#F5CB76' }}>
                  <li>🔸 法律咨询与案件预约</li>
                  <li>🔸 社群加入与资源连接</li>
                  <li>🔸 公益活动参与邀请</li>
                  <li>🔸 专业问题快速解答</li>
                  <li>🔸 律师资源推荐对接</li>
                </ul>
              </div>
              
              <p className="text-xs opacity-70" style={{ color: '#F5CB76' }}>
                微信是我最常用的沟通工具，回复迅速，欢迎随时联系
              </p>
            </div>

            {/* LinkedIn Contact */}
            <div className="bg-white/10 p-12 rounded-xl text-center">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: '#F5CB76' }}>
                LinkedIn 专业网络
              </h3>
              <div className="space-y-4 mb-8">
                <p className="text-lg font-medium" style={{ color: '#F5CB76' }}>
                  Jasmine Hui
                </p>
                <p className="text-sm opacity-80" style={{ color: '#F5CB76' }}>
                  Lawyer | International Commercial Law
                </p>
              </div>
              
              <div className="bg-black/20 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3" style={{ color: '#F5CB76' }}>LinkedIn 连接价值：</h4>
                <ul className="text-sm space-y-2 text-left" style={{ color: '#F5CB76' }}>
                  <li>🔸 专业网络建立与拓展</li>
                  <li>🔸 国际法律资源共享</li>
                  <li>🔸 跨境业务合作机会</li>
                  <li>🔸 法律行业动态分享</li>
                  <li>🔸 职业发展指导交流</li>
                </ul>
              </div>
              
              <p className="text-xs opacity-70" style={{ color: '#F5CB76' }}>
                LinkedIn 适合正式商务沟通与专业网络建设
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Information */}
      <section className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: '#F5CB76' }}>
              专业服务信息
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#F5CB76' }}>执业机构</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#F5CB76' }}>
                北京乾成律师事务所（深圳）<br/>
                专职律师<br/>
                执业证号：[执业证号]
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#F5CB76' }}>专业领域</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#F5CB76' }}>
                民商事争议解决<br/>
                婚姻家事诉讼<br/>
                体育娱乐法律事务
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🕒</div>
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#F5CB76' }}>服务时间</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#F5CB76' }}>
                工作日：9:00-18:00<br/>
                紧急情况：24小时响应<br/>
                预约制咨询服务
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Principles */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-8" style={{ color: '#F5CB76' }}>
            沟通理念
          </h2>
          <blockquote className="text-xl italic leading-relaxed mb-12" style={{ color: '#F5CB76' }}>
            "真诚沟通是一切合作的基础。我相信每一次对话都是相互理解、共同成长的机会。无论是法律咨询还是社群交流，我都会以最真诚的态度对待每一位朋友。"
          </blockquote>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl mb-3">👂</div>
              <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>用心倾听</h4>
              <p className="text-sm opacity-90" style={{ color: '#F5CB76' }}>
                认真听取每一个需求，理解背后的真实困扰
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>专业建议</h4>
              <p className="text-sm opacity-90" style={{ color: '#F5CB76' }}>
                基于专业知识，提供切实可行的解决方案
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-semibold mb-2" style={{ color: '#F5CB76' }}>长期伙伴</h4>
              <p className="text-sm opacity-90" style={{ color: '#F5CB76' }}>
                不只是一次咨询，而是长期的信任与支持
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: '#F5CB76' }}>
            准备好开始对话了吗？
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: '#F5CB76' }}>
            每一次连接都可能带来新的可能性。<br/>
            无论是寻求专业帮助，还是想要加入我们的社群，<br/>
            都欢迎主动联系。让我们一起创造更有趣的拼图！
          </p>
          
          <div className="inline-block bg-white/10 p-8 rounded-xl">
            <p className="text-2xl font-serif font-bold mb-2" style={{ color: '#F5CB76' }}>
              "Earth Needs Funny Jigsaw"
            </p>
            <p className="text-lg" style={{ color: '#F5CB76' }}>
              世界需要有趣的拼图
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="bg-white/20 text-current px-8 py-3 rounded-lg font-medium transition-colors hover:bg-white/30"
              style={{ color: '#F5CB76' }}
            >
              返回首页
            </a>
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
          </div>
        </div>
      </section>
    </main>
  )
} 