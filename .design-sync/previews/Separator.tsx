import { Separator } from '@qauth/ui'

export function Default() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="font-medium text-sm">QAuth Cloud</span>
        <span className="text-muted-foreground text-xs">Managed hosting with automatic signing-key rotation.</span>
      </div>
      <Separator />
      <div className="flex flex-col gap-1">
        <span className="font-medium text-sm">Self-hosted</span>
        <span className="text-muted-foreground text-xs">
          Run the same open-source core on your own infrastructure.
        </span>
      </div>
    </div>
  )
}

export function Vertical() {
  return (
    <div className="flex h-5 items-center gap-3 text-muted-foreground text-xs">
      <a href="#">Docs</a>
      <Separator orientation="vertical" />
      <a href="#">Pricing</a>
      <Separator orientation="vertical" />
      <a href="#">Changelog</a>
      <Separator orientation="vertical" />
      <a href="#">GitHub</a>
    </div>
  )
}

export function InList() {
  return (
    <div className="flex max-w-sm flex-col">
      <div className="flex items-center justify-between py-2">
        <span className="font-mono text-xs">openid</span>
        <span className="text-muted-foreground text-xs">Required</span>
      </div>
      <Separator />
      <div className="flex items-center justify-between py-2">
        <span className="font-mono text-xs">profile</span>
        <span className="text-muted-foreground text-xs">Optional</span>
      </div>
      <Separator />
      <div className="flex items-center justify-between py-2">
        <span className="font-mono text-xs">offline_access</span>
        <span className="text-muted-foreground text-xs">Optional</span>
      </div>
    </div>
  )
}
