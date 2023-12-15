import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface JobCardProps {
  job: {
    info: {
      title: string
      company: string
      address: string
      description: string
    }
    date: string
    applicants: number
  }
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-3 md:space-y-0">
        <div className="md:flex md:justify-between">
          <h1 className="text-xl font-bold">{job.info.title}</h1>
          <small className="text-sm text-muted-foreground">
            {job.date} · {job.applicants} applicant(s)
          </small>
        </div>
        <small className="text-sm text-muted-foreground">
          {job.info.company} · {job.info.address}
        </small>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{job.info.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Learn more</Button>
      </CardFooter>
    </Card>
  )
}
