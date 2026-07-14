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
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 font-mono font-semibold text-[12px] text-primary tracking-wide">
            OAuth 2.1 · Agent-Native Authorization
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-highlight/20 bg-highlight/10 px-3.5 py-1.5 font-mono font-semibold text-[12px] text-highlight tracking-wide">
            <IconShield aria-hidden className="size-3" />
            Crypto-Agile · Apache 2.0
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mx-auto mb-6 max-w-4xl font-display font-normal text-[clamp(48px,7vw,84px)] leading-[1.05] tracking-[-0.03em]"
          transition={transition}
          variants={fadeVariants}
        >
          The OAuth 2.1 server
          <br />
          for the <em className="text-highlight italic">agent era</em>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mx-auto mb-10 max-w-[620px] text-[18px] text-muted-foreground leading-[1.7]"
          transition={transition}
          variants={fadeVariants}
        >
          Open-source, self-hostable authorization for your apps, your APIs, and the AI agents acting on behalf of your
          users. On-behalf-of delegation, audience-bound tokens, MCP support validated end-to-end with Claude Code — on
          a crypto-agile core built for the post-quantum era.
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
                <span className="text-muted-foreground/70">#Self-host QAuth</span>
              </p>
              <p>
                <span className="text-primary">❯ </span>
                <span className="text-muted-foreground">git clone </span>
                <span className="text-highlight">qauth-labs/qauth </span>
                <span className="text-muted-foreground">{'&& cd qauth'}</span>
              </p>
              <p>
                <span className="text-muted-foreground/70">{'# generate JWT keys, then:'}</span>
              </p>
              <p>
                <span className="text-primary">❯ </span>
                <span className="text-muted-foreground">docker compose up -d</span>
              </p>
              <br />
              <p>
                <span className="text-muted-foreground/70"># Delegate to an agent — on behalf of a user</span>
              </p>
              <p>
                <span className="text-primary">❯ </span>
                <span className="text-muted-foreground">curl -X POST </span>
                <span className="text-highlight">http://localhost:3000/oauth/token </span>
                <span className="text-primary">-d </span>
                <span className="text-highlight">grant_type=urn:ietf:params:oauth:grant-type:token-exchange </span>
                <span className="text-primary">-d </span>
                <span className="text-highlight">subject_token=&lt;user_token&gt; </span>
                <span className="text-primary">-d </span>
                <span className="text-highlight">audience=https://api.yourapp.com</span>
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
