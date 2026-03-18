import { cn } from '../../lib/utils'

interface TerminalProps {
  title?: string
  children: React.ReactNode
  className?: string
  compact?: boolean
}

export function Terminal({ title, children, className, compact = false }: TerminalProps) {
  return (
    <div
      aria-label={title ?? 'Code example'}
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-card',
        'shadow-[0_24px_80px_-12px_rgba(0,0,0,0.5),0_0_0_1px_oklch(1_0_0_/_5%)]',
        className,
      )}
      role="region"
    >
      <div className="flex items-center gap-2 border-border border-b bg-background/50 px-4 py-3.5">
        {/* Decorative macOS-style window controls — purely visual */}
        <span aria-hidden className="size-3 rounded-full bg-[#ff5f57]" />
        <span aria-hidden className="size-3 rounded-full bg-[#febc2e]" />
        <span aria-hidden className="size-3 rounded-full bg-[#28c840]" />
        {/* Title is aria-hidden: the region aria-label above already exposes the context */}
        {title && (
          <span aria-hidden className="flex-1 text-center font-mono text-[12px] text-muted-foreground/50">
            {title}
          </span>
        )}
      </div>
      <div className={cn('font-mono text-[13.5px] leading-[1.8]', compact ? 'p-4 text-xs' : 'p-6')}>{children}</div>
    </div>
  )
}
