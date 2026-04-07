'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import processImg from '../assets/099c2c49-6b25-4efb-a5a3-874de8530ca1.17e6fa253baf1fc8187511c95ab138b9-Photoroom.png'

const ease = [0.23, 1, 0.32, 1]

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategic analysis',
    desc: 'I start with a thorough review of your situation — examining the facts, identifying risks, and mapping out the strongest legal approach available to you.',
    active: false,
    padding: '0 32px 32px 32px',
  },
  {
    num: '02',
    title: 'Execution & Diligent sdvocacy',
    desc: 'I take full ownership of your case — managing every filing, negotiation, and courtroom appearance so you can focus on your life while I handle the fight.',
    active: true,
    padding: '24px',
  },
  {
    num: '03',
    title: 'Resolution & Finality',
    desc: 'Whether through a negotiated settlement or a court ruling, I secure a clear outcome and walk you through every obligation and next step that follows.',
    active: false,
    padding: '32px 32px 0 32px',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      style={{ backgroundColor: '#FEFEFE', padding: '80px 100px', display: 'flex', flexDirection: 'column', gap: '80px' }}
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
            Three <br /> <i>Key{'\n'}process</i>
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
            From the first consultation to final resolution, every step is handled with care, precision, and complete transparency.
          </p>
          <motion.div
            whileHover={{ borderColor: '#B8963E', scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.2, ease }}
            style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #B8963E', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <ChevronDown size={18} color="#B8963E" />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ display: 'flex', gap: '80px', height: '525px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
        {/* Image */}
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
          src={processImg.src}
          alt="Legal process"
          style={{ width: '416px', height: '523px', objectFit: 'cover', flexShrink: 0 }}
        />

        {/* Steps */}
        <div style={{ width: '660px', display: 'flex', flexDirection: 'column' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: step.padding,
                ...(step.active ? {
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1px solid #E0DAD0',
                } : {}),
              }}
            >
              <span style={{ color: '#B8963E', fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{step.num}</span>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#18110A', lineHeight: 1.2, width: '580px' }}>
                {step.title}
              </div>
              <p style={{ color: '#6B5F50', fontSize: '14px', lineHeight: 1.65, fontFamily: 'Inter, sans-serif', margin: 0, width: '580px' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
