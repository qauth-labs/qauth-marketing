import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldSet, Label, Switch } from '@qauth/ui'

export function Default() {
  return (
    <FieldSet className="w-96">
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="preview-pkce">Require PKCE</FieldLabel>
            <FieldDescription>Enforce S256 code challenges on every authorization request.</FieldDescription>
          </FieldContent>
          <Switch defaultChecked id="preview-pkce" />
        </Field>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="preview-rotation">Rotate refresh tokens</FieldLabel>
            <FieldDescription>Issue a new refresh token on each exchange and revoke the old one.</FieldDescription>
          </FieldContent>
          <Switch id="preview-rotation" />
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

export function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch defaultChecked id="preview-size-sm-on" size="sm" />
        <Switch id="preview-size-sm-off" size="sm" />
        <Label htmlFor="preview-size-sm-on">Small — on / off</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked id="preview-size-default-on" size="default" />
        <Switch id="preview-size-default-off" size="default" />
        <Label htmlFor="preview-size-default-on">Default — on / off</Label>
      </div>
    </div>
  )
}

export function States() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch defaultChecked id="preview-state-mfa" />
        <Label htmlFor="preview-state-mfa">Enforce multi-factor authentication</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="preview-state-device" />
        <Label htmlFor="preview-state-device">Enable device authorization grant</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked disabled id="preview-state-audit" />
        <Label htmlFor="preview-state-audit">Audit logging (locked by policy)</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch disabled id="preview-state-implicit" />
        <Label htmlFor="preview-state-implicit">Implicit flow (removed in OAuth 2.1)</Label>
      </div>
    </div>
  )
}
