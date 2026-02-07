import { type TokenType, tokenizeCode } from '../../lib/highlight-code'
import { cn } from '../../lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  className?: string
}

const tokenClass: Record<TokenType, string> = {
  comment: 'text-muted-foreground',
  string: 'text-highlight',
  keyword: 'text-primary',
  number: 'text-chart-2',
  plain: 'text-foreground',
}

export function CodeBlock({ code, filename, className }: CodeBlockProps) {
  const tokens = tokenizeCode(code)

  return (
    <section
      aria-label={filename ?? 'Code sample'}
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-[#0f0f0f] shadow-[0_0_40px_-8px_oklch(0.75_0.15_195_/_0.2)]',
        className,
      )}
    >
      {filename != null && (
        <div className="flex items-center gap-2 border-border border-b px-4 py-3">
          <div className="flex gap-1.5">
            <span aria-hidden className="size-3 rounded-full bg-red-500/80" />
            <span aria-hidden className="size-3 rounded-full bg-yellow-500/80" />
            <span aria-hidden className="size-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-muted-foreground text-sm">{filename}</span>
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm">
        <code className="font-mono">
          {tokens.map((token, index) => (
            <span className={tokenClass[token.type]} key={`${index}-${token.type}-${token.text.length}`}>
              {token.text}
            </span>
          ))}
        </code>
      </pre>
    </section>
  )
}
