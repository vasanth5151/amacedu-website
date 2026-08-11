import Reveal from './Reveal'

// eyebrow + title + optional subtitle, centered or left.
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false, className = '' }) {
  const isCenter = align === 'center'
  return (
    <div className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal>
        <h2
          className={`mt-5 font-display text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[2.7rem] ${
            light ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal>
          <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-ink-muted'}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
