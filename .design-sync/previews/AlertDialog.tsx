import IconAlertTriangle from '@tabler/icons-react/dist/esm/icons/IconAlertTriangle.mjs'
import IconLogout from '@tabler/icons-react/dist/esm/icons/IconLogout.mjs'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from '@qauth/ui'

export function RevokeAccess() {
  return (
    <AlertDialog open>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Revoke access</Button>
      </AlertDialogTrigger>
      <AlertDialogContent onOpenAutoFocus={(event) => event.preventDefault()}>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <IconAlertTriangle />
          </AlertDialogMedia>
          <AlertDialogTitle>Revoke this application's access?</AlertDialogTitle>
          <AlertDialogDescription>
            Analytics Dashboard will lose its refresh tokens immediately. Anyone using it will be signed out and
            asked to authorize again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep access</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Revoke access</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function SignOutEverywhere() {
  return (
    <AlertDialog open>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Sign out everywhere</Button>
      </AlertDialogTrigger>
      <AlertDialogContent onOpenAutoFocus={(event) => event.preventDefault()} size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <IconLogout />
          </AlertDialogMedia>
          <AlertDialogTitle>Sign out of all devices?</AlertDialogTitle>
          <AlertDialogDescription>
            Every active session across your devices ends now. You will need to sign in again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Sign out</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
