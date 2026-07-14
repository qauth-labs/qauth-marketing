import IconBook from '@tabler/icons-react/dist/esm/icons/IconBook.mjs'
import IconChevronRight from '@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs'
import IconMenu2 from '@tabler/icons-react/dist/esm/icons/IconMenu2.mjs'
import IconRocket from '@tabler/icons-react/dist/esm/icons/IconRocket.mjs'
import IconShieldLock from '@tabler/icons-react/dist/esm/icons/IconShieldLock.mjs'
import IconTag from '@tabler/icons-react/dist/esm/icons/IconTag.mjs'
import {
  Badge,
  Button,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@qauth/ui'

const NAV_LINKS = [
  { href: '/docs', icon: IconBook, label: 'Documentation' },
  { href: '/security', icon: IconShieldLock, label: 'Post-quantum security' },
  { href: '/pricing', icon: IconTag, label: 'Pricing' },
  { href: '/changelog', icon: IconRocket, label: 'Changelog' },
]

export function MobileNav() {
  return (
    <Sheet open>
      <SheetTrigger asChild>
        <Button aria-label="Open menu" size="icon" variant="ghost">
          <IconMenu2 />
        </Button>
      </SheetTrigger>
      <SheetContent onOpenAutoFocus={(event) => event.preventDefault()} side="left">
        <SheetHeader>
          <SheetTitle>QAuth</SheetTitle>
          <SheetDescription>The post-quantum ready OAuth 2.1 server.</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-1 flex-col px-2">
          {NAV_LINKS.map(({ href, icon: Icon, label }) => (
            <a
              className="flex items-center justify-between gap-2 px-2 py-2.5 text-foreground text-xs hover:bg-muted"
              href={href}
              key={href}
            >
              <span className="flex items-center gap-2">
                <Icon className="text-muted-foreground" size={16} />
                {label}
              </span>
              <IconChevronRight className="text-muted-foreground" size={14} />
            </a>
          ))}
        </nav>
        <SheetFooter>
          <Button>Start free</Button>
          <SheetClose asChild>
            <Button variant="outline">Sign in</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export function ApplicationSettings() {
  return (
    <Sheet open>
      <SheetTrigger asChild>
        <Button variant="outline">Edit application</Button>
      </SheetTrigger>
      <SheetContent onOpenAutoFocus={(event) => event.preventDefault()} side="right">
        <SheetHeader>
          <SheetTitle>Checkout service</SheetTitle>
          <SheetDescription>Confidential OAuth client · PKCE required</SheetDescription>
        </SheetHeader>
        <div className="flex-1 px-4">
          <FieldGroup>
            <Field orientation="vertical">
              <FieldLabel htmlFor="sheet-client-id">Client ID</FieldLabel>
              <Input className="font-mono" defaultValue="cli_9f2a41c7be03" id="sheet-client-id" readOnly />
            </Field>
            <Field orientation="vertical">
              <FieldLabel htmlFor="sheet-redirect">Redirect URI</FieldLabel>
              <Input defaultValue="https://app.example.com/callback" id="sheet-redirect" />
              <FieldDescription>Exact match, HTTPS only. Wildcards are rejected.</FieldDescription>
            </Field>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">authorization_code</Badge>
              <Badge variant="secondary">refresh_token</Badge>
            </div>
          </FieldGroup>
        </div>
        <SheetFooter>
          <Button>Save changes</Button>
          <SheetClose asChild>
            <Button variant="ghost">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
