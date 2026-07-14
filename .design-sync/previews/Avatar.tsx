import IconCheck from '@tabler/icons-react/dist/esm/icons/IconCheck.mjs'
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from '@qauth/ui'

export function Default() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage alt="Elif Kaya" src="/team/elif-kaya.jpg" />
        <AvatarFallback>EK</AvatarFallback>
      </Avatar>
      <div className="flex flex-col leading-snug">
        <span className="font-medium text-sm">Elif Kaya</span>
        <span className="text-muted-foreground text-xs">Cryptography Lead</span>
      </div>
    </div>
  )
}

export function Sizes() {
  return (
    <div className="flex items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <Avatar size="sm">
          <AvatarFallback>EK</AvatarFallback>
        </Avatar>
        <span className="text-muted-foreground text-xs">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar>
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
        <span className="text-muted-foreground text-xs">default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="lg">
          <AvatarFallback>TR</AvatarFallback>
        </Avatar>
        <span className="text-muted-foreground text-xs">lg</span>
      </div>
    </div>
  )
}

export function Group() {
  return (
    <div className="flex items-center gap-3">
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarFallback>EK</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>TR</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+7</AvatarGroupCount>
      </AvatarGroup>
      <span className="text-muted-foreground text-xs">10 engineers contributed to QAuth this month</span>
    </div>
  )
}

export function WithBadge() {
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarImage alt="Elif Kaya" src="/team/elif-kaya.jpg" />
          <AvatarFallback>EK</AvatarFallback>
          <AvatarBadge>
            <IconCheck />
          </AvatarBadge>
        </Avatar>
        <div className="flex flex-col leading-snug">
          <span className="font-medium text-sm">Elif Kaya</span>
          <span className="text-muted-foreground text-xs">Verified owner</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarFallback>MA</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <div className="flex flex-col leading-snug">
          <span className="font-medium text-sm">Mert Aydın</span>
          <span className="text-muted-foreground text-xs">Signed in</span>
        </div>
      </div>
    </div>
  )
}
