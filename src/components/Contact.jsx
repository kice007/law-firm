'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import CTAButton from './ui/CTAButton'

const legalServices = [
  'Corporate & Business Law',
  'Civil Litigation',
  'Criminal Defence',
  'Family And Divorce Law',
  'Property & Real Estate Law',
]

const ease = [0.23, 1, 0.32, 1]

const inputStyle = {
  flex: 1,
  height: '52px',
  borderRadius: '8px',
  border: '1px solid #E0DAD0',
  backgroundColor: '#FFFFFF',
  padding: '0 16px',
  fontSize: '14px',
  fontFamily: 'Inter, sans-serif',
  color: '#18110A',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', subject: '', message: '', confirmed: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
        height: '1060px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#B8963E', flexShrink: 0 }} />
            <span style={{ color: '#4f4f4f', fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>CASE PROCESS</span>
          </div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 500, color: '#18110A', lineHeight: 0.909, width: '520px' }}>
            Start your <br /> <i>case today</i>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-end' }}
        >
          <p style={{ color: '#4f4f4f', fontSize: '13px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif', textAlign: 'right', width: '360px', margin: 0 }}>
            I respond to every enquiry personally. Your case deserves a real lawyer, not a call centre.
          </p>
          <CTAButton
            href="#contact"
            text="Start Your Case"
            bgColor="#B8963E"
            circleBg="#FFFFFF"
            textColor="#FFFFFF"
            arrowColor="#B8963E"
            height={44}
            width="178px"
          />
        </motion.div>
      </div>

      {/* Spacer */}
      <div style={{ height: '58px', width: '100%' }} />

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.2, ease }}
        style={{
          width: '894px',
          padding: '40px',
          borderRadius: '10px',
          border: '1px solid #e0dad0',
          boxShadow: '0px 1px 30px rgba(0,0,0,0.1)',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '461px', justifyContent: 'space-between' }}>
          {/* Row 1 */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={inputStyle}
            />
          </div>
          {/* Row 2 */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              style={inputStyle}
            />
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', color: form.service ? '#18110A' : '#9A8B78' }}
            >
              <option value="" disabled>Legal Services</option>
              {legalServices.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            style={{ ...inputStyle, flex: 'unset', width: '100%' }}
          />
          {/* Message */}
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ width: '100%', height: '120px', borderRadius: '8px', border: '1px solid #E0DAD0', backgroundColor: '#FFFFFF', padding: '14px 16px', fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#18110A', outline: 'none', resize: 'none' }}
          />
          {/* Checkbox */}
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={form.confirmed}
              onChange={(e) => setForm({ ...form, confirmed: e.target.checked })}
              style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#B8963E' }}
            />
            <span style={{ color: '#6B5F50', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>
              I confirm the information provided is accurate.
            </span>
          </label>
          {/* Submit */}
          <CTAButton
            type="submit"
            text="Send a message"
            bgColor="#B8963E"
            circleBg="#FFFFFF"
            textColor="#FFFFFF"
            arrowColor="#B8963E"
            height={44}
            width="166px"
            onClick={handleSubmit}
          />
        </form>
      </motion.div>

      {/* Watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          textAlign: 'center',
          fontFamily: 'Playfair Display, serif',
          fontSize: '9.72vw',
          fontWeight: 600,
          color: '#2a1810',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          transform: 'translateY(20%)',
        }}
      >
        Get in touch
      </div>
    </section>
  )
}
