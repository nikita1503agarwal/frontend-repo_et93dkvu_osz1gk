import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/shop', label: 'Shop' },
  { to: '/blog', label: 'Lookbook' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/70 bg-[#0E0E10]/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl tracking-[0.18em] text-[#D7C8A0] font-semibold">
          LELE’S BOUTIQUE
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `text-sm uppercase tracking-wide transition-colors ${isActive ? 'text-[#D7C8A0]' : 'text-[#EDEAE3]/80 hover:text-white'}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-[#D7C8A0] to-[#C7B37A] text-[#0E0E10] px-4 py-2 text-sm font-semibold">
            Book Appointment
          </Link>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0E0E10] border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="text-[#EDEAE3]/90">
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center rounded-full bg-gradient-to-r from-[#D7C8A0] to-[#C7B37A] text-[#0E0E10] px-4 py-2 text-sm font-semibold w-max">
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
