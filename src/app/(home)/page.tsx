import { Job } from "@/types"

import { getJobs } from "@/lib/api/jobs"
import { JobCard } from "@/components/job-card"
import { Navbar } from "@/components/layout/navbar"

export default async function Home() {
  const data = (await getJobs()) as Job[]

  return (
    <>
      <Navbar />
      <section className="container grid items-start gap-12 p-8 md:grid-cols-[1fr,400px]">
        <div className="grid gap-4">
          {data.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
        <aside className="border-l border-gray-200 p-6">
          <h2 className="text-xl font-bold">Discover internships</h2>
          <p className="text-muted-foreground">
            Discover and explore internship opportunities seamlessly.
          </p>
        </aside>
      </section>
    </>
  )
}
