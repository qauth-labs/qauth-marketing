import { Link } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'framer-motion'
import { SITE } from '../../lib/constants'
import { getFadeInUpVariants } from '../../lib/motion-variants'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/qauth' },
  { label: 'Documentation', href: 'https://docs.qauth.dev' },
  { label: 'Twitter', href: 'https://twitter.com/qauth' },
] as const

export function Footer() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <motion.footer
      animate="animate"
      className="border-border border-t py-12 md:py-16"
      initial="initial"
      variants={variants}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            aria-label={`${SITE.name} home`}
            className="flex items-center transition-opacity hover:opacity-90"
            to="/"
          >
            <img alt={SITE.name} className="h-8 w-auto" height={32} src="/logo-light.svg" width={116} />
          </Link>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
            {footerLinks.map(({ label, href }) => (
              <a
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                href={href}
                key={label}
                rel="noopener noreferrer"
                target="_blank"
              >
                {label}
              </a>
            ))}
          </nav>

          <span className="text-muted-foreground text-sm">{SITE.version}</span>
        </div>

        <p className="mt-8 text-muted-foreground text-sm">
          © 2026 QAuth Inc. All rights reserved. Designed with post-quantum security in mind.
        </p>
      </div>
    </motion.footer>
  )
}
