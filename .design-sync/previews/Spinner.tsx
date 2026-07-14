import { Button, Card, CardContent, Spinner } from '@qauth/ui'

export function InButton() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>
        <Spinner />
        Creating application…
      </Button>
      <Button disabled variant="outline">
        <Spinner />
        Rotating secret…
      </Button>
      <Button aria-label="Loading" disabled size="icon">
        <Spinner />
      </Button>
    </div>
  )
}

export function LoadingPanel() {
  return (
    <Card className="w-80">
      <CardContent className="flex flex-col items-center gap-3 py-6 text-center">
        <Spinner className="size-6 text-primary" />
        <div className="grid gap-1">
          <p className="font-medium text-sm">Verifying your credentials</p>
          <p className="text-muted-foreground text-xs">Exchanging the authorization code for tokens…</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function Sizes() {
  return (
    <div className="flex items-end gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner />
        <span className="text-muted-foreground text-xs">Inline</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6" />
        <span className="text-muted-foreground text-xs">Panel</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-8 text-primary" />
        <span className="text-muted-foreground text-xs">Full page</span>
      </div>
    </div>
  )
}
