'use client'
import { motion } from 'framer-motion'
import Nav from './Nav'
import CTAButton from './ui/CTAButton'
import heroBg from '../assets/lawyers-office-classic-wooden-desk-law-books-justice-scale-embodying-legal-professionalism-329494949.png'
import lawyerPhoto from '../assets/Gemini_Generated_Image_3wqxls3wqxls3wqx-Photoroom.png'
import facebookLogo from '../assets/facebook-logo-blue.png'
import googleLogo from '../assets/google.png'
import pers1 from '../assets/pers1.png'
import pers2 from '../assets/pers2.png'
import pers3 from '../assets/pers3.png'
import pers4 from '../assets/pers4.png'
import pers5 from '../assets/pers5.png'
import { ArrowUpRight } from 'lucide-react'

const avatars = [pers1.src, pers2.src, pers3.src, pers4.src, pers5.src]
const ease = [0.23, 1, 0.32, 1]

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
})

const fadeIn = (delay) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay, ease },
})

export default function Hero() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden"
      style={{ height: '50.49vw', minHeight: '500px' }}
    >
      {/* BG Image */}
      <motion.img
        {...fadeIn(0)}
        src={heroBg.src}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: '#0a0a0acc' }} />

      {/* Watermark */}
      <motion.div
        {...fadeIn(0.9)}
        className="absolute pointer-events-none select-none"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '9.72vw',
          fontWeight: 600,
          color: 'rgba(255,255,255)',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          left: '20.42%',
          bottom: 0,
          width: '58.89%',
          overflow: 'hidden',
          zIndex: '1',
          transform: 'translateY(20%)',
        }}
      >
        Ledru-Rollin
      </motion.div>

      {/* Nav */}
      <Nav />

      {/* Content Row */}
      <div
        className="relative flex w-full"
        style={{ marginTop: '5.28vw', height: '45.21vw' }}
      >
        {/* Left */}
        <div
          className="flex flex-col justify-top"
          style={{ width: '46.67%', padding: '4.17vw 5.56vw', gap: '1.39vw', flexShrink: 0 }}
        >
          {/* Rating Badge */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex items-center w-fit"
            style={{ borderRadius: '50px', height: '2.5vw', padding: '0.56vw 0', gap: '0.35vw' }}
          >
            <div style={{ position: 'relative', width: '2.92vw', height: '1.875vw', flexShrink: 0 }}>
              <img
                src={facebookLogo.src}
                alt="Facebook"
                style={{ width: '1.39vw', height: '1.32vw', borderRadius: '50%', position: 'absolute', left: '0.21vw', top: '0.28vw', objectFit: 'cover' }}
              />
              <img
                src={googleLogo.src}
                alt="Google"
                style={{ width: '1.39vw', height: '1.32vw', borderRadius: '50%', position: 'absolute', left: '1.32vw', top: '0.28vw', objectFit: 'cover' }}
              />
            </div>
            <span style={{ color: '#B8963E', fontSize: '0.76vw', fontFamily: 'Inter, sans-serif' }}>★★★★★</span>
            <span style={{ color: '#FFFFFF', fontSize: '0.76vw', fontFamily: 'Inter, sans-serif' }}>4.9 · Trusted by Clients</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            {...fadeUp(0.45)}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: '4.86vw', fontWeight: 500, color: '#FFFFFF', lineHeight: 1.05 }}
          >
            Your trusted legal<i> guidance</i>
          </motion.div>

          {/* Body */}
          <motion.p
            {...fadeUp(0.6)}
            style={{ color: '#FFFFFF', fontSize: '1.04vw', lineHeight: 1.65, fontFamily: 'Inter, sans-serif', margin: 0 }}
          >
            I fight for your rights with precision and dedication. Whether you face criminal charges, a business dispute, or a family matter — I am in your corner.
          </motion.p>

          {/* CTA row */}
          <motion.div
            {...fadeUp(0.75)}
            className="flex items-center"
            style={{ gap: '1.39vw' }}
          >
            <CTAButton
              href="#contact"
              text="Start Your Case"
              bgColor="#B8963E"
              circleBg="#FFFFFF"
              textColor="#FFFFFF"
              arrowColor="#B8963E"
              style={{
                height: '3.06vw',
                padding: '0 0.69vw',
                gap: '0.56vw',
                width: '12.36vw',
                fontSize: '0.9vw',
              }}
            />
          </motion.div>
        </div>

        {/* Right */}
        <div
          className="overflow-hidden"
          style={{ flex: 1, height: '100%', display: 'flex', gap: '0.69vw' }}
        >
          {/* Lawyer photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            style={{ width: '33.96vw', height: '50.97vw', borderRadius: '1.39vw', overflow: 'hidden', flexShrink: 0 }}
          >
            <img
              src={lawyerPhoto.src}
              alt="Lawyer"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Stat sidebar */}
          <motion.div
            {...fadeUp(0.85)}
            style={{
              width: '8.96vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              paddingTop: '10vw',
              flexShrink: 0,
              gap: '0.15vw',
            }}
          >
            <span style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontSize: '4.86vw', fontWeight: 300, lineHeight: 1.05, width: '8.26vw', textAlign: 'right' }}>
              12K
            </span>
            <span style={{ color: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontSize: '1.04vw', lineHeight: 1.65, width: '7.43vw', textAlign: 'right' }}>
              cases resolved
            </span>
            {/* Avatars */}
            <div style={{ position: 'relative', width: '6.39vw', height: '1.32vw' }}>
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{
                    width: '1.39vw',
                    height: '1.32vw',
                    borderRadius: '50%',
                    border: '1px solid #FFFFFF',
                    position: 'absolute',
                    left: `${i * 0.9}vw`,
                    top: 0,
                    objectFit: 'cover',
                  }}
                />
              ))}
              <div
                className="flex items-center justify-center"
                style={{
                  width: '1.39vw',
                  height: '1.32vw',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  position: 'absolute',
                  left: `${avatars.length * 0.9}vw`,
                  top: 0,
                }}
              >
                <ArrowUpRight style={{ width: '0.76vw', height: '0.76vw' }} color="#B8963E" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
