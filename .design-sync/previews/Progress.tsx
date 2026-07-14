import IconCloudUpload from '@tabler/icons-react/dist/esm/icons/IconCloudUpload.mjs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Progress } from '@qauth/ui'

export function Levels() {
  return (
    <div className="flex w-80 flex-col gap-5">
      <div className="grid gap-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium">Importing users</span>
          <span className="text-muted-foreground tabular-nums">18%</span>
        </div>
        <Progress value={18} />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium">Mapping client scopes</span>
          <span className="text-muted-foreground tabular-nums">64%</span>
        </div>
        <Progress value={64} />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium">Rebuilding token indexes</span>
          <span className="text-muted-foreground tabular-nums">100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  )
}

export function SyncCard() {
  return (
    <Card className="w-80">
      <CardHeader>
        <div aria-hidden className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <IconCloudUpload />
        </div>
        <CardTitle>Migrating from Keycloak</CardTitle>
        <CardDescription>4,812 of 7,500 users imported</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Progress value={64} />
        <p className="text-muted-foreground text-xs">About 2 minutes remaining</p>
      </CardContent>
    </Card>
  )
}

export function OnboardingSteps() {
  return (
    <div className="w-80 border p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="font-medium text-sm">Set up your first client</p>
        <span className="shrink-0 text-muted-foreground text-xs tabular-nums">Step 3 of 4</span>
      </div>
      <Progress className="mt-3" value={75} />
      <p className="mt-3 text-muted-foreground text-xs">Next: add a redirect URI for your callback endpoint.</p>
    </div>
  )
}
