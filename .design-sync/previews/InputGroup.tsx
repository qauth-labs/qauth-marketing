import IconCircleCheck from '@tabler/icons-react/dist/esm/icons/IconCircleCheck.mjs'
import IconCopy from '@tabler/icons-react/dist/esm/icons/IconCopy.mjs'
import IconKey from '@tabler/icons-react/dist/esm/icons/IconKey.mjs'
import IconSearch from '@tabler/icons-react/dist/esm/icons/IconSearch.mjs'
import IconSend from '@tabler/icons-react/dist/esm/icons/IconSend.mjs'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  Kbd,
  KbdGroup,
  Label,
} from '@qauth/ui'

export function Search() {
  return (
    <div className="flex w-96 flex-col gap-2">
      <Label htmlFor="preview-docs-search">Search documentation</Label>
      <InputGroup>
        <InputGroupAddon>
          <IconSearch />
        </InputGroupAddon>
        <InputGroupInput id="preview-docs-search" placeholder="Search guides, endpoints, SDKs…" />
        <InputGroupAddon align="inline-end">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export function WithButton() {
  return (
    <div className="flex w-96 flex-col gap-2">
      <Label htmlFor="preview-api-key">Secret key</Label>
      <InputGroup>
        <InputGroupAddon>
          <IconKey />
        </InputGroupAddon>
        <InputGroupInput id="preview-api-key" readOnly value="qa_live_sk_9f4c21ae7b3d48e0" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton aria-label="Copy secret key" size="icon-xs">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export function WithTextAddons() {
  return (
    <div className="flex w-96 flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="preview-redirect-uri">Redirect URI</Label>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput defaultValue="app.acme.com/auth/callback" id="preview-redirect-uri" />
          <InputGroupAddon align="inline-end">
            <InputGroupText className="text-primary">
              <IconCircleCheck />
              Verified
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="preview-redirect-uri-invalid">Redirect URI</Label>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput
            aria-invalid="true"
            defaultValue="localhost:3000/callback"
            id="preview-redirect-uri-invalid"
          />
        </InputGroup>
        <p className="text-destructive text-xs">Loopback redirects must use an explicit 127.0.0.1 host.</p>
      </div>
    </div>
  )
}

export function TextareaWithBlockAddons() {
  return (
    <InputGroup className="w-96">
      <InputGroupAddon align="block-start" className="border-b">
        <InputGroupText className="font-medium text-foreground">Describe your integration</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea
        placeholder="Which grant types and upstream providers do you need?"
        rows={4}
      />
      <InputGroupAddon align="block-end" className="border-t">
        <InputGroupText>Markdown supported</InputGroupText>
        <InputGroupButton className="ml-auto" size="xs" variant="default">
          <IconSend />
          Send
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
