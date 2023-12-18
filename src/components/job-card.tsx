import { Job } from "@/types"

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
    <Card className="flex flex-col justify-between">
      <div>
        <CardHeader className="space-y-1">
          <a
            href={job.url}
            target="_blank"
            className="text-xl font-bold hover:underline"
          >
            {job.title}
          </a>
          <CardDescription>{job.company}</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-md">{job.location}</CardDescription>
          <CardDescription className="text-md">{job.salary}</CardDescription>
          <CardDescription className="text-md">
            {job.description}
          </CardDescription>
        </CardContent>
      </div>
      <CardFooter>
        <CardDescription>{job.date}</CardDescription>
      </CardFooter>
    </Card>
  )
}
