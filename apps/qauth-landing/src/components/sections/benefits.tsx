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
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
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
