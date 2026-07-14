import { IconBrandGithub } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants } from '../../lib/motion-variants'

const NAV_LINK_CLASS =
  'rounded font-medium text-[14px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

interface HashNavLink {
  type: 'hash'
  label: string
  hash: string
}

interface RouteNavLink {
  type: 'route'
  label: string
  href: string
}

interface ExternalNavLink {
  type: 'external'
  label: string
  href: string
}

type NavLink = HashNavLink | RouteNavLink | ExternalNavLink

const navLinks: NavLink[] = [
  { type: 'hash', label: 'Features', hash: 'features' },
  { type: 'hash', label: 'Core', hash: 'oauth-core' },
  { type: 'hash', label: 'Agents', hash: 'agents' },
  { type: 'hash', label: 'Quickstart', hash: 'code' },
  { type: 'hash', label: 'Post-Quantum', hash: 'pqc' },
  { type: 'route', label: 'Roadmap', href: '/roadmap' },
]

function QAuthLogo() {
  return (
    <Link
      aria-label="QAuth Labs home"
      className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      to="/"
    >
      <img alt="QAuth Labs" className="h-8 w-auto" height={32} src="/logo.svg" width={83} />
    </Link>
  )
}

export function Header() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <motion.header
      animate="animate"
      className="fixed top-0 right-0 left-0 z-50 border-border/40 border-b bg-background/80 backdrop-blur-xl backdrop-saturate-150"
      initial="initial"
      variants={variants}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <QAuthLogo />

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            if (link.type === 'hash') {
              return (
                <Link className={NAV_LINK_CLASS} hash={link.hash} key={link.label} to="/">
                  {link.label}
                </Link>
              )
            }
            if (link.type === 'route') {
              return (
                <Link className={NAV_LINK_CLASS} key={link.label} to={link.href}>
                  {link.label}
                </Link>
              )
            }
            return (
              <a className={NAV_LINK_CLASS} href={link.href} key={link.label} rel="noopener noreferrer" target="_blank">
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Mobile-only Roadmap link: the main nav is hidden below md, so this
              keeps /roadmap reachable on phones. Text-only to avoid header overflow. */}
          <Link className={`${NAV_LINK_CLASS} text-foreground md:hidden`} to="/roadmap">
            Roadmap
          </Link>
          <a
            className="hidden rounded-lg border border-border px-4 py-2 font-semibold text-[14px] text-foreground transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
            href="https://github.com/qauth-labs/qauth/releases"
            rel="noopener noreferrer"
            target="_blank"
          >
            Changelog
          </a>
          <a
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 font-semibold text-[14px] text-primary-foreground shadow-sm transition-all hover:-translate-y-px hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="https://github.com/qauth-labs/qauth"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconBrandGithub aria-hidden className="size-4" />
            Star on GitHub
          </a>
        </div>
      </div>
    </motion.header>
  )
}
