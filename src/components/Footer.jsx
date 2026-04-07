'use client'
import { motion } from 'framer-motion'

const ease = [0.23, 1, 0.32, 1]

const quickLinks = [
  { label: 'About', id: 'about-me' },
  { label: 'Cases', id: 'cases' },
  { label: 'Process', id: 'process' },
  { label: 'Services', id: 'services' },
  { label: 'FAQs', id: 'faqs' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', id: null },
  { label: 'Terms & Conditions', id: null },
  { label: 'Services', id: 'services' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
]

function scrollTo(id) {
  if (!id) return
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#18110A', minHeight: '420px' }}
    >
      {/* BG Gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #2A1810 0%, #0D0804 100%)' }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col"
        style={{ padding: '48px 100px', height: '420px', gap: '0' }}
      >
        {/* Top Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease }}
          className="flex justify-between flex-1"
          style={{ gap: '40px' }}
        >
          {/* Brand */}
          <div className="flex flex-col" style={{ width: '280px', gap: '16px' }}>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ color: '#B8963E' }}
              transition={{ duration: 0.2, ease }}
              className="font-medium text-white"
              style={{
                fontFamily: 'Playfair Display, serif', fontSize: '24px',
                background: 'none', border: 'none', cursor: 'pointer',
                padding: 0, textAlign: 'left',
              }}
            >
              Ledru-Rollin
            </motion.button>
            <span style={{ color: '#9A8B78', fontSize: '13px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>
              Your Trusted Legal Counsel
            </span>
            <p style={{ color: '#6A5E50', fontSize: '13px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif', margin: 0 }}>
              Dedicated legal representation for individuals and businesses. Here when the stakes are high and the outcome matters.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col" style={{ gap: '16px' }}>
            <span className="font-semibold text-white" style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>
              Quick Links
            </span>
            {quickLinks.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                whileHover={{ color: '#B8963E', x: 3 }}
                transition={{ duration: 0.15, ease }}
                style={{
                  color: '#9A8B78', fontSize: '13px', fontFamily: 'Inter, sans-serif',
                  display: 'inline-block', background: 'none', border: 'none',
                  cursor: 'pointer', padding: 0, textAlign: 'left',
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex flex-col" style={{ gap: '16px' }}>
            <span className="font-semibold text-white" style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>
              Navigation
            </span>
            {legalLinks.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                whileHover={{ color: '#B8963E', x: 3 }}
                transition={{ duration: 0.15, ease }}
                style={{
                  color: '#9A8B78', fontSize: '13px', fontFamily: 'Inter, sans-serif',
                  display: 'inline-block', background: 'none', border: 'none',
                  cursor: item.id ? 'pointer' : 'default', padding: 0, textAlign: 'left',
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Connect */}
          <div className="flex flex-col" style={{ gap: '16px' }}>
            <span className="font-semibold text-white" style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>
              Connect me
            </span>
            <span style={{ color: '#9A8B78', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>contact@ledru-law.com</span>
            <span style={{ color: '#9A8B78', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>+1 (212) 555 0198</span>
            <span style={{ color: '#9A8B78', fontSize: '13px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>
              1 Legal Plaza, Suite 1800<br />New York, NY 10004
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#2E2010', margin: '0' }} />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="flex items-center justify-between"
          style={{ paddingTop: '24px' }}
        >
          <span style={{ color: '#6A5E50', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
            © Ledru&apos;s Law © 2026
          </span>
          <span style={{ color: '#6A5E50', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
            All Rights Reserved
          </span>
        </motion.div>
      </div>
    </footer>
  )
}
