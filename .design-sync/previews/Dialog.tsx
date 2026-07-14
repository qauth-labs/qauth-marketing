import IconKey from '@tabler/icons-react/dist/esm/icons/IconKey.mjs'
import IconPlus from '@tabler/icons-react/dist/esm/icons/IconPlus.mjs'
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from '@qauth/ui'

export function CreateApiKey() {
  return (
    <Dialog open>
      <DialogTrigger asChild>
        <Button>
          <IconPlus />
          Create API key
        </Button>
      </DialogTrigger>
      <DialogContent onOpenAutoFocus={(event) => event.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Create a new API key</DialogTitle>
          <DialogDescription>
            Keys authenticate your backend against the QAuth token endpoint. The secret is shown once and never
            stored in plaintext.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field orientation="vertical">
            <FieldLabel htmlFor="dialog-key-name">Key name</FieldLabel>
            <Input defaultValue="Checkout service" id="dialog-key-name" />
            <FieldDescription>Name the service that will hold this key.</FieldDescription>
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button>
            <IconKey />
            Create key
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function KeyCreated() {
  return (
    <Dialog open>
      <DialogTrigger asChild>
        <Button variant="outline">View secret</Button>
      </DialogTrigger>
      <DialogContent onOpenAutoFocus={(event) => event.preventDefault()} showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Copy your client secret</DialogTitle>
          <DialogDescription>
            This is the only time the secret is visible. Store it in your secret manager before closing.{' '}
            <a href="https://qauth.dev/docs/clients">Read the client guide</a>
          </DialogDescription>
        </DialogHeader>
        <div className="bg-muted p-2 font-mono text-foreground text-xs">
          qa_sk_7f3c9d21b48e5a06c1fd93be27a4e08d
        </div>
        <DialogFooter showCloseButton>
          <Button>Copy secret</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
