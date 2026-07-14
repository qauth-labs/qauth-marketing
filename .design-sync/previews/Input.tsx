import { Input, Label } from '@qauth/ui'

export function Default() {
  return (
    <div className="grid w-72 gap-2">
      <Label htmlFor="input-email">Work email</Label>
      <Input id="input-email" placeholder="you@company.com" type="email" />
      <p className="text-muted-foreground text-xs">Sandbox credentials land in your inbox in about a minute.</p>
    </div>
  )
}

export function States() {
  return (
    <div className="grid w-72 gap-5">
      <div className="grid gap-2">
        <Label htmlFor="input-app-name">Application name</Label>
        <Input defaultValue="Acme Checkout" id="input-app-name" />
      </div>
      <div className="grid gap-2">
        <Label className="text-destructive" htmlFor="input-redirect">
          Redirect URI
        </Label>
        <Input aria-invalid="true" defaultValue="localhost:3000/callback" id="input-redirect" />
        <p className="text-destructive text-xs">Redirect URI must be an absolute https:// URL.</p>
      </div>
      <div className="group grid gap-2" data-disabled="true">
        <Label htmlFor="input-client-id">Client ID</Label>
        <Input defaultValue="qa_live_7f3c9b21e4d8" disabled id="input-client-id" />
      </div>
    </div>
  )
}

export function Types() {
  return (
    <div className="grid w-72 gap-5">
      <div className="grid gap-2">
        <Label htmlFor="input-type-secret">Client secret</Label>
        <Input defaultValue="qa_sk_9d41c07be2f5" id="input-type-secret" type="password" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="input-type-search">Search applications</Label>
        <Input id="input-type-search" placeholder="Search by name or client ID" type="search" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="input-type-ttl">Access token TTL (seconds)</Label>
        <Input defaultValue={3600} id="input-type-ttl" type="number" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="input-type-key">Signing key (PEM)</Label>
        <Input id="input-type-key" type="file" />
      </div>
    </div>
  )
}
