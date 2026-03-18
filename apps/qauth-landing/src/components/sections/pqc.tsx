import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'

const STATS = [
  { val: 'Level 3', label: 'NIST security level (192-bit)' },
  { val: 'FIPS 204', label: 'ML-DSA standard' },
  { val: '0 LOC', label: 'Business logic changes to upgrade' },
  { val: 'Dual-sig', label: 'Classical + PQC composite' },
] as const

export function PQC() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <section className="relative scroll-mt-24 overflow-hidden py-24 md:py-32" id="pqc">
      {/* Background glow — purely decorative */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[600px] w-[800px] rounded-full bg-highlight/10 opacity-25 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          {/* Left: diagram */}
          <motion.div animate="animate" initial="initial" variants={variants}>
            <div className="rounded-2xl border border-border bg-card p-10">
              <p className="mb-5 font-mono text-[11px] text-muted-foreground uppercase tracking-[0.1em]">
                Hybrid signing flow
              </p>

              {/* Phase 1 */}
              <div className="flex flex-wrap items-center gap-3 border-border py-4">
                <span className="min-w-[70px] font-mono text-[12px] text-muted-foreground">Phase 1</span>
                <span className="rounded-lg border border-primary/25 bg-primary/15 px-4 py-2 font-mono font-semibold text-[12px] text-primary">
                  Ed25519
                </span>
                {/* Arrow is a visual connector, not content */}
                <span aria-hidden className="text-lg text-muted-foreground/60">
                  →
                </span>
                <span className="rounded-lg border border-border bg-white/[0.04] px-4 py-2 font-mono font-semibold text-[12px] text-muted-foreground">
                  JWT (64 B sig)
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/15 px-2 py-0.5 font-mono font-semibold text-[10px] text-primary">
                  CURRENT
                </span>
              </div>

              {/* Phase 5 */}
              <div className="flex flex-wrap items-center gap-3 border-border border-t py-4">
                <span className="min-w-[70px] font-mono text-[12px] text-muted-foreground">Phase 5</span>
                <span className="rounded-lg border border-primary/25 bg-primary/15 px-4 py-2 font-mono font-semibold text-[12px] text-primary">
                  Ed25519
                </span>
                <span aria-hidden className="text-muted-foreground/60">
                  +
                </span>
                <span className="rounded-lg border border-highlight/25 bg-highlight/12 px-4 py-2 font-mono font-semibold text-[12px] text-highlight">
                  ML-DSA-65
                </span>
                <span aria-hidden className="text-lg text-muted-foreground/60">
                  →
                </span>
                <span className="rounded-lg border border-border bg-white/[0.04] px-4 py-2 font-mono font-semibold text-[12px] text-muted-foreground">
                  Hybrid JWT
                </span>
              </div>

              {/* Future */}
              <div className="flex flex-wrap items-center gap-3 border-border border-t py-4">
                <span className="min-w-[70px] font-mono text-[12px] text-muted-foreground">Future</span>
                <span className="rounded-lg border border-highlight/25 bg-highlight/12 px-4 py-2 font-mono font-semibold text-[12px] text-highlight">
                  ML-DSA-65
                </span>
                <span aria-hidden className="text-lg text-muted-foreground/60">
                  →
                </span>
                <span className="rounded-lg border border-border bg-white/[0.04] px-4 py-2 font-mono font-semibold text-[12px] text-muted-foreground">
                  PQC-only JWT
                </span>
              </div>

              <p className="mt-6 border-border border-t pt-5 text-[12px] text-muted-foreground leading-[1.6]">
                <span className="text-highlight">↓</span> Reference tokens with RFC 7662 introspection mitigate
                <br />
                the 3,309 B signature size during hybrid transition.
              </p>
            </div>
          </motion.div>

          {/* Right: text + stats */}
          <motion.div
            animate="animate"
            initial="initial"
            style={{ transitionDelay: '0.15s' }}
            variants={staggerContainer}
          >
            <motion.div variants={variants}>
              <p className="mb-4 font-mono font-semibold text-[12px] text-highlight uppercase tracking-[0.12em]">
                Security
              </p>
              <h2 className="mb-5 font-display font-normal text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.02em]">
                Quantum-resistant
                <br />
                by architecture
              </h2>
              <p className="mb-8 text-[17px] text-muted-foreground leading-[1.7]">
                Not a checkbox. A crypto-agile core that evolves with NIST standards — so your tokens stay secure when
                quantum computers arrive.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4" variants={variants}>
              {STATS.map(({ val, label }) => (
                <div className="rounded-xl border border-border bg-card p-5" key={val}>
                  <p className="mb-1 font-mono font-semibold text-[24px] text-highlight">{val}</p>
                  <p className="text-[12px] text-muted-foreground">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
