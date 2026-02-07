import { Button } from '@qauth/ui'
import { IconArrowRight, IconCheck, IconFileText } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { HERO_CODE, SITE } from '../../lib/constants'
import { getFadeInUpVariants, getScaleInVariants, getTransition, staggerContainer } from '../../lib/motion-variants'
import { CodeBlock } from '../shared/code-block'

const bullets = ['Open Source', 'Self-Hostable'] as const

export function Hero() {
  const reduceMotion = useReducedMotion()
  const fadeVariants = getFadeInUpVariants(!!reduceMotion)
  const scaleVariants = getScaleInVariants(!!reduceMotion)
  const transition = getTransition(!!reduceMotion)

  return (
    <section className="relative flex min-h-[90vh] items-center py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div animate="animate" className="flex flex-col gap-8" initial="initial" variants={staggerContainer}>
          <motion.div className="flex flex-col gap-4" variants={fadeVariants}>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 font-medium text-success text-xs">
              <span aria-hidden>⚡</span>
              {SITE.releaseTag}
            </span>
            <h1 className="font-bold font-display text-4xl text-foreground leading-tight tracking-tight [text-shadow:0_0_32px_oklch(0.75_0.15_195_/_0.35)] md:text-5xl lg:text-6xl">
              <span className="text-highlight">Post-Quantum</span>{' '}
              <span className="text-foreground">
                Ready <br /> Authentication.
              </span>
            </h1>
          </motion.div>

          <motion.p className="max-w-xl text-muted-foreground text-sm leading-relaxed" variants={fadeVariants}>
            The headless-first identity platform built for the next era of cryptography. Fully OAuth 2.1 compliant,
            developer-friendly, and secure by design.
          </motion.p>

          <motion.div className="flex flex-wrap items-center gap-4" variants={fadeVariants}>
            <Button asChild className="rounded-lg" size="lg">
              <a href="#waitlist">
                Get Started
                <IconArrowRight aria-hidden className="size-5" />
              </a>
            </Button>
            <Button asChild className="rounded-lg" size="lg" variant="outline">
              <a href="https://docs.qauth.dev" rel="noopener noreferrer" target="_blank">
                <IconFileText aria-hidden className="size-5" />
                View Docs
              </a>
            </Button>
          </motion.div>

          <motion.ul className="flex flex-wrap gap-6 text-muted-foreground text-sm" variants={fadeVariants}>
            {bullets.map((item) => (
              <li className="flex items-center gap-2" key={item}>
                <IconCheck aria-hidden className="size-4 shrink-0 text-highlight" />
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          animate="animate"
          className="flex items-center justify-center"
          initial="initial"
          transition={transition}
          variants={scaleVariants}
        >
          <CodeBlock className="w-full max-w-lg" code={HERO_CODE} filename="index.js" />
        </motion.div>
      </div>
    </section>
  )
}
