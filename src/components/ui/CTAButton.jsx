'use client'
import { useRef } from 'react'
import { motion, useAnimate } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const ease = [0.23, 1, 0.32, 1]

/**
 * CTA button with hover-driven rolling arrow + text fade.
 * On hover  → circle rolls to the far right while text fades out.
 * On unhover → circle rolls back while text fades back in.
 * Interruption-safe: new hover events cancel the previous animation mid-flight.
 */
export default function CTAButton({
  href,
  text,
  bgColor = '#B8963E',
  circleBg = '#FFFFFF',
  textColor = '#FFFFFF',
  arrowColor = '#B8963E',
  height = 44,
  width,
  circleW = 30,
  circleH = 29,
  arrowSize = 14,
  fontSize = 13,
  fontWeight = 500,
  padding = '0 10px',
  gap = 8,
  style: extraStyle = {},
  type = 'button',
  onClick: onClickProp,
}) {
  const btnRef = useRef(null)
  const [circleRef, animateCircle] = useAnimate()
  const [textRef, animateText] = useAnimate()

  const handleMouseEnter = () => {
    if (!btnRef.current || !circleRef.current || !textRef.current) return
    const travel = btnRef.current.offsetWidth - circleW - 22
    // Text fades out fast; circle rolls to the right simultaneously
    animateText(textRef.current, { opacity: 0 }, { duration: 0.18, ease })
    animateCircle(circleRef.current, { x: travel, rotate: 360 }, { duration: 0.38, ease })
  }

  const handleMouseLeave = () => {
    if (!circleRef.current || !textRef.current) return
    // Circle rolls back; text fades back in simultaneously
    animateCircle(circleRef.current, { x: 0, rotate: 0 }, { duration: 0.28, ease })
    animateText(textRef.current, { opacity: 1 }, { duration: 0.28, ease })
  }

  const sharedStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    backgroundColor: bgColor,
    borderRadius: '50px',
    height: `${height}px`,
    padding,
    gap: `${gap}px`,
    width,
    cursor: 'pointer',
    border: 'none',
    flexShrink: 0,
    overflow: 'hidden',
    ...extraStyle,
  }

  const circle = (
    <motion.div
      ref={circleRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: circleBg,
        borderRadius: '50%',
        width: `${circleW}px`,
        height: `${circleH}px`,
        flexShrink: 0,
      }}
    >
      <ArrowUpRight size={arrowSize} color={arrowColor} />
    </motion.div>
  )

  const label = (
    <motion.span
      ref={textRef}
      style={{
        color: textColor,
        fontSize: `${fontSize}px`,
        fontFamily: 'Inter, sans-serif',
        fontWeight,
        paddingRight: '8px',
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </motion.span>
  )

  if (href) {
    return (
      <motion.a
        ref={btnRef}
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClickProp}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.13, ease }}
        style={sharedStyle}
      >
        {circle}
        {label}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={btnRef}
      type={type}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClickProp}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.13, ease }}
      style={sharedStyle}
    >
      {circle}
      {label}
    </motion.button>
  )
}
