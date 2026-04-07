'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import CTAButton from './ui/CTAButton'
import avoc2 from '../assets/avoc2.png'

const faqs = [
  { q: 'Do you offer an initial consultation?', a: 'Yes, I offer a complimentary initial consultation to understand your situation and determine the best course of action. There is no obligation — just honest, straightforward advice.' },
  { q: 'How are legal fees calculated?', a: 'Fees are based on the nature and complexity of your case. I explain all costs in full before any work begins — no hidden charges, no surprises.' },
  { q: 'Will my information remain confidential?', a: 'Absolutely. Everything you share is protected by attorney-client privilege. Your privacy is treated as a non-negotiable priority, from our first call through to the final resolution.' },
  { q: 'How long will my case take?', a: 'Every case is different and timelines vary. After a thorough review of your situation, I will give you an honest assessment and keep you informed at every stage.' },
  { q: 'Do you handle cases outside your city?', a: 'Yes. I am admitted to practice across multiple jurisdictions. Reach out to confirm coverage for your specific location and we will take it from there.' },
]

const ease = [0.23, 1, 0.32, 1]

export default function FAQs() {
  const [open, setOpen] = useState(1)

  return (
    <section
      id="faqs"
      style={{ backgroundColor: '#FFFFFF', padding: '80px 100px', display: 'flex', flexDirection: 'column', gap: '64px' }}
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
            Frequently Asked <br /> <i>questions</i>
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
            Find answers to the questions I hear most often — and feel free to raise anything else during your free consultation.
          </p>
          <CTAButton
            href="#contact"
            text="Get a free quote"
            bgColor="#B8963E"
            circleBg="#FFFFFF"
            textColor="#FFFFFF"
            arrowColor="#B8963E"
            height={44}
            width="178px"
          />
        </motion.div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '64px' }}>

        {/* Person Card */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          style={{
            width: '361px',
            borderRadius: '14px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            backgroundColor: '#FFFFFF',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '202px' }}>
            <img
              src={avoc2.src}
              alt="Lawyer"
              style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '14px', fontWeight: 600, color: '#18110A', lineHeight: 1.4, width: '198px' }}>
              Clear advice. Real answers.{'\n'}Zero pressure.
            </div>
          </div>
          <p style={{ color: '#6B5F50', fontSize: '13px', lineHeight: 1.4, fontFamily: 'Inter, sans-serif', margin: 0, width: '237px' }}>
            I answer your questions honestly and in plain language — so you always know exactly where you stand before making any decision.
          </p>
          <CTAButton
            href="#contact"
            text="Book a free call"
            bgColor="#B8963E"
            circleBg="#FFFFFF"
            textColor="#FFFFFF"
            arrowColor="#B8963E"
            height={44}
            width="156px"
          />
        </motion.div>

        {/* FAQs */}
        <div style={{ width: '838px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              onClick={() => setOpen(open === i ? -1 : i)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                border: '0.5px solid #6c6c6c',
                padding: '20px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: open === i ? '14px' : '0',
              }}
            >
              {/* Question row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#18110A', fontSize: '15px', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25, ease }}
                  style={{ width: '41px', height: '40px', borderRadius: '50%', border: '1px solid #6c6c6c', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                >
                  <ChevronDown size={16} color={open === i ? '#B8963E' : '#6B5F50'} />
                </motion.div>
              </div>

              {/* Answer — smooth open/close */}
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ color: '#6B5F50', fontSize: '13px', lineHeight: 1.65, fontFamily: 'Inter, sans-serif', margin: 0 }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
