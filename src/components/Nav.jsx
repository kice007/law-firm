'use client'
import { useRef } from 'react'
import { motion, useAnimate } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const ease = [0.23, 1, 0.32, 1]

const navItems = [
  { label: 'About',        id: 'about-me'     },
  { label: 'Cases',        id: 'cases'        },
  { label: 'Process',      id: 'process'      },
  { label: 'Services',     id: 'services'     },
  { label: 'FAQs',         id: 'faqs'         },
  { label: 'Testimonials', id: 'testimonials' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const btnRef = useRef(null)
  const [circleRef, animateCircle] = useAnimate()
  const [textRef, animateText] = useAnimate()

  const handleMouseEnter = () => {
    if (!btnRef.current || !circleRef.current || !textRef.current) return
    const travel = btnRef.current.offsetWidth - 30 - 22
    animateText(textRef.current, { opacity: 0 }, { duration: 0.18, ease })
    animateCircle(circleRef.current, { x: travel, rotate: 360 }, { duration: 0.38, ease })
  }

  const handleMouseLeave = () => {
    if (!circleRef.current || !textRef.current) return
    animateCircle(circleRef.current, { x: 0, rotate: 0 }, { duration: 0.28, ease })
    animateText(textRef.current, { opacity: 1 }, { duration: 0.28, ease })
  }

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease }}
      className="absolute top-0 left-0 z-50 flex items-center justify-between w-full"
      style={{ height: '5.28vw', padding: '0 5.56vw' }}
    >
      {/* Logo — scrolls back to top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.53vw',
          fontWeight: 400,
          color: '#FFFFFF',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        Ledru-Rollin
      </motion.button>

      {/* Nav Links */}
      <div className="flex items-center" style={{ gap: '2.5vw' }}>
        {navItems.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease }}
            whileHover={{ color: '#b8963e' }}
            style={{
              color: '#FFFFFF',
              fontSize: '0.9vw',
              fontFamily: 'Inter, sans-serif',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'inline-block',
            }}
          >
            {item.label}
          </motion.button>
        ))}
      </div>

      {/* CTA — rolling arrow on hover */}
      <motion.button
        ref={btnRef}
        onClick={() => scrollTo('contact')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.45, ease }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '50px',
          height: '3.06vw',
          padding: '0 0.69vw',
          gap: '0.56vw',
          width: '12.36vw',
          cursor: 'pointer',
          overflow: 'hidden',
          border: 'none',
        }}
      >
        <motion.div
          ref={circleRef}
          className="flex items-center justify-center"
          style={{
            backgroundColor: '#B8963E',
            borderRadius: '50px',
            width: '2.08vw',
            height: '2.01vw',
            flexShrink: 0,
          }}
        >
          <ArrowUpRight style={{ width: '1.11vw', height: '1.11vw' }} color="#FFFFFF" />
        </motion.div>
        <motion.span
          ref={textRef}
          style={{ color: '#000000', fontSize: '0.9vw', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
        >
          Start Your Case
        </motion.span>
      </motion.button>
    </motion.nav>
  )
}
