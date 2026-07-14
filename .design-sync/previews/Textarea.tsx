import { Label, Textarea } from '@qauth/ui'

export function Default() {
  return (
    <div className="grid max-w-sm gap-2">
      <Label htmlFor="textarea-usecase">What are you building?</Label>
      <Textarea
        id="textarea-usecase"
        placeholder="Tell us about your current auth stack and what you would like QAuth to replace."
      />
      <p className="text-muted-foreground text-xs">A few sentences is plenty. We read every request.</p>
    </div>
  )
}

export function WithValue() {
  return (
    <div className="grid max-w-sm gap-2">
      <Label htmlFor="textarea-migration">Migration notes</Label>
      <Textarea
        defaultValue={
          'We run Keycloak 24 behind an ALB for roughly 40k monthly active users.\n\nWe need OAuth 2.1 with mandatory PKCE, refresh token rotation, and a migration path for existing sessions.'
        }
        id="textarea-migration"
      />
      <p className="text-muted-foreground text-xs">The field grows with its content.</p>
    </div>
  )
}

export function States() {
  return (
    <div className="grid max-w-sm gap-5">
      <div className="grid gap-2">
        <Label className="text-destructive" htmlFor="textarea-invalid">
          Consent screen description
        </Label>
        <Textarea
          aria-invalid="true"
          defaultValue="Acme Checkout would like to charge cards on your behalf, read your payout history, and manage your team members and their permissions."
          id="textarea-invalid"
        />
        <p className="text-destructive text-xs">Keep this under 140 characters. Currently 152.</p>
      </div>
      <div className="group grid gap-2" data-disabled="true">
        <Label htmlFor="textarea-disabled">Audit log retention policy</Label>
        <Textarea
          defaultValue="Retained for 90 days on the Pro plan."
          disabled
          id="textarea-disabled"
        />
      </div>
    </div>
  )
}
