import { Job } from "@/types"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="md:flex md:justify-between">
          <h1 className="text-xl font-bold">{job.title}</h1>
          <CardDescription className="text-sm text-muted-foreground">
            {job.date}
          </CardDescription>
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          {job.company}
        </CardDescription>
        <CardDescription className="text-sm text-muted-foreground">
          {job.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{job.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Learn more</Button>
      </CardFooter>
    </Card>
  )
}
