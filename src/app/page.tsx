import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HuiRuJin - Maritime Lawyer & Professional Diver',
  description: 'Professional maritime law services combined with expert diving expertise. Specializing in international shipping disputes and marine conservation.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-600 text-white min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            惠如瑾 (HuiRuJin)
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 font-light">
            Lawyer & Professional Diver
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Combining legal expertise with underwater exploration passion, providing comprehensive maritime law services and diving expertise.
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
                With over 8 years of experience in maritime law and environmental law, specializing in complex international shipping disputes, marine environmental protection, and corporate maritime transactions.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Diving Journey
              </h3>
              <p className="text-gray-600 mb-6">
                My underwater adventure spans 12 years with over 500 dives across 15 countries. From technical deep dives to cave exploration, I approach legal practice with the same meticulous attention and safety protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Toggle */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-4">
            <a 
              href="/en" 
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              English
            </a>
            <a 
              href="/zh" 
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              中文
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">
            惠如瑾 (HuiRuJin)
          </h3>
          <p className="text-gray-400 mb-6">
            Professional legal services and diving expertise
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 HuiRuJin. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}