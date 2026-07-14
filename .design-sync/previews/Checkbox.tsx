import { Checkbox, Label } from '@qauth/ui'

export function Default() {
  return (
    <div className="grid w-72 gap-3">
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked id="checkbox-terms" />
        <Label htmlFor="checkbox-terms">I agree to the Terms of Service</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-changelog" />
        <Label htmlFor="checkbox-changelog">Email me the monthly changelog</Label>
      </div>
    </div>
  )
}

export function States() {
  return (
    <div className="grid w-72 gap-3">
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-consent" />
        <Label htmlFor="checkbox-consent">Force consent screen on every authorization</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked id="checkbox-rotate" />
        <Label htmlFor="checkbox-rotate">Rotate refresh tokens automatically</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox aria-invalid="true" id="checkbox-dpa" />
        <Label className="text-destructive" htmlFor="checkbox-dpa">
          Accept the Data Processing Agreement
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox disabled id="checkbox-sso" />
        <Label htmlFor="checkbox-sso">Enterprise SSO (Pro plan only)</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked disabled id="checkbox-audit" />
        <Label htmlFor="checkbox-audit">Audit logging (always on for Enterprise)</Label>
      </div>
    </div>
  )
}

export function ScopeList() {
  return (
    <div className="grid w-72 gap-4 border border-border p-4">
      <div className="grid gap-1">
        <p className="font-medium text-sm">Requested scopes</p>
        <p className="text-muted-foreground text-xs">Choose what Acme Checkout can access.</p>
      </div>
      <div className="grid gap-3">
        <div className="flex items-start gap-3">
          <Checkbox className="mt-0.5" defaultChecked id="scope-openid" />
          <div className="grid gap-1">
            <Label className="font-mono" htmlFor="scope-openid">
              openid
            </Label>
            <p className="text-muted-foreground text-xs">Issue an OIDC ID token for this user.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox className="mt-0.5" defaultChecked id="scope-email" />
          <div className="grid gap-1">
            <Label className="font-mono" htmlFor="scope-email">
              email
            </Label>
            <p className="text-muted-foreground text-xs">Read the verified email address.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox className="mt-0.5" id="scope-offline" />
          <div className="grid gap-1">
            <Label className="font-mono" htmlFor="scope-offline">
              offline_access
            </Label>
            <p className="text-muted-foreground text-xs">Issue a refresh token for background sync.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
