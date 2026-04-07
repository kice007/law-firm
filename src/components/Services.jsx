'use client'
import { motion } from 'framer-motion'
import CTAButton from './ui/CTAButton'
import { ArrowUpRight } from 'lucide-react'
import gavel from '../assets/gavel1.jpg'

const services = [
  { num: '01', name: 'Corporate & Business Law', desc: "From contract drafting and corporate governance to disputes and acquisitions, I protect your business interests at every stage of growth and conflict." },
  { num: '02', name: 'Civil Litigation', desc: "When disputes escalate, I represent you with precision — building a compelling case and fighting relentlessly for the outcome you deserve." },
  { num: '03', name: 'Criminal Defence', desc: "Facing criminal charges is serious. I provide a rigorous, strategic defence designed to protect your freedom, your reputation, and your future." },
  { num: '04', name: 'Family And Divorce Law', desc: "I guide you through separation, custody arrangements, and asset division with clarity, discretion, and an unwavering focus on your well-being." },
  { num: '05', name: 'Property & Real Estate Law', desc: "From acquisitions to boundary disputes and title issues, I safeguard your property rights with thorough legal counsel and decisive action." },
]

const ease = [0.23, 1, 0.32, 1]

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{ height: '974px' }}
    >
      {/* BG Image */}
      <img
        src={gavel.src}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: '#3d201080' }} />

      {/* Content */}
      <div
        className="relative"
        style={{
          height: '974px',
          padding: '50px 100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '60px',
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
              <span style={{ color: '#FFFFFF', fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>MY SERVICES</span>
            </div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 500, color: '#FFFFFF', lineHeight: 0.909, width: '520px' }}>
              Services tailored to<br /><i>your needs</i>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-end' }}
          >
            <p style={{ color: '#FFFFFF', fontSize: '13px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif', textAlign: 'right', width: '360px', margin: 0 }}>
              Every case is different. I offer focused expertise across the areas where the stakes are highest.
            </p>
            <CTAButton
              href="#contact"
              text="Start Your Case"
              bgColor="#FFFFFF"
              circleBg="#B8963E"
              textColor="#000000"
              arrowColor="#FFFFFF"
              height={44}
              width="178px"
            />
          </motion.div>
        </div>

        {/* Service Cards */}
        <div
          style={{
            width: '100%',
            height: '673px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              whileHover={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                transition: { duration: 0.2 },
              }}
              className="flex items-center justify-between"
              style={{
                width: '100%',
                height: '104px',
                borderRadius: '20px',
                border: '0.5px solid rgba(255,255,255,1)',
                padding: '0 30px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(50px)',
                WebkitBackdropFilter: 'blur(50px)',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2, width: '31px', flexShrink: 0 }}>
                {svc.num}
              </span>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2, width: '317px', flexShrink: 0 }}>
                {svc.name}
              </span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, color: '#FFFFFF', lineHeight: 1.2, width: '562px' }}>
                {svc.desc}
              </span>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.18, ease }}
                className="flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', borderRadius: '50px', width: '46px', height: '41px', flexShrink: 0 }}
              >
                <ArrowUpRight size={21} color="#B8963E" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
