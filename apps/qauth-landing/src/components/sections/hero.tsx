import { IconArrowRight, IconShield } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants, getTransition, staggerContainer } from '../../lib/motion-variants'
import { Terminal } from '../shared/terminal'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const fadeVariants = getFadeInUpVariants(!!reduceMotion)
  const transition = getTransition(!!reduceMotion)

  return (
    <section className="relative overflow-hidden px-4 pt-44 pb-28 text-center md:pt-56 md:pb-36">
      {/* Radial background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-[20%] left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 opacity-60 blur-[60px]" />
        <div className="absolute top-[10%] left-[55%] h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-highlight/12 opacity-40 blur-[80px]" />
      </div>

      <motion.div
        animate="animate"
        className="relative z-10 mx-auto max-w-[1200px]"
        initial="initial"
        variants={staggerContainer}
      >
        {/* Badges */}
        <motion.div
          className="mb-7 flex flex-wrap justify-center gap-2.5"
          transition={transition}
          variants={fadeVariants}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-highlight/20 bg-highlight/10 px-3.5 py-1.5 font-mono font-semibold text-[12px] text-highlight tracking-wide">
            <IconShield aria-hidden className="size-3" />
            Post-Quantum Ready · Apache 2.0
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 font-mono font-semibold text-[12px] text-primary tracking-wide">
            EUDI Wallet · OID4VP · SIOPv2
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mx-auto mb-6 max-w-4xl font-display font-normal text-[clamp(48px,7vw,84px)] leading-[1.05] tracking-[-0.03em]"
          transition={transition}
          variants={fadeVariants}
        >
          Identity infrastructure
          <br />
          for the <em className="text-highlight italic">quantum</em> era
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mx-auto mb-10 max-w-[620px] text-[18px] text-muted-foreground leading-[1.7]"
          transition={transition}
          variants={fadeVariants}
        >
          Open-source identity server with QAuth-to-QAuth instance federation — register once, authenticate everywhere.
          Native EUDI Wallet, OID4VP, and post-quantum cryptography. Headless-first, self-hostable.
        </motion.p>

        {/* Actions */}
        <motion.div
          className="mb-16 flex flex-wrap justify-center gap-3.5"
          transition={transition}
          variants={fadeVariants}
        >
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-[15px] text-primary-foreground shadow-sm transition-all hover:-translate-y-px hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="#code"
          >
            See How It Works
            <IconArrowRight aria-hidden className="size-4" />
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 font-semibold text-[15px] text-foreground transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="https://github.com/qauth-labs/qauth"
            rel="noopener noreferrer"
            target="_blank"
          >
            View Source
          </a>
        </motion.div>

        {/* Terminal preview */}
        <motion.div className="mx-auto max-w-[720px]" transition={transition} variants={fadeVariants}>
          <Terminal title="quickstart — zsh">
            <div>
              <p>
                <span className="text-muted-foreground/70">#Deploy QAuth in 30 seconds</span>
              </p>
              <p>
                <span className="text-primary">❯ </span>
                <span className="text-muted-foreground">docker run </span>
                <span className="text-primary">-p </span>
                <span className="text-highlight">3000:3000 </span>
                <span className="text-highlight">qauth/auth-server</span>
              </p>
              <br />
              <p>
                <span className="text-muted-foreground/70">#Or use the TypeScript SDK</span>
              </p>
              <p>
                <span className="text-primary">❯ </span>
                <span className="text-muted-foreground">npm install </span>
                <span className="text-highlight">@qauth-labs/core</span>
              </p>
              <br />
              <p>
                <span className="text-[#c9a0dc]">import</span>
                {' { '}
                <span className="text-[#d4a843]">QAuth</span>
                {' } '}
                <span className="text-[#c9a0dc]">from</span>{' '}
                <span className="text-highlight">&apos;@qauth-labs/core&apos;</span>
              </p>
              <p>
                <span className="text-[#c9a0dc]">const</span>
                {' auth = '}
                <span className="text-[#c9a0dc]">new</span> <span className="text-[#d4a843]">QAuth</span>
                {'({ '}
                <span className="text-primary">domain</span>
                {': '}
                <span className="text-highlight">&apos;auth.yourapp.com&apos;</span>
                {' })'}
                <span
                  aria-hidden
                  className="ml-0.5 inline-block h-[16px] w-[8px] translate-y-[2px] animate-[blink_1s_steps(1)_infinite] bg-highlight"
                />
              </p>
            </div>
          </Terminal>
        </motion.div>
      </motion.div>
    </section>
  )
}
