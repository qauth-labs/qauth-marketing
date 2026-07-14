import { IconAtom2, IconPencil, IconScale } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { BENEFITS } from '../../lib/constants'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'
import { FeatureCard } from '../shared/feature-card'

const icons = [IconScale, IconPencil, IconAtom2] as const

export function Benefits() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <section className="scroll-mt-24 py-24 md:py-32" id="benefits">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div animate="animate" className="mb-16 text-center" initial="initial" variants={variants}>
          <p className="mb-4 font-mono font-semibold text-[12px] text-highlight uppercase tracking-[0.12em]">
            Why QAuth
          </p>
          <h2 className="mb-4 font-display font-normal text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.02em]">
            Built to last, built to fit
          </h2>
          <p className="mx-auto max-w-[560px] text-[17px] text-muted-foreground leading-[1.7]">
            No bloated dependency, no rigid flows, no expiration date. QAuth is designed to stay lightweight, adaptable,
            and secure for the long haul.
          </p>
        </motion.div>

        <motion.div
          animate="animate"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          variants={staggerContainer}
        >
          {BENEFITS.map((benefit, index) => {
            const IconComponent = icons[index]
            return (
              <motion.div key={benefit.title} variants={variants}>
                <FeatureCard
                  description={benefit.description}
                  icon={<IconComponent aria-hidden className="size-5" />}
                  title={benefit.title}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
