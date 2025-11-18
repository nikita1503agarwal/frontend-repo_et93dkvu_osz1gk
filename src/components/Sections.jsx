import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

function Section({ title, children, id }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-2xl sm:text-3xl font-serif text-[#EDEAE3] mb-8">{title}</h2>
      {children}
    </section>
  )
}

export function ServicesPreview() {
  const [items, setItems] = useState([])
  useEffect(() => { fetch(`${API}/services`).then(r => r.json()).then(setItems).catch(() => {}) }, [])
  return (
    <Section title="Featured Services" id="services">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: i * .05 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-[#EDEAE3] font-medium">{s.title}</h3>
              {s.price_from && <span className="text-sm text-[#D7C8A0]">from ${s.price_from}</span>}
            </div>
            <p className="mt-2 text-sm text-[#EDEAE3]/70">{s.description}</p>
            <a href="/contact" className="mt-4 inline-flex text-sm text-[#D7C8A0] underline underline-offset-4">Book Now</a>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function ProductsGrid() {
  const [items, setItems] = useState([])
  useEffect(() => { fetch(`${API}/products`).then(r => r.json()).then(setItems).catch(() => {}) }, [])
  return (
    <Section title="Signature Collection" id="shop">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {items.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: i * .05 }} className="group overflow-hidden rounded-2xl bg-white/5 border border-white/10">
            {p.image && <img src={p.image} alt={p.title} className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-[#EDEAE3]">{p.title}</h3>
                <span className="text-[#D7C8A0]">${p.price}</span>
              </div>
              {p.tag && <span className="inline-block mt-2 text-xs text-[#0E0E10] bg-[#D7C8A0] rounded-full px-2 py-0.5">{p.tag}</span>}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function Testimonials() {
  const [items, setItems] = useState([])
  useEffect(() => { fetch(`${API}/testimonials`).then(r => r.json()).then(setItems).catch(() => {}) }, [])
  return (
    <Section title="Client Words">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((t, i) => (
          <motion.blockquote key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: i * .05 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-[#EDEAE3]">“{t.quote}”</p>
            <footer className="mt-3 text-sm text-[#EDEAE3]/70">— {t.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  )
}

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  async function submit(e) {
    e.preventDefault()
    try {
      const res = await fetch(`${API}/lead`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'Website Subscriber', email, message: 'Newsletter opt-in', source: 'newsletter' }) })
      if (res.ok) setDone(true)
    } catch {}
  }

  return (
    <Section title="Stay in the know">
      <form onSubmit={submit} className="max-w-lg">
        {done ? (
          <p className="text-[#D7C8A0]">Thank you for subscribing.</p>
        ) : (
          <div className="flex gap-3">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Your email" className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-3 text-[#EDEAE3] placeholder:text-[#EDEAE3]/50" />
            <button className="rounded-full bg-gradient-to-r from-[#D7C8A0] to-[#C7B37A] text-[#0E0E10] px-6 font-semibold">Join</button>
          </div>
        )}
      </form>
    </Section>
  )
}
