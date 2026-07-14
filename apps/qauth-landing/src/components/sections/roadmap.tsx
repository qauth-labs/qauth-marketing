import { Button } from '@qauth/ui'
import { IconCode } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { ROADMAP_MILESTONES, SITE } from '../../lib/constants'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'
import { StatusBadge } from '../shared/status-badge'

const statusLabels: Record<string, string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  planned: 'Planned',
}

interface RoadmapProps {
  /** Set when this section is the page's own title (no Hero-equivalent above it), e.g. on /roadmap. */
  asPageTitle?: boolean
}

export function Roadmap({ asPageTitle = false }: RoadmapProps) {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)
  const TitleTag = asPageTitle ? 'h1' : 'h2'
  const MilestoneTitleTag = asPageTitle ? 'h2' : 'h3'

  return (
    <section
      className={asPageTitle ? 'scroll-mt-24 pt-44 pb-24 md:pt-56 md:pb-32' : 'scroll-mt-24 py-24 md:py-32'}
      id="roadmap"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          animate="animate"
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          initial="initial"
          variants={variants}
        >
          <div>
            <TitleTag className="font-display font-normal text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.02em]">
              Development Status
            </TitleTag>
            <p className="mt-4 text-muted-foreground text-sm">
              The near-term roadmap ships today. The long-term platform is next.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-lg border border-border bg-card px-4 py-2 text-muted-foreground text-sm">
              {SITE.nearTermStatus}
            </span>
            <span className="rounded-lg border border-border bg-card px-4 py-2 text-muted-foreground text-sm">
              {SITE.longTermTarget}
            </span>
          </div>
        </motion.div>

        <motion.ul
          animate="animate"
          className="mt-12 flex flex-col gap-6"
          initial="initial"
          variants={staggerContainer}
        >
          {ROADMAP_MILESTONES.map((milestone) => (
            <motion.li
              className="flex flex-col gap-2 rounded-xl border border-border bg-card p-6 transition-colors hover:border-border/80 sm:flex-row sm:items-center sm:justify-between"
              key={milestone.title}
              variants={variants}
            >
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <MilestoneTitleTag className="font-semibold text-foreground">{milestone.title}</MilestoneTitleTag>
                <p className="text-muted-foreground text-sm">{milestone.description}</p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <StatusBadge label={statusLabels[milestone.status]} status={milestone.status} />
                {milestone.viewCodeHref != null && (
                  <Button asChild size="sm" variant="outline">
                    <a href={milestone.viewCodeHref} rel="noopener noreferrer" target="_blank">
                      <IconCode aria-hidden className="size-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
