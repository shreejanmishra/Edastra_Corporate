import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/our-mission', label: 'Our Mission' },
    { to: '/about-us', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-primary/10 border-b border-primary/10'
          : 'bg-white border-b border-primary/20'
      }`}
    >
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-primary hover:text-primary-light transition-all group"
          >
            <img
              src="/edastraBrandIcon.webp"
              alt="Edastra Logo"
              className="h-9 w-9 rounded-xl shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-300"
            />
            <span className="font-jost tracking-tight group-hover:tracking-normal transition-all duration-300">
              Edastra
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.to
                      ? 'text-white bg-primary shadow-md shadow-primary/30'
                      : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-primary/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-6 pt-2 bg-white border-t border-primary/10">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-5 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    location.pathname === link.to
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 px-5">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default React.memo(Navbar)
