import { Job } from "@/types"

import { getJobs } from "@/lib/api/jobs"
import { JobCard } from "@/components/job-card"
import { Navbar } from "@/components/layout/navbar"
import { Sort } from "@/components/sort"

interface HomeProps {
  searchParams: {
    sort: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const data = (await getJobs(searchParams.sort)) as Job[]

  return (
    <>
      <Navbar />
      <section className="container grid items-start gap-12 p-8 lg:grid-cols-[1fr,20rem]">
        <div className="space-y-4">
          <div className="flex justify-end">
            <Sort params={searchParams.sort} />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {data.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>
        <aside className="space-y-4 border-l border-gray-200 p-6">
          <h2 className="text-xl font-bold">Discover internships</h2>
          <p className="text-muted-foreground">
            Discover and explore internship opportunities seamlessly.
          </p>
        </aside>
      </section>
    </>
  )
}
