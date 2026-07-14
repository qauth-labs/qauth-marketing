import IconRefresh from '@tabler/icons-react/dist/esm/icons/IconRefresh.mjs'
import { Badge, Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@qauth/ui'

export function OnIconButton() {
  return (
    <TooltipProvider>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button aria-label="Rotate signing key" size="icon" variant="outline">
            <IconRefresh />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Rotate signing key</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function OnBadge() {
  return (
    <TooltipProvider>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Badge variant="secondary">Preview</Badge>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          The device authorization grant is in preview — enable it per client from the dashboard.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function OnClientId() {
  return (
    <TooltipProvider>
      <Tooltip open>
        <TooltipTrigger asChild>
          <span className="inline-block rounded-none bg-muted px-1 align-middle font-mono text-sm">
            qauth_client_9f2c1a7b4e8d6035
          </span>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          Public client identifier — safe to ship in your SPA bundle. Never pair it with a secret.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
