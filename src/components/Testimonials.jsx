'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import featuredImg from '../assets/cb27a2ad2816f863d178c51065ee731c.jpg'

const ease = [0.23, 1, 0.32, 1]

const testimonials = [
  {
    name: 'Henry Morrison',
    role: 'Business Owner, Morrison & Sons Ltd.',
    text: 'Alexander handled my criminal case with exceptional skill and composure. The charges were dropped — I can finally move forward with my life.',
    icon: 'briefcase',
  },
  {
    name: 'Diana Laurent',
    role: 'Real Estate Investor',
    text: 'I was facing a complex property dispute with no clear resolution in sight. Alexander cut through the noise and secured exactly the outcome I needed.',
    icon: 'users',
  },
  {
    name: 'Martha Reynolds',
    role: 'Primary School Teacher',
    text: "Going through a divorce is incredibly difficult. Alexander made the legal side manageable and always kept my children's welfare at the centre.",
    icon: 'home',
  },
  {
    name: 'James Whitfield',
    role: 'CEO, Whitfield Capital',
    text: 'Our corporate merger hit a legal wall that threatened the entire deal. Alexander navigated every obstacle and closed the transaction on schedule.',
    icon: 'briefcase',
  },
  {
    name: 'Sophia Okafor',
    role: 'Entrepreneur',
    text: "When my business partner filed suit out of nowhere, I felt completely blindsided. Alexander took control, and we settled in my favour within weeks.",
    icon: 'home',
  },
  {
    name: 'Marcus Liu',
    role: 'Senior Engineer, TechVentures',
    text: "A false workplace accusation nearly ended my career. Alexander's methodical approach cleared my name and restored my reputation completely.",
    icon: 'users',
  },
]

function IconBriefcase({ color = '#FFFFFF', size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-4 0v2" /><path d="M8 7V5a2 2 0 0 0-4 0v2" />
    </svg>
  )
}
function IconUsers({ color = '#FFFFFF', size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function IconHome({ color = '#FFFFFF', size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  )
}

const ICONS = { briefcase: IconBriefcase, users: IconUsers, home: IconHome }

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 320 : -320, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -320 : 320, opacity: 0 }),
}

export default function Testimonials() {
  const [slots, setSlots] = useState([0, 1, 2])
  const [direction, setDirection] = useState(1)
  const n = testimonials.length

  function goRight() {
    setDirection(1)
    setSlots(([l, c, r]) => [c, r, (r + 1) % n])
  }

  function goLeft() {
    setDirection(-1)
    setSlots(([l, c, r]) => [(l - 1 + n) % n, l, c])
  }

  return (
    <section
      id="testimonials"
      style={{ backgroundColor: '#FFFFFF', padding: '80px 100px', display: 'flex', flexDirection: 'column', gap: '48px' }}
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
            <span style={{ color: '#4f4f4f', fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>CASE RESULTS</span>
          </div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 500, color: '#18110A', lineHeight: 0.909, width: '520px' }}>
            See what my <br /> <i>clients say</i>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-end' }}
        >
          <p style={{ color: '#4f4f4f', fontSize: '13px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif', textAlign: 'right', width: '360px', margin: 0 }}>
            Real words from clients I have had the privilege of representing.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <motion.button
              onClick={goLeft}
              whileHover={{ borderColor: '#B8963E' }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.18, ease }}
              style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #4f4f4f', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <ChevronLeft size={16} color="#18110A" />
            </motion.button>
            <motion.button
              onClick={goRight}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.18, ease }}
              style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#B8963E', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <ChevronRight size={16} color="#FFFFFF" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Cards */}
      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '24px', height: '500px' }}>
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            {slots.map((testimonialIdx, slotIdx) => {
              const isCenter = slotIdx === 1
              const data = testimonials[testimonialIdx]
              const Icon = ICONS[data.icon]

              if (isCenter) {
                return (
                  <motion.div
                    key={testimonialIdx}
                    layout
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease, layout: { duration: 0.4, ease } }}
                    style={{
                      width: '338px', height: '470px', borderRadius: '14px',
                      overflow: 'hidden', position: 'relative', flexShrink: 0,
                      display: 'flex', flexDirection: 'column', padding: '28px 32px',
                      cursor: 'default',
                    }}
                  >
                    <img src={featuredImg.src} alt="Featured client" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(184,150,62,0.2) 0%, rgba(0,0,0,0.2) 100%)' }} />
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ width: '49px', height: '49px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconUsers color="#B8963E" size={27} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                        <span style={{ color: '#B8963E', fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>★★★★★</span>
                        <span style={{ color: '#FFFFFF', fontSize: '11px', fontFamily: 'Inter, sans-serif' }}>4.9 · Rating</span>
                      </div>
                    </div>
                    <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                      <p style={{ color: '#FFFFFF', fontSize: '18px', fontStyle: 'italic', lineHeight: 1.65, fontFamily: 'Inter, sans-serif', margin: 0 }}>
                        {data.text}
                      </p>
                    </div>
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ color: '#FFFFFF', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{data.name}</div>
                      <div style={{ color: '#FFFFFF', fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>{data.role}</div>
                    </div>
                  </motion.div>
                )
              }

              return (
                <motion.div
                  key={testimonialIdx}
                  layout
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  whileHover={{ y: -8, boxShadow: '0 12px 32px rgba(0,0,0,0.1)', transition: { duration: 0.25, ease } }}
                  transition={{ duration: 0.4, ease, layout: { duration: 0.4, ease } }}
                  style={{
                    width: '298px', height: '340px', borderRadius: '14px',
                    border: '2px solid #E0DAD0', backgroundColor: '#FFFFFF',
                    flexShrink: 0, display: 'flex', flexDirection: 'column', padding: '24px 28px',
                    cursor: 'default',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ width: '30px', height: '29px', borderRadius: '50px', backgroundColor: '#B8963E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                      <span style={{ color: '#B8963E', fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>★★★★★</span>
                      <span style={{ color: '#3d3d3d', fontSize: '11px', fontFamily: 'Inter, sans-serif' }}>4.9 · Rating</span>
                    </div>
                  </div>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <p style={{ color: '#9a8b78', fontSize: '16px', fontStyle: 'italic', lineHeight: 1.65, fontFamily: 'Inter, sans-serif', margin: 0 }}>
                      {data.text}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ color: '#303030', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{data.name}</div>
                    <div style={{ color: '#303030', fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>{data.role}</div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
