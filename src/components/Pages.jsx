import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

export function AboutPage() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-serif text-[#EDEAE3] mb-6">Our Story</h1>
        <p className="text-[#EDEAE3]/80 leading-relaxed max-w-3xl">
          Born from a love of quiet luxury, Lele’s Boutique is a haven for beauty and refined fashion. We believe elegance is a feeling—expressed in every detail, considered with care, and crafted to last.
        </p>
        <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1600&q=60" alt="Lele’s Boutique" className="mt-10 rounded-2xl object-cover w-full max-h-[520px]" />
      </section>
    </main>
  )
}

export function ServicesPage() {
  const [items, setItems] = useState([])
  useEffect(() => { fetch(`${API}/services`).then(r => r.json()).then(setItems).catch(() => {}) }, [])
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif text-[#EDEAE3] mb-10">Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-[#EDEAE3] font-medium">{s.title}</h3>
                {s.price_from && <span className="text-sm text-[#D7C8A0]">from ${s.price_from}</span>}
              </div>
              <p className="mt-2 text-sm text-[#EDEAE3]/70">{s.description}</p>
              <a href="/contact" className="mt-4 inline-flex text-sm text-[#D7C8A0] underline underline-offset-4">Book Now</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export function ShopPage() {
  const [items, setItems] = useState([])
  useEffect(() => { fetch(`${API}/products`).then(r => r.json()).then(setItems).catch(() => {}) }, [])
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif text-[#EDEAE3] mb-10">Collection</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((p, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              {p.image && <img src={p.image} alt={p.title} className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#EDEAE3]">{p.title}</h3>
                  <span className="text-[#D7C8A0]">${p.price}</span>
                </div>
                {p.tag && <span className="inline-block mt-2 text-xs text-[#0E0E10] bg-[#D7C8A0] rounded-full px-2 py-0.5">{p.tag}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export function ContactPage() {
  const [state, setState] = useState({ name: '', email: '', phone: '', message: '' })
  const [ok, setOk] = useState(false)

  async function submit(e) {
    e.preventDefault()
    try {
      const res = await fetch(`${API}/lead`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...state }) })
      if (res.ok) setOk(true)
    } catch {}
  }

  return (
    <main className="pt-24">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif text-[#EDEAE3] mb-6">Contact & Booking</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form onSubmit={submit} className="space-y-4">
            {ok ? <p className="text-[#D7C8A0]">Thank you. We will be in touch shortly.</p> : (
              <>
                <input required placeholder="Full name" className="w-full rounded-full bg-white/5 border border-white/10 px-4 py-3 text-[#EDEAE3] placeholder:text-[#EDEAE3]/50" value={state.name} onChange={(e)=>setState({ ...state, name: e.target.value })} />
                <input required type="email" placeholder="Email" className="w-full rounded-full bg-white/5 border border-white/10 px-4 py-3 text-[#EDEAE3] placeholder:text-[#EDEAE3]/50" value={state.email} onChange={(e)=>setState({ ...state, email: e.target.value })} />
                <input placeholder="Phone" className="w-full rounded-full bg-white/5 border border-white/10 px-4 py-3 text-[#EDEAE3] placeholder:text-[#EDEAE3]/50" value={state.phone} onChange={(e)=>setState({ ...state, phone: e.target.value })} />
                <textarea placeholder="How can we help?" rows={5} className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-[#EDEAE3] placeholder:text-[#EDEAE3]/50" value={state.message} onChange={(e)=>setState({ ...state, message: e.target.value })} />
                <button className="rounded-full bg-gradient-to-r from-[#D7C8A0] to-[#C7B37A] text-[#0E0E10] px-6 py-3 font-semibold">Send</button>
              </>
            )}
          </form>
          <div className="space-y-4 text-[#EDEAE3]/80">
            <p><span className="text-[#D7C8A0]">Phone:</span> (555) 123-4567</p>
            <p><span className="text-[#D7C8A0]">Email:</span> hello@lelesboutique.com</p>
            <p>
              <span className="text-[#D7C8A0]">Visit:</span> 123 Atelier Lane, Suite 8, City
            </p>
            <iframe title="Map" className="w-full h-64 rounded-2xl border border-white/10" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.95373631535046!3d-37.81627974201117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzU4LjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2sau!4v1614034548281!5m2!1sen!2sau"></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}

export function BlogPage() {
  const [posts, setPosts] = useState([])
  useEffect(() => { fetch(`${API}/posts`).then(r => r.json()).then(setPosts).catch(() => {}) }, [])
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif text-[#EDEAE3] mb-10">Lookbook</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((p, i) => (
            <article key={i} className="overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              {p.image && <img src={p.image} alt={p.title} className="w-full aspect-[16/10] object-cover" />}
              <div className="p-6">
                <h3 className="text-[#EDEAE3] text-xl">{p.title}</h3>
                <p className="text-[#EDEAE3]/70 mt-2">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
