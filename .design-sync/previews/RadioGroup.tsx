import IconCloud from '@tabler/icons-react/dist/esm/icons/IconCloud.mjs'
import IconServer from '@tabler/icons-react/dist/esm/icons/IconServer.mjs'
import IconTopologyStar3 from '@tabler/icons-react/dist/esm/icons/IconTopologyStar3.mjs'
import { Label, RadioGroup, RadioGroupItem } from '@qauth/ui'

export function Default() {
  return (
    <div className="grid w-72 gap-3">
      <p className="font-medium text-sm">Token signing algorithm</p>
      <RadioGroup defaultValue="ml-dsa-65">
        <div className="flex items-center gap-3">
          <RadioGroupItem id="alg-ml-dsa" value="ml-dsa-65" />
          <Label className="font-mono" htmlFor="alg-ml-dsa">
            ML-DSA-65
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem id="alg-eddsa" value="eddsa" />
          <Label className="font-mono" htmlFor="alg-eddsa">
            EdDSA
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem id="alg-rs256" value="rs256" />
          <Label className="font-mono" htmlFor="alg-rs256">
            RS256
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}

export function WithDescriptions() {
  return (
    <RadioGroup className="max-w-sm" defaultValue="cloud">
      <div className="flex items-start gap-3 border border-border p-4">
        <RadioGroupItem className="mt-0.5" id="deploy-cloud" value="cloud" />
        <div className="grid gap-1">
          <Label htmlFor="deploy-cloud">
            <IconCloud className="size-4 text-muted-foreground" />
            QAuth Cloud
          </Label>
          <p className="text-muted-foreground text-xs">Managed and multi-region, with a 99.99% uptime SLA.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 border border-border p-4">
        <RadioGroupItem className="mt-0.5" id="deploy-self" value="self-hosted" />
        <div className="grid gap-1">
          <Label htmlFor="deploy-self">
            <IconServer className="size-4 text-muted-foreground" />
            Self-hosted
          </Label>
          <p className="text-muted-foreground text-xs">Run the container in your own VPC. Bring your own Postgres.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 border border-border p-4">
        <RadioGroupItem className="mt-0.5" id="deploy-hybrid" value="hybrid" />
        <div className="grid gap-1">
          <Label htmlFor="deploy-hybrid">
            <IconTopologyStar3 className="size-4 text-muted-foreground" />
            Hybrid
          </Label>
          <p className="text-muted-foreground text-xs">Managed control plane, tokens signed inside your network.</p>
        </div>
      </div>
    </RadioGroup>
  )
}

export function States() {
  return (
    <div className="grid w-72 gap-5">
      <div className="grid gap-3">
        <p className="text-destructive text-sm">Select a token endpoint auth method</p>
        <RadioGroup aria-invalid="true">
          <div className="flex items-center gap-3">
            <RadioGroupItem aria-invalid="true" id="auth-basic" value="client-secret-basic" />
            <Label className="font-mono" htmlFor="auth-basic">
              client_secret_basic
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem aria-invalid="true" id="auth-jwt" value="private-key-jwt" />
            <Label className="font-mono" htmlFor="auth-jwt">
              private_key_jwt
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="grid gap-3">
        <p className="font-medium text-sm">Session storage</p>
        <RadioGroup defaultValue="postgres">
          <div className="flex items-center gap-3">
            <RadioGroupItem id="store-postgres" value="postgres" />
            <Label htmlFor="store-postgres">Postgres (default)</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem disabled id="store-redis" value="redis" />
            <Label htmlFor="store-redis">Redis (Pro plan only)</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
