import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jasmine Hui - Civil & Commercial Lawyer & Community Connector',
  description: 'I am Jasmine Hui (惠如瑾), specializing in civil and commercial dispute resolution, matrimonial litigation, and sports entertainment law. ENFP personality passionate about community building and public service.',
  keywords: ['Jasmine Hui', '惠如瑾', 'lawyer', 'civil litigation', 'matrimonial law', 'sports entertainment law', 'community building', 'public service'],
  authors: [{ name: 'Jasmine Hui' }],
  creator: 'Jasmine Hui',
  publisher: 'Jasmine Hui',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://katadavidxd.github.io/HuiRuJin'),
  alternates: {
    canonical: '/en',
    languages: {
      'en': '/en',
      'zh-CN': '/',
    },
  },
  openGraph: {
    title: 'Jasmine Hui - Civil & Commercial Lawyer & Community Connector',
    description: 'Specializing in civil and commercial dispute resolution, matrimonial litigation, and sports entertainment law. ENFP personality passionate about community building.',
    url: 'https://katadavidxd.github.io/HuiRuJin/en',
    siteName: 'Jasmine Hui',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EnglishHomePage() {
  return (
    <main className="min-h-screen">
      {/* Language Toggle Bar */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-end">
          <div className="flex gap-2">
            <a 
              href="/" 
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm font-medium transition-colors"
            >
              中文
            </a>
            <span className="px-3 py-1 rounded bg-blue-600 text-white text-sm font-medium">
              English
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-blue-600 text-white min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <img 
              src={`${process.env.NODE_ENV === 'production' ? '/HuiRuJin' : ''}/images/profile/jasmine-hui.png`}
              alt="Jasmine Hui Lawyer" 
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-xl object-cover"
            />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Jasmine Hui
          </h1>
          <h2 className="text-xl md:text-2xl mb-4 font-light">
            惠如瑾律师
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed italic">
            "Earth Needs Funny Jigsaw."
          </p>
          <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Civil & Commercial Dispute Resolution | Matrimonial Litigation | Sports & Entertainment Law<br/>
            ENFP Community Connector | Ocean Conservation Volunteer | Pet Legal Team Member
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Legal Consultation
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Community Connection
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Combining Legal Expertise with Human Warmth
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              I firmly believe that law should not be a cold and rigid tool. In helping clients resolve disputes and balance the interests of all parties, I am committed to providing clear, efficient, and practical solutions, hoping to become a trusted partner and bring a ray of light when they need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Education & Professional Experience
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-600 mb-2">Educational Background</h4>
                  <p className="text-gray-700 mb-2">📚 Master's: University of Glasgow, UK - International Commercial Law</p>
                  <p className="text-gray-700">🎓 Bachelor's: Northwest University of Political Science and Law</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-600 mb-2">Internship Experience</h4>
                  <p className="text-gray-700 text-sm">
                    Diverse internship experience in courts, law firms, investment banks, consulting, private equity, startups, and cross-border e-commerce, gaining deep understanding of business fundamentals.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Practice Areas
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">⚖️ Civil & Commercial Dispute Resolution</h4>
                  <p className="text-blue-700 text-sm">Professional handling of various commercial disputes with efficient solutions</p>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">👨‍👩‍👧‍👦 Matrimonial & Family Litigation</h4>
                  <p className="text-pink-700 text-sm">Protecting families with law, balancing interests and emotions</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🏃‍♀️ Sports & Entertainment Law</h4>
                  <p className="text-purple-700 text-sm">Professional legal services for sports and entertainment industry</p>
                </div>
              </div>
            </div>
          </div>

          {/* ENFP Personality Section */}
          <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                ENFP Personality: 90% Happy Puppy Energy 🐕
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                I'm a typical ENFP who loves connecting with people and is full of energy. I believe that genuine communication can create unlimited possibilities.
                Rigorous legal work and passionate social connections are not contradictory; they together constitute my way of understanding the world and realizing self-worth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h4 className="font-semibold text-gray-800 mb-2">Community Building</h4>
                <p className="text-sm text-gray-600">Xi'an/Guangzhou Student Groups<br/>Global Divers Community<br/>Beijing Tech Community</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-semibold text-gray-800 mb-2">Legal Network</h4>
                <p className="text-sm text-gray-600">Active in dozens of lawyer communities<br/>Connected with excellent lawyers nationwide</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💫</div>
                <h4 className="font-semibold text-gray-800 mb-2">Core Values</h4>
                <p className="text-sm text-gray-600">Building connections, being genuine<br/>Linking resources, building bridges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Service Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Public Service: Spreading Warmth Through Action
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ocean Conservation */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-xl">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">🌊 Ocean Conservation Volunteer</h3>
              <p className="text-gray-700 mb-4">
                As a diving volunteer, actively participating in multiple underwater cleanup activities, taking real action to protect our marine environment.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Marine cleanup action volunteer</li>
                <li>• Diving environmental advocacy</li>
                <li>• Ocean ecosystem protection promotion</li>
              </ul>
            </div>

            {/* Pet Legal Services */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-8 rounded-xl">
              <div className="text-pink-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">🐾 Pet Legal Team</h3>
              <p className="text-gray-700 mb-4">
                As a member of the "Pet Lawyer" team, not only providing legal support for pets, but also deeply understanding that this protects the precious emotional connection between humans and animals.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Legal support for stray animal rescue</li>
                <li>• Pet rights protection</li>
                <li>• Human-animal emotional bond protection</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <blockquote className="text-xl italic text-gray-700 max-w-4xl mx-auto">
              "The responsibility of legal professionals lies not only in expertise, but also in care for life and society. I hope to continue moving forward at the intersection of profession and public service, rules and humanity, individual and community, using law to protect what deserves protection, and spreading warmth through action."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Let's Connect and Create More Possibilities
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you need professional legal advice, want to join our community, or participate in public service activities, please feel free to contact me.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">💬 WeChat</h4>
              <p className="text-gray-300 text-sm">惠子律师Jasmine</p>
              <p className="text-gray-400 text-xs">ID: _Lyjasmine99</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">📱 Xiaohongshu</h4>
              <p className="text-gray-300 text-sm">Legal insights & lifestyle</p>
              <p className="text-gray-400 text-xs">ID: 6250249873</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">💼 LinkedIn</h4>
              <p className="text-gray-300 text-sm">Professional networking</p>
              <p className="text-gray-400 text-xs">Jasmine Hui</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Schedule Legal Consultation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors">
              Join Community
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
                Jasmine Hui (惠如瑾)
              </h3>
              <p className="text-gray-400 mb-4">
                "Earth Needs Funny Jigsaw."
              </p>
              <p className="text-gray-500 text-sm">
                Law is the professional foundation for distinguishing right from wrong; while compassion and connection are the soul that gives this profession warmth.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Civil & Commercial Disputes</li>
                <li>Matrimonial & Family Law</li>
                <li>Sports & Entertainment Law</li>
                <li>Legal Consultation Services</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community & Service</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Ocean Conservation Volunteer</li>
                <li>Pet Legal Team Member</li>
                <li>Community Building</li>
                <li>Legal Public Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Jasmine Hui (惠如瑾). Using law to protect what deserves protection, spreading warmth through action.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
} 