'use client'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CTAButton from './ui/CTAButton'
import avoc1 from '../assets/avoc1.png'
import caseImg2 from '../assets/Gemini_Generated_Image_4o90qc4o90qc4o90.png'
import caseImg3 from '../assets/Gemini_Generated_Image_3wqxls3wqxls3wqx.png'

const cases = [
  {
    img: avoc1.src,
    height: 499,
    title: 'All Charges Dismissed Before Trial',
    desc: 'Demonstrated key evidence was unlawfully obtained, resulting in full dismissal of all charges before the case ever reached a jury.',
    ctaBg: '#FFFFFF',
    ctaTextColor: '#18110A',
    ctaCircleBg: '#B8963E',
    ctaArrowColor: '#FFFFFF',
    overlayStyle: { background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(184,150,62,0.5) 100%)' },
    category: 'CRIMINAL DEFENCE',
    date: 'DEC 2025',
    dotColor: '#ffffff',
    dot1: { x: 25, y: 24 },
    categoryBadge: { x: 46, y: 22, w: 118 },
    dateBadge: { x: 25, y: 46, w: 65 },
    dot2: { x: 93, y: 48 },
    titleY: 226,
    descY: 303,
    ctaY: 412,
  },
  {
    img: caseImg2.src,
    height: 596,
    title: 'Full Title Awarded After Multi-Party Dispute',
    desc: 'Resolved a complex multi-party title conflict through meticulous document analysis and strategic litigation, securing undisputed ownership for my client.',
    ctaBg: '#B8963E',
    ctaTextColor: '#FFFFFF',
    ctaCircleBg: '#FFFFFF',
    ctaArrowColor: '#B8963E',
    overlayStyle: { background: 'radial-gradient(ellipse at 50% 80%, rgba(184,150,62,0.2) 0%, rgba(0,0,0,0.2) 100%)' },
    category: 'PROPERTY & REAL ESTATE',
    date: 'NOV 2025',
    dotColor: '#b8963e',
    dot1: { x: 23, y: 28 },
    categoryBadge: { x: 45, y: 26, w: 147 },
    dateBadge: { x: 23, y: 50, w: 66 },
    dot2: { x: 91, y: 52 },
    titleY: 332,
    descY: 417,
    ctaY: 523,
  },
  {
    img: caseImg3.src,
    height: 499,
    title: 'Favourable Custody Agreement Secured',
    desc: "Negotiated a comprehensive parenting plan that prioritised the children's best interests while protecting my client's parental rights and financial position.",
    ctaBg: '#FFFFFF',
    ctaTextColor: '#18110A',
    ctaCircleBg: '#B8963E',
    ctaArrowColor: '#FFFFFF',
    overlayStyle: { background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(184,150,62,0.5) 100%)' },
    category: 'FAMILY & DIVORCE',
    date: 'OCT 2025',
    dotColor: '#ffffff',
    dot1: { x: 29, y: 31 },
    categoryBadge: { x: 50, y: 29, w: 118 },
    dateBadge: { x: 29, y: 53, w: 67 },
    dot2: { x: 97, y: 55 },
    titleY: 237,
    descY: 322,
    ctaY: 423,
  },
]

const ease = [0.23, 1, 0.32, 1]

function DotPill({ x, y, dotColor }) {
  return (
    <div
      style={{
        position: 'absolute', left: `${x}px`, top: `${y}px`,
        width: '19px', height: '18px', borderRadius: '100px',
        border: '1px solid #ffffff',
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}
    >
      <div style={{ width: '10px', height: '9px', borderRadius: '50%', backgroundColor: dotColor, border: '1px solid rgba(255,255,255,0.4)' }} />
    </div>
  )
}

function BadgePill({ x, y, w, text }) {
  return (
    <div
      style={{
        position: 'absolute', left: `${x}px`, top: `${y}px`,
        width: `${w}px`, height: '22px', borderRadius: '50px',
        border: '1px solid #ffffff',
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}
    >
      <span style={{ color: '#ffffff', fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 'normal' }}>
        {text}
      </span>
    </div>
  )
}

export default function RecentCases() {
  return (
    <section
      id="cases"
      style={{ backgroundColor: '#FFFFFF', padding: '80px 100px', display: 'flex', flexDirection: 'column', gap: '48px' }}
    >
      {/* Header */}
      <div className="flex items-end justify-between" style={{ width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col"
          style={{ gap: '8px' }}
        >
          <div className="flex items-center" style={{ gap: '5px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#B8963E', flexShrink: 0 }} />
            <span style={{ color: '#4f4f4f', fontSize: '15px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>CASE RESULTS</span>
          </div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 500, color: '#18110A', lineHeight: 0.909, width: '520px' }}>
            Recent cases with <br /> <i>proven results</i>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="flex flex-col items-end"
          style={{ gap: '16px' }}
        >
          <p style={{ color: '#4f4f4f', fontSize: '13px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif', textAlign: 'right', width: '360px', margin: 0 }}>
            A selection of landmark victories and complex matters I have successfully resolved for my clients across multiple practice areas.
          </p>
          <div className="flex items-center" style={{ gap: '10px' }}>
            <motion.button
              whileHover={{ borderColor: '#B8963E', color: '#B8963E' }}
              whileTap={{ scale: 0.93 }}
              transition={{ duration: 0.18, ease }}
              className="flex items-center justify-center"
              style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #4f4f4f', backgroundColor: 'transparent', cursor: 'pointer' }}
            >
              <ChevronLeft size={16} color="#18110A" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.93 }}
              transition={{ duration: 0.18, ease }}
              className="flex items-center justify-center"
              style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#B8963E', border: 'none', cursor: 'pointer' }}
            >
              <ChevronRight size={16} color="#FFFFFF" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="flex items-end" style={{ gap: '24px' }}>
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease } }}
            className="relative overflow-hidden"
            style={{ borderRadius: '14px', height: `${c.height}px`, flex: 1, cursor: 'pointer' }}
          >
            {/* Background Image */}
            <img
              src={c.img}
              alt={c.title}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Gradient Overlay */}
            <div style={{ position: 'absolute', inset: 0, ...c.overlayStyle }} />

            {/* Content */}
            <div style={{ position: 'absolute', inset: 0 }}>
              <DotPill x={c.dot1.x} y={c.dot1.y} dotColor={c.dotColor} />
              <BadgePill x={c.categoryBadge.x} y={c.categoryBadge.y} w={c.categoryBadge.w} text={c.category} />
              <BadgePill x={c.dateBadge.x} y={c.dateBadge.y} w={c.dateBadge.w} text={c.date} />
              <DotPill x={c.dot2.x} y={c.dot2.y} dotColor={c.dotColor} />

              {/* Title */}
              <div
                style={{
                  position: 'absolute', left: '25px', top: `${c.titleY}px`, width: '338px',
                  fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 'normal',
                  color: '#FFFFFF', lineHeight: 1.3,
                }}
              >
                {c.title}
              </div>

              {/* Description */}
              <div
                style={{
                  position: 'absolute', left: '25px', top: `${c.descY}px`, width: '322px',
                  fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 'normal',
                  color: '#FFFFFF', lineHeight: 1.65,
                }}
              >
                {c.desc}
              </div>

              {/* CTA */}
              <CTAButton
                href="#contact"
                text="Case Study"
                bgColor={c.ctaBg}
                circleBg={c.ctaCircleBg}
                textColor={c.ctaTextColor}
                arrowColor={c.ctaArrowColor}
                height={44}
                width="153px"
                style={{ position: 'absolute', left: '25px', top: `${c.ctaY}px` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
