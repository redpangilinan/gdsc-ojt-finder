import { Navbar } from "@/components/layout/navbar"
import { JobCardSkeleton } from "@/components/loaders/job-card-skeleton"

export default async function Home() {
  return (
    <>
      <Navbar />
      <section className="container grid items-start gap-12 p-8 md:grid-cols-[1fr,400px]">
        <div className="grid gap-4">
          {[...Array(6)].map((_, index) => (
            <JobCardSkeleton key={index} />
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
