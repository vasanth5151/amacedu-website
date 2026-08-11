import Reveal from './ui/Reveal'
import { INSTITUTIONS } from '../data/content'

export default function InstitutionLogos() {
  const row = [...INSTITUTIONS, ...INSTITUTIONS]
  return (
    <section className="border-y border-black/5 bg-white py-14">
      <div className="container-x">
        <Reveal className="text-center">
          <span className="eyebrow">One family of schools</span>
          <h3 className="mt-4 font-display text-2xl font-bold text-ink">
            Meenakshi Group of Institutions
          </h3>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {row.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-black/5 bg-cream px-7 py-4"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-green text-sm font-extrabold text-white">
                {name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
              </span>
              <span className="whitespace-nowrap font-display text-sm font-bold text-ink">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
