## Using `@qauth/ui`

This is QAuth's shadcn/ui-based component library (Radix primitives + `class-variance-authority` variants, Tailwind v4 utility classes) — the design system for QAuth, a post-quantum-ready OAuth 2.1/OIDC authorization server (a Keycloak alternative) and its marketing site. Build with the real exported components; don't hand-roll lookalikes.

**Setup.** No root provider wrapper is required for most components — tokens and utility classes are self-contained in the shipped CSS. The one exception: `Tooltip` needs a `TooltipProvider` ancestor (Radix requirement) — wrap it explicitly: `<TooltipProvider><Tooltip>…</Tooltip></TooltipProvider>`.

**Styling idiom — real Tailwind utility classes over semantic color tokens, not raw hex/oklch:**

| Purpose | Classes |
|---|---|
| Primary action | `bg-primary text-primary-foreground` |
| Secondary/neutral surface | `bg-secondary text-secondary-foreground`, `bg-muted text-muted-foreground` |
| Destructive (buttons, alerts, badges) | `bg-destructive/10 text-destructive` — this DS never uses a solid destructive fill, always the soft tint |
| Borders / inputs | `border-border`, `border-input`, `bg-background` |
| Card surface | `bg-card text-card-foreground` |

**Radii are sharp by default** — most primitives (`Button`, `Input`, `Card`, `Alert`, `Badge`) use `rounded-none`. Rounded corners (`rounded-lg`, `rounded-full`) show up only on decorative/accent elements (icon chips, avatars) — don't round structural components; that's off-brand for this DS.

**Typography** — three families, each with a job. Body/UI text: `font-sans` (DM Sans Variable). Headings (`h1`/`h2`/`h3`, and anything semantically a heading like `AccordionTrigger`'s wrapper): `font-display` (Instrument Serif) — this is intentional, not a bug, even where it looks unexpected (e.g. FAQ accordion questions render serif). Code/IDs/secrets: `font-mono` (JetBrains Mono Variable).

**Compound components compose as a set** — e.g. `Dialog` + `DialogContent` + `DialogHeader` + `DialogTitle` + `DialogDescription` + `DialogFooter`; `Select` + `SelectTrigger` + `SelectContent` + `SelectItem` + `SelectValue`; `Card` + `CardHeader` + `CardTitle` + `CardDescription` + `CardAction` + `CardContent` + `CardFooter`. Each sub-part is its own export — don't nest raw `<div>`s where a named sub-part exists. `Alert`'s icon must be a **direct child** of `<Alert>` (siblings with `AlertTitle`/`AlertDescription`) to get the icon-grid layout — not wrapped in a div.

**Where the truth lives:** `styles.css` (imports the full token/utility closure) and each component's own `.prompt.md` for usage notes and prop contracts. Read those before styling — don't guess at a class that isn't in the enumerated vocabulary above.

**Idiomatic build snippet** (a labeled field + submit, the DS's own canonical form pattern):

```tsx
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet, Input, Button } from '@qauth/ui'

<FieldSet>
  <FieldGroup>
    <Field orientation="vertical">
      <FieldLabel htmlFor="email">Email address</FieldLabel>
      <Input id="email" type="email" placeholder="you@example.com" />
      <FieldDescription>No spam. Unsubscribe anytime.</FieldDescription>
    </Field>
  </FieldGroup>
  <Button type="submit">Continue</Button>
</FieldSet>
```
