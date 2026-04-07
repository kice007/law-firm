'use client'
import { motion } from 'framer-motion'
import CTAButton from './ui/CTAButton'

const ease = [0.23, 1, 0.32, 1]

const shakeVariants = {
  shake: {
    rotate: [0, -10, 10, -10, 10, -6, 6, 0],
    scale: [1, 1.08, 1.08, 1.08, 1.08, 1.04, 1.04, 1],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  rest: { rotate: 0, scale: 1 },
}

export default function AboutMe() {
  return (
    <section
      id="about-me"
      style={{ backgroundColor: '#FFFFFF', padding: '60px 100px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}
    >
      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center"
        style={{ gap: '5px' }}
      >
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#B8963E' }} />
        <span className="font-semibold" style={{ color: '#4f4f4f', fontSize: '15px', fontFamily: 'Inter, sans-serif' }}>
          ABOUT ME
        </span>
      </motion.div>

      {/* Large Statement */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '45px',
          fontWeight: 'normal',
          color: '#000000',
          lineHeight: 1.3,
          textAlign: 'center',
          maxWidth: '1174px',
        }}
      >
        I am a dedicated attorney with{' '}
        <motion.span
          variants={shakeVariants}
          initial="rest"
          whileHover="shake"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#1a1008',
            color: '#FFFFFF',
            fontFamily: 'Playfair Display, serif',
            fontSize: '35px',
            borderRadius: '50px',
            padding: '0 12px',
            transform: 'rotate(12.87deg)',
            verticalAlign: 'middle',
            lineHeight: '43px',
            cursor: 'default',
            transformOrigin: 'center',
          }}
        >
          20+
        </motion.span>
        {' '}years of experience standing up for my clients&#39; rights. With{' '}
        <motion.span
          variants={shakeVariants}
          initial="rest"
          whileHover="shake"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#1a1008',
            color: '#FFFFFF',
            fontFamily: 'Playfair Display, serif',
            fontSize: '35px',
            borderRadius: '50px',
            padding: '0 12px',
            transform: 'rotate(-9.62deg)',
            verticalAlign: 'middle',
            lineHeight: '43px',
            cursor: 'default',
            transformOrigin: 'center',
          }}
        >
          1k+
        </motion.span>
        {' '}cases handled across criminal, civil, and family law, I combine sharp legal strategy with a personal commitment to every case I take.
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.25, ease }}
        style={{ marginTop: '8px' }}
      >
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
    </section>
  )
}
