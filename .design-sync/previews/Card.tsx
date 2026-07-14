import IconBolt from '@tabler/icons-react/dist/esm/icons/IconBolt.mjs'
import { Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@qauth/ui'

export function Default() {
  return (
    <Card className="w-80">
      <CardHeader>
        <div aria-hidden className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <IconBolt />
        </div>
        <CardTitle>Post-quantum ready</CardTitle>
        <CardDescription>
          Every token is signed with algorithms designed to survive the next decade of cryptography.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Swap signing algorithms without touching your integration — QAuth handles key rotation and migration for
          you.
        </p>
      </CardContent>
    </Card>
  )
}

export function WithFooterAndAction() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Pro plan</CardTitle>
        <CardDescription>For teams shipping production auth.</CardDescription>
        <CardAction>
          <Badge>Popular</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">Unlimited applications, SSO, and priority support.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1" variant="outline">
          Contact sales
        </Button>
        <Button className="flex-1">Upgrade</Button>
      </CardFooter>
    </Card>
  )
}
