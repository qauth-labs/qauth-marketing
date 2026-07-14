import { Card, CardContent, CardFooter, CardHeader, Skeleton } from '@qauth/ui'

export function ApplicationCard() {
  return (
    <Card className="w-80">
      <CardHeader>
        <Skeleton className="size-10" />
        <Skeleton className="mt-3 h-4 w-40" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
      </CardHeader>
      <CardContent className="grid gap-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </CardContent>
      <CardFooter className="gap-2">
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="h-8 w-20" />
      </CardFooter>
    </Card>
  )
}

export function ClientListRows() {
  return (
    <div className="w-80 divide-y border">
      <div className="flex items-center gap-3 px-3 py-3">
        <Skeleton className="size-8 shrink-0" />
        <div className="grid flex-1 gap-1.5">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-2.5 w-20" />
        </div>
        <Skeleton className="h-5 w-14 shrink-0" />
      </div>
      <div className="flex items-center gap-3 px-3 py-3">
        <Skeleton className="size-8 shrink-0" />
        <div className="grid flex-1 gap-1.5">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-2.5 w-28" />
        </div>
        <Skeleton className="h-5 w-14 shrink-0" />
      </div>
      <div className="flex items-center gap-3 px-3 py-3">
        <Skeleton className="size-8 shrink-0" />
        <div className="grid flex-1 gap-1.5">
          <Skeleton className="h-3 w-36" />
          <Skeleton className="h-2.5 w-16" />
        </div>
        <Skeleton className="h-5 w-14 shrink-0" />
      </div>
    </div>
  )
}

export function MetricTiles() {
  return (
    <div className="grid w-96 grid-cols-3 gap-3">
      <div className="border p-3">
        <Skeleton className="h-2.5 w-16" />
        <Skeleton className="mt-3 h-6 w-12" />
        <Skeleton className="mt-2 h-2.5 w-14" />
      </div>
      <div className="border p-3">
        <Skeleton className="h-2.5 w-20" />
        <Skeleton className="mt-3 h-6 w-16" />
        <Skeleton className="mt-2 h-2.5 w-10" />
      </div>
      <div className="border p-3">
        <Skeleton className="h-2.5 w-14" />
        <Skeleton className="mt-3 h-6 w-10" />
        <Skeleton className="mt-2 h-2.5 w-16" />
      </div>
    </div>
  )
}
