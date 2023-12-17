import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function JobCardSkeleton() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="flex flex-col gap-1 md:flex-row md:justify-between md:gap-0">
          <Skeleton className="h-[1.5rem] w-[18rem]" />
          <CardDescription className="text-sm text-muted-foreground">
            <Skeleton className="h-[1rem] w-[6rem]" />
          </CardDescription>
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          <Skeleton className="h-[1rem] w-[12rem]" />
        </CardDescription>
        <CardDescription className="text-sm text-muted-foreground">
          <Skeleton className="h-[1rem] w-[10rem]" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-[1rem] w-full" />
        <Skeleton className="h-[1rem] w-full" />
        <Skeleton className="h-[1rem] w-[18rem]" />
      </CardContent>
    </Card>
  )
}
