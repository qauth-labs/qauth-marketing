import IconBuildingSkyscraper from '@tabler/icons-react/dist/esm/icons/IconBuildingSkyscraper.mjs'
import IconChevronDown from '@tabler/icons-react/dist/esm/icons/IconChevronDown.mjs'
import IconCloud from '@tabler/icons-react/dist/esm/icons/IconCloud.mjs'
import IconCreditCard from '@tabler/icons-react/dist/esm/icons/IconCreditCard.mjs'
import IconKey from '@tabler/icons-react/dist/esm/icons/IconKey.mjs'
import IconLogout from '@tabler/icons-react/dist/esm/icons/IconLogout.mjs'
import IconPlus from '@tabler/icons-react/dist/esm/icons/IconPlus.mjs'
import IconSelector from '@tabler/icons-react/dist/esm/icons/IconSelector.mjs'
import IconServer from '@tabler/icons-react/dist/esm/icons/IconServer.mjs'
import IconSettings from '@tabler/icons-react/dist/esm/icons/IconSettings.mjs'
import IconUser from '@tabler/icons-react/dist/esm/icons/IconUser.mjs'
import {
  Avatar,
  AvatarFallback,
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@qauth/ui'

export function UserMenu() {
  return (
    <DropdownMenu defaultOpen modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className="w-64 justify-between" variant="outline">
          <span className="flex items-center gap-2">
            <Avatar size="sm">
              <AvatarFallback>TA</AvatarFallback>
            </Avatar>
            taha@qauth.dev
          </span>
          <IconChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Acme Identity — Production</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconUser />
            Account
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconKey />
            Client credentials
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconCreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconSettings />
            Settings
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <IconLogout />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ViewOptions() {
  return (
    <DropdownMenu defaultOpen modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className="w-64 justify-between" variant="outline">
          View options
          <IconSelector />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Columns</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked>Client ID</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked>Grant types</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Last token issued</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="recent">
          <DropdownMenuRadioItem value="recent">Recently active</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ProjectSwitcher() {
  return (
    <DropdownMenu defaultOpen modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className="w-64 justify-between" variant="outline">
          Acme Identity
          <IconSelector />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Projects</DropdownMenuLabel>
        <DropdownMenuItem>
          <IconBuildingSkyscraper />
          Acme Identity
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconCloud />
          Northwind SSO
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub open>
          <DropdownMenuSubTrigger>
            <IconServer />
            Environment
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Production</DropdownMenuItem>
              <DropdownMenuItem>Staging</DropdownMenuItem>
              <DropdownMenuItem>Development</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconPlus />
          New project
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
