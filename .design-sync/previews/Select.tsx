import IconLock from '@tabler/icons-react/dist/esm/icons/IconLock.mjs'
import IconShieldLock from '@tabler/icons-react/dist/esm/icons/IconShieldLock.mjs'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@qauth/ui'

export function Default() {
  return (
    <FieldSet className="w-80">
      <FieldGroup>
        <Field orientation="vertical">
          <FieldLabel htmlFor="preview-region">Deployment region</FieldLabel>
          <Select defaultValue="eu-central-1">
            <SelectTrigger className="w-full" id="preview-region">
              <SelectValue placeholder="Select a region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us-east-1">US East — N. Virginia</SelectItem>
              <SelectItem value="eu-central-1">EU Central — Frankfurt</SelectItem>
              <SelectItem value="ap-southeast-1">Asia Pacific — Singapore</SelectItem>
            </SelectContent>
          </Select>
          <FieldDescription>Access tokens are issued and signed from this region.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

export function Open() {
  return (
    <div className="w-80">
      <Label className="mb-2" htmlFor="preview-algorithm">
        Token signing algorithm
      </Label>
      <Select defaultOpen defaultValue="ml-dsa-65">
        <SelectTrigger className="w-full" id="preview-algorithm">
          <SelectValue placeholder="Select an algorithm" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Classical</SelectLabel>
            <SelectItem value="es256">
              <IconLock />
              ES256 — ECDSA P-256
            </SelectItem>
            <SelectItem value="eddsa">
              <IconLock />
              EdDSA — Ed25519
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Post-quantum</SelectLabel>
            <SelectItem value="ml-dsa-65">
              <IconShieldLock />
              ML-DSA-65 — Dilithium
            </SelectItem>
            <SelectItem value="slh-dsa">
              <IconShieldLock />
              SLH-DSA — SPHINCS+
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export function Sizes() {
  return (
    <div className="flex w-[28rem] items-end gap-4">
      <div className="flex flex-1 flex-col gap-2">
        <Label htmlFor="preview-role-sm">Workspace role — sm</Label>
        <Select defaultValue="developer">
          <SelectTrigger className="w-full" id="preview-role-sm" size="sm">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="owner">Owner</SelectItem>
            <SelectItem value="developer">Developer</SelectItem>
            <SelectItem value="viewer">Read-only</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <Label htmlFor="preview-role-default">Workspace role — default</Label>
        <Select defaultValue="developer">
          <SelectTrigger className="w-full" id="preview-role-default" size="default">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="owner">Owner</SelectItem>
            <SelectItem value="developer">Developer</SelectItem>
            <SelectItem value="viewer">Read-only</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export function States() {
  return (
    <div className="flex w-80 flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="preview-idp-placeholder">Upstream provider</Label>
        <Select>
          <SelectTrigger className="w-full" id="preview-idp-placeholder">
            <SelectValue placeholder="Select a provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="google">Google Workspace</SelectItem>
            <SelectItem value="entra">Microsoft Entra ID</SelectItem>
            <SelectItem value="okta">Okta</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="preview-idp-invalid">Upstream provider</Label>
        <Select>
          <SelectTrigger aria-invalid="true" className="w-full" id="preview-idp-invalid">
            <SelectValue placeholder="Select a provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="google">Google Workspace</SelectItem>
            <SelectItem value="entra">Microsoft Entra ID</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-destructive text-xs">Pick a provider before you publish this connection.</p>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="preview-plan-disabled">Plan (managed by billing)</Label>
        <Select defaultValue="enterprise" disabled>
          <SelectTrigger className="w-full" id="preview-plan-disabled">
            <SelectValue placeholder="Select a plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
            <SelectItem value="enterprise">Enterprise</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
