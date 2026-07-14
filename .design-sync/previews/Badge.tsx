import IconArrowUpRight from '@tabler/icons-react/dist/esm/icons/IconArrowUpRight.mjs'
import IconCheck from '@tabler/icons-react/dist/esm/icons/IconCheck.mjs'
import IconClock from '@tabler/icons-react/dist/esm/icons/IconClock.mjs'
import IconExclamationCircle from '@tabler/icons-react/dist/esm/icons/IconExclamationCircle.mjs'
import { Badge } from '@qauth/ui'

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Beta</Badge>
      <Badge variant="secondary">OAuth 2.1</Badge>
      <Badge variant="destructive">Deprecated</Badge>
      <Badge variant="outline">v2.4.0</Badge>
      <Badge variant="ghost">Draft</Badge>
      <Badge variant="link">Changelog</Badge>
    </div>
  )
}

export function WithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>
        <IconCheck data-icon="inline-start" />
        Verified
      </Badge>
      <Badge variant="secondary">
        <IconClock data-icon="inline-start" />
        Pending review
      </Badge>
      <Badge variant="destructive">
        <IconExclamationCircle data-icon="inline-start" />
        Secret expired
      </Badge>
      <Badge variant="outline">
        Read the docs
        <IconArrowUpRight data-icon="inline-end" />
      </Badge>
    </div>
  )
}

export function ClientList() {
  return (
    <div className="w-80 divide-y border">
      <div className="flex items-center justify-between gap-3 px-3 py-2.5">
        <div className="min-w-0">
          <p className="truncate font-medium text-sm">checkout-service</p>
          <p className="truncate text-muted-foreground text-xs">Confidential · PKCE</p>
        </div>
        <Badge>Active</Badge>
      </div>
      <div className="flex items-center justify-between gap-3 px-3 py-2.5">
        <div className="min-w-0">
          <p className="truncate font-medium text-sm">partner-portal</p>
          <p className="truncate text-muted-foreground text-xs">Public · Single-page app</p>
        </div>
        <Badge variant="secondary">Staging</Badge>
      </div>
      <div className="flex items-center justify-between gap-3 px-3 py-2.5">
        <div className="min-w-0">
          <p className="truncate font-medium text-sm">legacy-billing</p>
          <p className="truncate text-muted-foreground text-xs">Confidential · Client secret</p>
        </div>
        <Badge variant="destructive">Secret expired</Badge>
      </div>
    </div>
  )
}
