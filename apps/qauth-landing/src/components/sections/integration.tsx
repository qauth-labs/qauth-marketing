import { IconArrowRight } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'
import { Terminal } from '../shared/terminal'

const STEPS = [
  {
    num: '1',
    title: 'Install the SDK',
    desc: 'One package. TypeScript types included.',
  },
  {
    num: '2',
    title: 'Initialize the client',
    desc: 'Point to your QAuth instance — hosted or self-hosted.',
  },
  {
    num: '3',
    title: 'Authenticate users',
    desc: 'Passkeys, EUDI Wallets, and federated QAuth identities first. Email/password available for legacy migration.',
  },
] as const

export function Integration() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <section className="scroll-mt-24 py-24 md:py-32" id="code">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          {/* Left: text + steps */}
          <motion.div animate="animate" initial="initial" variants={staggerContainer}>
            <motion.div variants={variants}>
              <p className="mb-4 font-mono font-semibold text-[12px] text-highlight uppercase tracking-[0.12em]">
                Quickstart
              </p>
              <h2 className="mb-5 font-display font-normal text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.02em]">
                Auth that gets out
                <br />
                of your way
              </h2>
              <p className="mb-8 max-w-[440px] text-[17px] text-muted-foreground leading-[1.7]">
                Built for the next era of identity — federated QAuth instances, EUDI Wallets, and passkeys.
                Email/password is a migration path, not the destination.
              </p>
            </motion.div>

            <motion.div className="mb-8 flex flex-col gap-5" variants={variants}>
              {STEPS.map(({ num, title, desc }) => (
                <div className="flex items-start gap-4" key={num}>
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[6px] border border-primary/25 bg-primary/15 font-mono font-semibold text-[12px] text-primary">
                    {num}
                  </span>
                  <div>
                    <h4 className="mb-1 font-semibold text-[14px]">{title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-[1.5]">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={variants}>
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-semibold text-[14px] text-primary-foreground transition-all hover:-translate-y-px hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href="https://github.com/qauth-labs/qauth"
                rel="noopener noreferrer"
                target="_blank"
              >
                View on GitHub
                <IconArrowRight aria-hidden className="size-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: code terminal */}
          <motion.div animate="animate" initial="initial" style={{ transitionDelay: '0.15s' }} variants={variants}>
            <Terminal title="app.ts">
              <p>
                <span className="text-[#c9a0dc]">import</span>
                {' { '}
                <span className="text-[#d4a843]">QAuth</span>
                {' } '}
                <span className="text-[#c9a0dc]">from</span>{' '}
                <span className="text-highlight">&apos;@qauth-labs/core&apos;</span>
              </p>
              <br />
              <p>
                <span className="text-[#c9a0dc]">const</span>
                {' auth = '}
                <span className="text-[#c9a0dc]">new</span> <span className="text-[#d4a843]">QAuth</span>
                {'({'}
              </p>
              <p>
                &nbsp;&nbsp;
                <span className="text-primary">domain</span>
                {': '}
                <span className="text-highlight">&apos;auth.yourapp.com&apos;</span>
                {','}
              </p>
              <p>
                &nbsp;&nbsp;
                <span className="text-primary">projectId</span>
                {': '}
                <span className="text-highlight">&apos;your-project-id&apos;</span>
                {','}
              </p>
              <p>{'})'}</p>
              <br />
              <p>
                <span className="text-muted-foreground/70">{'// Passkey — passwordless, phishing-resistant'}</span>
              </p>
              <p>
                <span className="text-[#c9a0dc]">const</span>
                {' { user, session } = '}
                <span className="text-[#c9a0dc]">await</span>
                {' auth.'}
                <span className="text-[#d4a843]">signInWithPasskey</span>
                {'()'}
              </p>
              <br />
              <p>
                <span className="text-muted-foreground/70">
                  {'// Instance federation — user from another QAuth server'}
                </span>
              </p>
              <p>
                <span className="text-[#c9a0dc]">const</span>
                {' { user, session } = '}
                <span className="text-[#c9a0dc]">await</span>
                {' auth.'}
                <span className="text-[#d4a843]">federateFrom</span>
                {'({'}
              </p>
              <p>
                &nbsp;&nbsp;
                <span className="text-primary">issuer</span>
                {': '}
                <span className="text-highlight">&apos;auth.partner.com&apos;</span>
                {','}
              </p>
              <p>{'})'}</p>
              <br />
              <p>
                <span className="text-muted-foreground/70">{'// EUDI Wallet — OID4VP credential presentation'}</span>
              </p>
              <p>
                <span className="text-[#c9a0dc]">const</span>
                {' { user, session } = '}
                <span className="text-[#c9a0dc]">await</span>
                {' auth.'}
                <span className="text-[#d4a843]">presentCredential</span>
                {'({'}
              </p>
              <p>
                &nbsp;&nbsp;
                <span className="text-primary">descriptor</span>
                {': { '}
                <span className="text-primary">id</span>
                {': '}
                <span className="text-highlight">&apos;eu.national-id&apos;</span>
                {' }'}
                {','}
              </p>
              <p>{'})'}</p>
              <br />
              <p>
                <span className="text-muted-foreground/70">{'// email/password — available for legacy migration'}</span>
              </p>
              <p>
                <span className="text-[#c9a0dc]">const</span>
                {' { user, session } = '}
                <span className="text-[#c9a0dc]">await</span>
                {' auth.'}
                <span className="text-[#d4a843]">signInWithPassword</span>
                {'({'}
              </p>
              <p>
                &nbsp;&nbsp;
                <span className="text-primary">email</span>
                {': '}
                <span className="text-highlight">&apos;user@example.com&apos;</span>
                {','}
                {'  '}
                <span className="text-primary">password</span>
                {','}
              </p>
              <p>{'})'}</p>
            </Terminal>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
