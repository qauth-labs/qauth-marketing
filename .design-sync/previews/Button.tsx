import IconArrowRight from '@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs'
import IconTrash from '@tabler/icons-react/dist/esm/icons/IconTrash.mjs'
import { Button } from '@qauth/ui'

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Join Waitlist</Button>
      <Button variant="outline">Learn more</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Cancel</Button>
      <Button variant="destructive">Delete account</Button>
      <Button variant="link">View documentation</Button>
    </div>
  )
}

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button aria-label="Next step" size="icon">
        <IconArrowRight />
      </Button>
    </div>
  )
}

export function States() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Continue</Button>
      <Button disabled>Joining…</Button>
      <Button disabled variant="outline">
        Unavailable
      </Button>
      <Button variant="destructive">
        <IconTrash />
        Remove
      </Button>
    </div>
  )
}
