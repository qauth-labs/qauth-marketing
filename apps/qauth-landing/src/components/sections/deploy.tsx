import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'
import { Terminal } from '../shared/terminal'

export function Deploy() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <section className="scroll-mt-24 py-24 text-center md:py-32" id="deploy">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <motion.div animate="animate" className="mb-16" initial="initial" variants={variants}>
          <p className="mb-4 font-mono font-semibold text-[12px] text-highlight uppercase tracking-[0.12em]">Deploy</p>
          <h2 className="mb-4 font-display font-normal text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.02em]">
            Open-source,
            <br />
            self-hostable
          </h2>
          <p className="mx-auto max-w-[560px] text-[17px] text-muted-foreground leading-[1.7]">
            QAuth is open-source and designed for self-hosting. A managed cloud offering is on the roadmap for Q2 2026.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          animate="animate"
          className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 text-left md:grid-cols-2"
          initial="initial"
          variants={staggerContainer}
        >
          {/* Self-hosted — available now */}
          <motion.div
            className="group rounded-2xl border border-highlight/40 bg-card p-8 transition-all hover:border-highlight/60 hover:shadow-[0_0_40px_-8px_oklch(0.75_0.15_195_/_0.15)]"
            variants={variants}
          >
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-highlight/20 bg-highlight/12 px-3.5 py-1.5 font-mono font-semibold text-[12px] text-highlight">
              Available Now
            </span>
            <h3 className="mb-3 font-sans font-semibold text-[20px] tracking-[-0.01em]">Self-Hosted</h3>
            <p className="mb-6 text-[14px] text-muted-foreground leading-[1.65]">
              Complete data sovereignty. Run on your own infrastructure — no telemetry, no phone-home. Apache 2.0
              licensed.
            </p>
            <Terminal compact>
              <p>
                <span className="text-primary">❯ </span>
                <span className="text-muted-foreground">docker run </span>
                <span className="text-primary">-p </span>
                <span className="text-highlight">3000:3000</span>
                {' \\'}
              </p>
              <p>
                {'  '}
                <span className="text-highlight">qauth/auth-server</span>
              </p>
            </Terminal>
          </motion.div>

          {/* Cloud — coming soon */}
          <motion.div
            className="relative rounded-2xl border border-border bg-card/50 p-8 opacity-60"
            variants={variants}
          >
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono font-semibold text-[12px] text-muted-foreground">
              Planned · Q2 2026
            </span>
            <h3 className="mb-3 font-sans font-semibold text-[20px] text-muted-foreground tracking-[-0.01em]">
              Cloud Managed
            </h3>
            <p className="mb-6 text-[14px] text-muted-foreground leading-[1.65]">
              Managed hosting with custom domains, zero DevOps, and a developer dashboard. Under active development.
            </p>
            <a
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 font-semibold text-[13px] text-muted-foreground transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              href="https://github.com/qauth-labs/qauth/releases"
              rel="noopener noreferrer"
              target="_blank"
            >
              Follow progress on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
