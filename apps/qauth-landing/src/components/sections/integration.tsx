import { IconArrowRight } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'
import { Terminal } from '../shared/terminal'

const STEPS = [
  {
    num: '1',
    title: 'Self-host with Docker',
    desc: 'Clone the repo and run docker compose up -d to start QAuth with PostgreSQL and Redis. Interactive API docs ship at /docs.',
  },
  {
    num: '2',
    title: 'Protect your MCP server',
    desc: 'Register @qauth-labs/mcp-guard on your resource server. It serves RFC 9728 metadata and returns a 401 challenge to unauthenticated requests.',
  },
  {
    num: '3',
    title: 'Let agents authenticate',
    desc: 'MCP clients like Claude Code discover your authorization server, register dynamically, and complete authorization_code with PKCE for an audience-bound token.',
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
                Self-host QAuth with Docker Compose, then protect your MCP servers with standards-based OAuth 2.1 — RFC
                9728 discovery, dynamic client registration, and PKCE. No proprietary SDK required.
              </p>
            </motion.div>

            <motion.div className="mb-8 flex flex-col gap-5" variants={variants}>
              {STEPS.map(({ num, title, desc }) => (
                <div className="flex items-start gap-4" key={num}>
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[6px] border border-primary/25 bg-primary/15 font-mono font-semibold text-[12px] text-primary">
                    {num}
                  </span>
                  <div>
                    <h3 className="mb-1 font-sans font-semibold text-[14px]">{title}</h3>
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
            <Terminal title="resource-server.ts">
              <p>
                <span className="text-[var(--code-keyword)]">import</span>
                {' Fastify '}
                <span className="text-[var(--code-keyword)]">from</span>{' '}
                <span className="text-highlight">&apos;fastify&apos;</span>
              </p>
              <p>
                <span className="text-[var(--code-keyword)]">import</span>
                {' { '}
                <span className="text-[var(--code-entity)]">mcpGuardPlugin</span>
                {' } '}
                <span className="text-[var(--code-keyword)]">from</span>{' '}
                <span className="text-highlight">&apos;@qauth-labs/mcp-guard&apos;</span>
              </p>
              <br />
              <p>
                <span className="text-[var(--code-keyword)]">const</span>
                {' app = '}
                <span className="text-[var(--code-entity)]">Fastify</span>
                {'()'}
              </p>
              <br />
              <p>
                <span className="text-muted-foreground/70">
                  {'// Protect your MCP resource server — audience-bound tokens only'}
                </span>
              </p>
              <p>
                <span className="text-[var(--code-keyword)]">await</span>
                {' app.'}
                <span className="text-[var(--code-entity)]">register</span>
                {'('}
                <span className="text-[var(--code-entity)]">mcpGuardPlugin</span>
                {', {'}
              </p>
              <p>
                &nbsp;&nbsp;
                <span className="text-primary">resource</span>
                {': '}
                <span className="text-highlight">&apos;https://mcp.yourapp.com&apos;</span>
                {','}
              </p>
              <p>
                &nbsp;&nbsp;
                <span className="text-primary">authorizationServer</span>
                {': '}
                <span className="text-highlight">&apos;https://auth.yourapp.com&apos;</span>
                {','}
              </p>
              <p>
                &nbsp;&nbsp;
                <span className="text-primary">requiredScopes</span>
                {': ['}
                <span className="text-highlight">&apos;documents:read&apos;</span>
                {'],'}
              </p>
              <p>{'})'}</p>
              <br />
              <p>
                <span className="text-[var(--code-keyword)]">app</span>
                {'.get('}
                <span className="text-highlight">&apos;/mcp&apos;</span>
                {', { '}
                <span className="text-primary">preHandler</span>
                {': app.'}
                <span className="text-[var(--code-entity)]">requireBearer</span>
                {' }, '}
                <span className="text-[var(--code-keyword)]">async</span>
                {' (request) => {'}
              </p>
              <p>
                &nbsp;&nbsp;
                <span className="text-muted-foreground/70">
                  {'// request.tokenClaims — verified signature, issuer, audience, scope'}
                </span>
              </p>
              <p>
                &nbsp;&nbsp;
                <span className="text-[var(--code-keyword)]">return</span>
                {' { tools: listTools() }'}
              </p>
              <p>{'})'}</p>
              <br />
              <p>
                <span className="text-muted-foreground/70">{'// No token → 401 Unauthorized'}</span>
              </p>
              <p>
                <span className="text-muted-foreground/70">{'// WWW-Authenticate: Bearer resource_metadata='}</span>
              </p>
              <p>
                <span className="text-muted-foreground/70">
                  {'//   "https://mcp.yourapp.com/.well-known/oauth-protected-resource"'}
                </span>
              </p>
              <br />
              <p>
                <span className="text-muted-foreground/70">
                  {'// The MCP client (e.g. Claude Code) discovers your auth server from'}
                </span>
              </p>
              <p>
                <span className="text-muted-foreground/70">
                  {'// that document, registers via CIMD or RFC 7591, then runs'}
                </span>
              </p>
              <p>
                <span className="text-muted-foreground/70">
                  {'// authorization_code + PKCE for an audience-bound access token.'}
                </span>
              </p>
              <br />
              <p>
                <span className="text-muted-foreground/70">
                  {'// Authorization: Bearer <token>  →  mcp-guard verifies it  →  200 OK'}
                </span>
              </p>
            </Terminal>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
