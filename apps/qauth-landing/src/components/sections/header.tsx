import { IconBrandGithub } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants } from '../../lib/motion-variants'

interface NavLink {
  label: string
  href: string
  external?: boolean
}

const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Quickstart', href: '#code' },
  { label: 'Post-Quantum', href: '#pqc' },
  { label: 'Releases', href: 'https://github.com/qauth-labs/qauth/releases', external: true },
  { label: 'GitHub', href: 'https://github.com/qauth-labs/qauth', external: true },
]

function QAuthLogo() {
  return (
    <a
      aria-label="QAuth Labs home"
      className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href="#"
    >
      <img alt="QAuth Labs" className="h-8 w-auto" height={32} src="/logo.svg" />
    </a>
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
          {navLinks.map(({ label, href, external }) => (
            <a
              className="rounded font-medium text-[14px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              href={href}
              key={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
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
