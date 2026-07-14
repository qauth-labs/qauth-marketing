import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@qauth/ui'

export function Faq() {
  return (
    <Accordion className="max-w-2xl" collapsible defaultValue="post-quantum" type="single">
      <AccordionItem value="post-quantum">
        <AccordionTrigger>What does “post-quantum ready” actually mean?</AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground">
            QAuth can sign tokens with hybrid classical + post-quantum algorithms, so a recorded token stream stays
            unforgeable even once a cryptographically relevant quantum computer exists.
          </p>
          <p className="text-muted-foreground">
            You can switch signing algorithms without touching your integration — key rotation and JWKS publication
            are handled for you. See <a href="#">the algorithm guide</a> for the full list.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="keycloak">
        <AccordionTrigger>Can I migrate from Keycloak?</AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground">
            Yes. QAuth speaks standard OAuth 2.1 and OIDC discovery, so most clients only need a new issuer URL. The
            import CLI moves realms, clients, and users over in one pass.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="self-host">
        <AccordionTrigger>Do I have to use QAuth Cloud?</AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground">
            No. The server is open source and runs anywhere you can run a container and a Postgres database.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function MultipleOpen() {
  return (
    <Accordion className="max-w-2xl" defaultValue={['tokens', 'sessions']} type="multiple">
      <AccordionItem value="tokens">
        <AccordionTrigger>How long do access tokens live?</AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground">
            Access tokens default to 15 minutes. Refresh tokens rotate on every use and are revoked automatically if
            a replayed token is detected.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="sessions">
        <AccordionTrigger>Can users stay signed in across devices?</AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground">
            Yes. Each device gets its own session and refresh-token family, so revoking a laptop never signs the user
            out on their phone.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="mfa">
        <AccordionTrigger>Is multi-factor authentication included?</AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground">
            TOTP and WebAuthn passkeys ship in every plan, including the self-hosted one.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
