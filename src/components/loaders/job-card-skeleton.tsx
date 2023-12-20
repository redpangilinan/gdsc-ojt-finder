import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function JobCardSkeleton() {
  return (
    <Card>
      <div>
        <CardHeader className="space-y-2">
          <Skeleton className="h-[1.5rem] w-[18rem]" />
          <Skeleton className="h-[1rem] w-[12rem]" />
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-[1rem] w-full" />
          <Skeleton className="h-[1rem] w-full" />
        </CardContent>
      </div>
      <CardFooter>
        <Skeleton className="h-[1rem] w-[6rem]" />
      </CardFooter>
    </Card>
  )
}
