import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { JobCardSkeleton } from "@/components/loaders/job-card-skeleton"

export default async function Home() {
  return (
    <>
      <Navbar />
      <section className="container grid items-start gap-12 p-8 md:grid-cols-[1fr,20rem]">
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button variant={"outline"}>Sort by</Button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[...Array(8)].map((_, index) => (
              <JobCardSkeleton key={index} />
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
