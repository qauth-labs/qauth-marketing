import { Card, CardContent, CardHeader } from '@qauth/ui'

import { cn } from '../../lib/utils'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <Card
      className={cn(
        'rounded-xl border-border transition-colors hover:border-primary/50 hover:shadow-[0_0_24px_-4px_oklch(0.75_0.15_195_/_0.15)]',
        className,
      )}
    >
      <CardHeader>
        <div
          aria-hidden
          className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
        >
          {icon}
        </div>
        <h3 className="font-semibold text-foreground text-sm">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
