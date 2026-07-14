import IconLock from '@tabler/icons-react/dist/esm/icons/IconLock.mjs'
import { Checkbox, Input, Label, RadioGroup, RadioGroupItem, Textarea } from '@qauth/ui'

export function Default() {
  return (
    <div className="grid w-72 gap-5">
      <div className="grid gap-2">
        <Label htmlFor="label-app">Application name</Label>
        <Input defaultValue="Acme Checkout" id="label-app" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="label-secret">
          <IconLock className="size-4 text-muted-foreground" />
          Client secret
        </Label>
        <Input defaultValue="qa_sk_9d41c07be2f5" id="label-secret" type="password" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="label-origins">Allowed origins</Label>
        <Textarea defaultValue="https://app.acme.com" id="label-origins" />
      </div>
    </div>
  )
}

export function WithControls() {
  return (
    <div className="grid w-72 gap-4">
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked id="label-updates" />
        <Label htmlFor="label-updates">Email me the monthly changelog</Label>
      </div>
      <RadioGroup defaultValue="pkce">
        <div className="flex items-center gap-3">
          <RadioGroupItem id="label-grant-pkce" value="pkce" />
          <Label htmlFor="label-grant-pkce">Authorization code + PKCE</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem id="label-grant-cc" value="client-credentials" />
          <Label htmlFor="label-grant-cc">Client credentials</Label>
        </div>
      </RadioGroup>
    </div>
  )
}

export function Disabled() {
  return (
    <div className="grid w-72 gap-5">
      <div className="group grid gap-2" data-disabled="true">
        <Label htmlFor="label-disabled-id">Client ID</Label>
        <Input defaultValue="qa_live_7f3c9b21e4d8" disabled id="label-disabled-id" />
      </div>
      <div className="flex items-center gap-3">
        <Checkbox disabled id="label-disabled-sso" />
        <Label htmlFor="label-disabled-sso">Enterprise SSO (Pro plan only)</Label>
      </div>
    </div>
  )
}
