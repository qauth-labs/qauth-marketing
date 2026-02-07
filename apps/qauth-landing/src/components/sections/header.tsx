import { Button } from '@qauth/ui'
import { IconArrowRight, IconCode } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { SITE } from '../../lib/constants'
import { getFadeInUpVariants } from '../../lib/motion-variants'

const navLinks: Array<{ label: string; to: string; external?: boolean }> = [
  { label: 'Features', to: '#features' },
  { label: 'Roadmap', to: '#roadmap' },
  { label: 'Docs', to: 'https://docs.qauth.dev', external: true },
]

export function Header() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <motion.header
      animate="animate"
      className="sticky top-0 z-50 border-border border-b bg-background/80 backdrop-blur-sm"
      initial="initial"
      variants={variants}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link aria-label={`${SITE.name} home`} className="flex items-center transition-opacity hover:opacity-90" to="/">
          <img alt={SITE.name} className="h-8 w-auto" height={32} src="/logo-light.svg" width={116} />
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-6">
          {navLinks.map(({ label, to, external }) => (
            <a
              href={to}
              key={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-muted-foreground text-sm transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
          <a
            aria-label="Integration code"
            className="flex items-center gap-1 text-muted-foreground text-sm transition-colors hover:text-foreground"
            href="#integration"
          >
            <IconCode aria-hidden className="size-4" />
            <span className="sr-only">Code</span>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="default" variant="ghost">
            <a href="/">Login</a>
          </Button>
          <Button asChild className="rounded-lg" size="default">
            <a href="#waitlist">
              Get Started
              <IconArrowRight aria-hidden className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
