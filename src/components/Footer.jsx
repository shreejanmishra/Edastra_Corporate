import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight, ExternalLink, Globe, Code2, Share2 } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'Home', to: '/' },
      { label: 'Our Mission', to: '/our-mission' },
      { label: 'About Us', to: '/about-us' },
      { label: 'Contact', to: '/contact' },
    ],
    services: [
      { label: 'Education Hub' },
      { label: 'Edutainment Library' },
      { label: 'Scholarship Portal' },
      { label: 'VR Experiences' },
    ],
    social: [
      { icon: ExternalLink, label: 'LinkedIn', href: '#' },
      { icon: Globe, label: 'Twitter', href: '#' },
      { icon: Code2, label: 'GitHub', href: '#' },
      { icon: Share2, label: 'YouTube', href: '#' },
    ],
  }

  return (
    <footer className="relative bg-primary-dark text-white overflow-hidden">
      {/* Decorative Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-accent-gold" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="section-container relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/edastraBrandIcon.webp"
                alt="Edastra Logo"
                className="h-9 w-9 rounded-xl shadow-lg border border-white/20"
              />
              <span className="text-2xl font-bold font-jost">Edastra</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6 text-sm">
              The ultimate edutainment platform bridging education and entertainment.
              Empowering students from Pre-school to Class 10 with curriculum-aligned content.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-jost font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-white flex items-center gap-1.5 text-sm transition-colors duration-300 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-jost font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <span className="text-white/60 text-sm">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-jost font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@edastra.com"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  contact@edastra.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919152991509"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +91 9152991509
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  Mumbai, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Edastra. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/40 text-sm hover:text-white/70 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-white/40 text-sm hover:text-white/70 transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
