import {
  Badge,
  Checkbox,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@qauth/ui'

export function Default() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Application</TableHead>
          <TableHead>Client ID</TableHead>
          <TableHead>Grant type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last used</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Acme Dashboard</TableCell>
          <TableCell className="font-mono text-muted-foreground">acme_dash_9f2c</TableCell>
          <TableCell>Authorization code + PKCE</TableCell>
          <TableCell>
            <Badge variant="secondary">Active</Badge>
          </TableCell>
          <TableCell className="text-muted-foreground">2 minutes ago</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Billing Worker</TableCell>
          <TableCell className="font-mono text-muted-foreground">billing_svc_41ab</TableCell>
          <TableCell>Client credentials</TableCell>
          <TableCell>
            <Badge variant="secondary">Active</Badge>
          </TableCell>
          <TableCell className="text-muted-foreground">1 hour ago</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Mobile App (iOS)</TableCell>
          <TableCell className="font-mono text-muted-foreground">mobile_ios_7d10</TableCell>
          <TableCell>Authorization code + PKCE</TableCell>
          <TableCell>
            <Badge variant="secondary">Active</Badge>
          </TableCell>
          <TableCell className="text-muted-foreground">Yesterday</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Legacy Importer</TableCell>
          <TableCell className="font-mono text-muted-foreground">legacy_imp_02ee</TableCell>
          <TableCell>Client credentials</TableCell>
          <TableCell>
            <Badge variant="destructive">Revoked</Badge>
          </TableCell>
          <TableCell className="text-muted-foreground">14 Mar 2024</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export function WithFooter() {
  return (
    <Table>
      <TableCaption>Request volume across active API keys, last 30 days.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>API key</TableHead>
          <TableHead>Prefix</TableHead>
          <TableHead>Environment</TableHead>
          <TableHead>Requests</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Production server</TableCell>
          <TableCell className="font-mono text-muted-foreground">qa_live_8f3b…</TableCell>
          <TableCell>
            <Badge>Production</Badge>
          </TableCell>
          <TableCell className="tabular-nums">1,204,882</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Staging server</TableCell>
          <TableCell className="font-mono text-muted-foreground">qa_test_5c1d…</TableCell>
          <TableCell>
            <Badge variant="secondary">Staging</Badge>
          </TableCell>
          <TableCell className="tabular-nums">68,410</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">CI pipeline</TableCell>
          <TableCell className="font-mono text-muted-foreground">qa_test_9a77…</TableCell>
          <TableCell>
            <Badge variant="secondary">Staging</Badge>
          </TableCell>
          <TableCell className="tabular-nums">11,638</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total requests</TableCell>
          <TableCell className="tabular-nums">1,284,930</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export function Selectable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox aria-label="Select all scopes" />
          </TableHead>
          <TableHead>Scope</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-state="selected">
          <TableCell>
            <Checkbox defaultChecked aria-label="Select openid scope" />
          </TableCell>
          <TableCell className="font-mono">openid</TableCell>
          <TableCell className="text-muted-foreground">Required to receive an OpenID Connect ID token</TableCell>
        </TableRow>
        <TableRow data-state="selected">
          <TableCell>
            <Checkbox defaultChecked aria-label="Select profile scope" />
          </TableCell>
          <TableCell className="font-mono">profile</TableCell>
          <TableCell className="text-muted-foreground">Name, picture, and locale claims</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox aria-label="Select email scope" />
          </TableCell>
          <TableCell className="font-mono">email</TableCell>
          <TableCell className="text-muted-foreground">Email address and its verification status</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox aria-label="Select offline_access scope" />
          </TableCell>
          <TableCell className="font-mono">offline_access</TableCell>
          <TableCell className="text-muted-foreground">Issue a refresh token for long-lived sessions</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
