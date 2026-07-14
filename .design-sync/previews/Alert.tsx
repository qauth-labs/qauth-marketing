import IconAlertTriangle from '@tabler/icons-react/dist/esm/icons/IconAlertTriangle.mjs'
import IconKey from '@tabler/icons-react/dist/esm/icons/IconKey.mjs'
import IconShieldLock from '@tabler/icons-react/dist/esm/icons/IconShieldLock.mjs'
import { Alert, AlertAction, AlertDescription, AlertTitle, Button } from '@qauth/ui'

export function Default() {
  return (
    <Alert className="w-96">
      <IconKey />
      <AlertTitle>Your API key was regenerated</AlertTitle>
      <AlertDescription>
        The previous key stops working in 24 hours. Update your environment variables before then.
      </AlertDescription>
    </Alert>
  )
}

export function Destructive() {
  return (
    <Alert className="w-96" variant="destructive">
      <IconAlertTriangle />
      <AlertTitle>Token exchange failed</AlertTitle>
      <AlertDescription>
        The client secret for checkout-service expired on 12 May. Rotate it to restore access.
      </AlertDescription>
    </Alert>
  )
}

export function WithAction() {
  return (
    <Alert className="w-96">
      <IconShieldLock />
      <AlertTitle>Post-quantum signing is ready</AlertTitle>
      <AlertDescription>Move this tenant to ML-DSA token signatures — no client changes needed.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline">
          Enable
        </Button>
      </AlertAction>
    </Alert>
  )
}
