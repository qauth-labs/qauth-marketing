import IconInfoCircle from '@tabler/icons-react/dist/esm/icons/IconInfoCircle.mjs'
import IconRefresh from '@tabler/icons-react/dist/esm/icons/IconRefresh.mjs'
import {
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@qauth/ui'

export function PricingFeature() {
  return (
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button aria-label="About monthly active identities" size="icon" variant="outline">
          <IconInfoCircle />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Monthly active identities</PopoverTitle>
          <PopoverDescription>
            Any identity that completes at least one authorization in the billing period — however many apps, sessions,
            or tokens it touches.
          </PopoverDescription>
        </PopoverHeader>
        <dl className="grid grid-cols-2 gap-2 border-border border-t pt-3">
          <div className="flex flex-col gap-1">
            <dt className="text-muted-foreground">Included</dt>
            <dd className="font-medium tabular-nums">10,000 / month</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-muted-foreground">Overage</dt>
            <dd className="font-medium tabular-nums">$0.002 each</dd>
          </div>
        </dl>
      </PopoverContent>
    </Popover>
  )
}

export function KeyRotation() {
  return (
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <IconRefresh />
          Rotate signing key
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Rotate the signing key?</PopoverTitle>
          <PopoverDescription>
            A fresh ML-DSA key starts signing immediately. The retired key stays published in JWKS for 24 hours, so
            tokens already in flight keep validating.
          </PopoverDescription>
        </PopoverHeader>
        <div className="flex items-center gap-2 border-border border-t pt-3">
          <Button className="ml-auto" size="xs" variant="ghost">
            Cancel
          </Button>
          <Button size="xs">Rotate key</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
