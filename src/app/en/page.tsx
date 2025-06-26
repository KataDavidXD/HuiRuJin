import { Metadata } from 'next'

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
    canonical: '/en',
    languages: {
      'en': '/en',
      'zh-CN': '/',
    },
  },
  openGraph: {
    title: 'HuiRuJin - Maritime Lawyer & Professional Diver',
    description: 'Professional maritime law services combined with expert diving expertise.',
    url: 'https://katadavidxd.github.io/HuiRuJin/en',
    siteName: 'HuiRuJin',
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
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-600 text-white min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            HuiRuJin (惠如瑾)
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 font-light">
            Maritime Lawyer & Professional Diver
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Combining legal expertise with underwater exploration passion, providing comprehensive maritime law services and diving expertise. Navigating the depths of law with precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Legal Services
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Diving Experience
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Excellence Above and Below Water
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I am a dedicated maritime lawyer and skilled diver, combining two worlds that share common values: precision, safety, and respect for the environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Legal Background
              </h3>
              <p className="text-gray-600 mb-6">
                With over 8 years of experience in maritime law and environmental law, specializing in complex international shipping disputes, marine environmental protection, and corporate maritime transactions. Providing precise legal strategies and exceptional professional services.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">8+</div>
                  <div className="text-sm text-gray-500">Years Practice</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-500">Successful Cases</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Diving Journey
              </h3>
              <p className="text-gray-600 mb-6">
                My underwater adventure spans 12 years with over 500 dives across 15 countries. From technical deep dives to cave exploration, I approach legal practice with the same meticulous attention and safety protocols.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-500">Total Dives</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15</div>
                  <div className="text-sm text-gray-500">Countries Explored</div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Philosophy */}
          <div className="mt-16 text-center">
            <blockquote className="text-xl italic text-gray-700 max-w-4xl mx-auto">
              "Just as diving requires careful planning, precise execution, and respect for the environment, legal practice demands thorough preparation, meticulous attention to detail, and unwavering ethical standards."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Professional Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Legal Services */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl">
              <div className="text-yellow-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Legal Services</h3>
              <p className="text-gray-600 mb-6">
                Professional maritime, environmental, and corporate law services, providing comprehensive legal solutions for clients.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Maritime Dispute Resolution</li>
                <li>• Environmental Law Compliance</li>
                <li>• International Shipping Regulations</li>
                <li>• Corporate Maritime Transactions</li>
              </ul>
            </div>

            {/* Diving Services */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Diving Expertise</h3>
              <p className="text-gray-600 mb-6">
                From technical diving to safety training, providing professional diving instruction and marine conservation consulting.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Technical Diving Training</li>
                <li>• Cave Diving Instruction</li>
                <li>• Underwater Photography</li>
                <li>• Marine Conservation Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Begin Your Legal or Diving Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you need professional legal advice or diving guidance, I am committed to providing you with exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors">
              Learn More
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
                HuiRuJin (惠如瑾)
              </h3>
              <p className="text-gray-400 mb-6">
                Professional legal services and diving expertise
              </p>
              <p className="text-gray-500 text-sm">
                Combining legal precision with diving exploration spirit
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Me</a></li>
                <li><a href="#" className="hover:text-white">Legal Services</a></li>
                <li><a href="#" className="hover:text-white">Diving Experience</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Professional Consultation</li>
                <li>Diving Services</li>
                <li>Emergency Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 HuiRuJin (惠如瑾). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
} 