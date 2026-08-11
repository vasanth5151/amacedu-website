import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../../lib/motion'

// Scroll-triggered reveal wrapper.
export default function Reveal({ children, variants = fadeUp, className = '', as = 'div', ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
