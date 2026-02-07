import { IconCircle, IconCircleCheck, IconLoader2 } from '@tabler/icons-react'

import { cn } from '../../lib/utils'

type RoadmapStatus = 'completed' | 'in-progress' | 'planned'

interface StatusBadgeProps {
  status: RoadmapStatus
  label: string
  className?: string
}

const statusConfig: Record<RoadmapStatus, { icon: React.ComponentType<{ className?: string }>; className: string }> = {
  completed: {
    icon: IconCircleCheck,
    className: 'bg-success/10 text-success',
  },
  'in-progress': {
    icon: IconLoader2,
    className: 'bg-primary/10 text-primary',
  },
  planned: {
    icon: IconCircle,
    className: 'bg-muted/10 text-muted-foreground',
  },
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium text-xs',
        config.className,
        status === 'in-progress' && '[&_svg]:animate-spin',
        className,
      )}
    >
      <Icon aria-hidden className="size-3 shrink-0" />
      {label}
    </span>
  )
}
