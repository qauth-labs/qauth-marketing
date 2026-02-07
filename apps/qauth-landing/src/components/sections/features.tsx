import { IconBox, IconDeviceDesktop, IconLock, IconShield } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { CORE_FEATURES } from '../../lib/constants'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'
import { FeatureCard } from '../shared/feature-card'

const icons = [IconShield, IconBox, IconDeviceDesktop, IconLock] as const

export function Features() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <section className="scroll-mt-24 py-24 md:py-32" id="features">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div animate="animate" className="mb-16 max-w-2xl" initial="initial" variants={variants}>
          <h2 className="font-bold text-3xl text-foreground md:text-4xl">
            Core <span className="text-highlight">Features</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Built for <span className="text-highlight">security engineers</span> who demand control without sacrificing
            developer experience.
          </p>
        </motion.div>

        <motion.div
          animate="animate"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial="initial"
          variants={staggerContainer}
        >
          {CORE_FEATURES.map((feature, index) => {
            const IconComponent = icons[index]
            return (
              <motion.div key={feature.title} variants={variants}>
                <FeatureCard
                  className="size-full"
                  description={feature.description}
                  icon={<IconComponent aria-hidden className="size-5" />}
                  title={feature.title}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
