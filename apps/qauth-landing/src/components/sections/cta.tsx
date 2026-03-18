import { IconArrowRight, IconBrandGithub } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'

export function CTA() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <section className="relative overflow-hidden py-28 text-center md:py-40">
      {/* Bottom radial glow */}
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 flex justify-center">
        <div className="h-[500px] w-[1000px] rounded-full bg-primary/15 opacity-40 blur-[60px]" />
      </div>

      <motion.div
        animate="animate"
        className="relative z-10 mx-auto max-w-[1200px] px-6"
        initial="initial"
        variants={staggerContainer}
      >
        <motion.h2
          className="mx-auto mb-5 max-w-2xl font-display font-normal text-[clamp(36px,5vw,56px)] leading-[1.1] tracking-[-0.02em]"
          variants={variants}
        >
          Ready to ship?
        </motion.h2>

        <motion.p
          className="mx-auto mb-10 max-w-[520px] text-[17px] text-muted-foreground leading-[1.7]"
          variants={variants}
        >
          Stop maintaining auth. Build on verifiable credentials, identity wallets, and quantum-resistant cryptography —
          from day one.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-3.5" variants={variants}>
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-[15px] text-primary-foreground shadow-sm transition-all hover:-translate-y-px hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="https://github.com/qauth-labs/qauth"
            rel="noopener noreferrer"
            target="_blank"
          >
            Start building
            <IconArrowRight aria-hidden className="size-4" />
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 font-semibold text-[15px] text-foreground transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="https://github.com/qauth-labs/qauth"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconBrandGithub aria-hidden className="size-4" />
            View on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
