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

export function Roadmap() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <section className="scroll-mt-24 py-24 md:py-32" id="roadmap">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          animate="animate"
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          initial="initial"
          variants={variants}
        >
          <div>
            <h2 className="font-bold text-3xl text-foreground md:text-4xl">Development Status</h2>
            <p className="mt-4 text-muted-foreground text-sm">Building a truly quantum-safe identity.</p>
          </div>
          <span className="rounded-lg border border-border bg-card px-4 py-2 text-muted-foreground text-sm">
            Target Release: {SITE.targetRelease}
          </span>
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
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-foreground">{milestone.title}</h3>
                <p className="text-muted-foreground text-sm">{milestone.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
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
