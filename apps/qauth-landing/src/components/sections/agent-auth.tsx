import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'

const STATS = [
  { val: 'RFC 8693', label: 'On-behalf-of token exchange' },
  { val: '3 modes', label: 'ReadOnly / Admin / Exec blast-radius caps' },
  { val: 'Step-up', label: 'Human-in-the-loop before dangerous ops' },
  { val: 'aud', label: 'Tokens bound to a single resource' },
] as const

export function AgentAuth() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <section className="relative scroll-mt-24 overflow-hidden py-24 md:py-32" id="agents">
      {/* Background glow — purely decorative */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[600px] w-[800px] rounded-full bg-primary/10 opacity-25 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          {/* Left: diagram */}
          <motion.div animate="animate" initial="initial" variants={variants}>
            <div className="rounded-2xl border border-border bg-card p-10">
              <p className="mb-5 font-mono text-[11px] text-muted-foreground uppercase tracking-[0.1em]">
                Delegation flow
              </p>

              {/* Row 1: Delegate */}
              <div className="flex flex-wrap items-center gap-3 border-border py-4">
                <span className="min-w-[70px] font-mono text-[12px] text-muted-foreground">Delegate</span>
                <span className="rounded-lg border border-primary/25 bg-primary/15 px-4 py-2 font-mono font-semibold text-[12px] text-primary">
                  User
                </span>
                {/* Arrow is a visual connector, not content */}
                <span aria-hidden className="text-lg text-muted-foreground/60">
                  →
                </span>
                <span className="rounded-lg border border-border bg-white/[0.04] px-4 py-2 font-mono font-semibold text-[12px] text-muted-foreground">
                  Token Exchange (RFC 8693)
                </span>
                <span aria-hidden className="text-lg text-muted-foreground/60">
                  →
                </span>
                <span className="rounded-lg border border-highlight/25 bg-highlight/12 px-4 py-2 font-mono font-semibold text-[11px] text-highlight">
                  JWT {'{ sub: user, act: agent, aud: resource }'}
                </span>
              </div>

              {/* Row 2: Blast radius */}
              <div className="flex flex-wrap items-center gap-3 border-border border-t py-4">
                <span className="min-w-[70px] font-mono text-[12px] text-muted-foreground">Blast radius</span>
                <span className="rounded-lg border border-primary/25 bg-primary/15 px-4 py-2 font-mono font-semibold text-[12px] text-primary">
                  ReadOnly
                </span>
                <span className="rounded-lg border border-highlight/25 bg-highlight/12 px-4 py-2 font-mono font-semibold text-[12px] text-highlight">
                  Admin
                </span>
                <span className="rounded-lg border border-border bg-white/[0.04] px-4 py-2 font-mono font-semibold text-[12px] text-muted-foreground">
                  Exec
                </span>
              </div>

              {/* Row 3: Step-up */}
              <div className="flex flex-wrap items-center gap-3 border-border border-t py-4">
                <span className="min-w-[70px] font-mono text-[12px] text-muted-foreground">Step-up</span>
                <span className="rounded-lg border border-border bg-white/[0.04] px-4 py-2 font-mono font-semibold text-[12px] text-muted-foreground">
                  Exec + dangerous op
                </span>
                <span aria-hidden className="text-lg text-muted-foreground/60">
                  →
                </span>
                <span className="rounded-lg border border-primary/25 bg-primary/15 px-4 py-2 font-mono font-semibold text-[12px] text-primary">
                  Fresh human approval
                </span>
              </div>

              <p className="mt-6 border-border border-t pt-5 text-[12px] text-muted-foreground leading-[1.6]">
                <span aria-hidden className="text-primary">
                  ↓
                </span>{' '}
                Audience-bound tokens keep an agent scoped to the one
                <br />
                resource it was delegated for — nothing else is reachable.
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
              <p className="mb-4 font-mono font-semibold text-[12px] text-primary uppercase tracking-[0.12em]">
                Agent Authorization
              </p>
              <h2 className="mb-5 font-display font-normal text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.02em]">
                Agents act. Your auth server
                <br />
                answers for them.
              </h2>
              <p className="mb-8 text-[17px] text-muted-foreground leading-[1.7]">
                Agent auth isn't user auth with extra steps. A token has to say "agent X acting for user Y," not just
                one subject — composite identity, not a single claim. Agents can't file a ticket for a client ID either,
                so onboarding has to happen at machine speed via dynamic client registration and discovery. And a dev
                agent should never be able to touch prod — authorization has to be environment-aware by default. This
                isn't a roadmap item: it's shipped today, proven end-to-end with Claude Code, and it works the same
                whether you're fronting an MCP server or a plain REST API.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4" variants={variants}>
              {STATS.map(({ val, label }) => (
                <div className="rounded-xl border border-border bg-card p-5" key={val}>
                  <p className="mb-1 font-mono font-semibold text-[24px] text-primary">{val}</p>
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
