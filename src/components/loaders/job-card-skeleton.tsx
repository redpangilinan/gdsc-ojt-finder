import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function JobCardSkeleton() {
  return (
    <Card>
      <div>
        <CardHeader className="space-y-1">
          <Skeleton className="h-[1.5rem] w-[18rem]" />
          <CardDescription>
            <Skeleton className="h-[1rem] w-[12rem]" />
          </CardDescription>
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
