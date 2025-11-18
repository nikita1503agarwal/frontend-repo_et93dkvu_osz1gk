import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ServicesPreview, ProductsGrid, Testimonials, Newsletter } from './components/Sections'

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-[#EDEAE3]/70">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Lele’s Boutique. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/lelesboutique" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
            <a href="/contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-[#D7C8A0] to-[#C7B37A] text-[#0E0E10] px-4 py-2 text-sm font-semibold">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0E0E10] text-[#EDEAE3]">
      <Navbar />
      <Hero />
      <main>
        <ServicesPreview />
        <ProductsGrid />
        <Testimonials />
        <Newsletter />
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#EDEAE3] mb-6">From Instagram</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg bg-white/5">
                <img alt={`Instagram ${i}`} src={`https://source.unsplash.com/random/400x400?fashion,beauty&sig=${i}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
