import { JobCard } from "@/components/job-card"
import { Navbar } from "@/components/layout/navbar"

const mockData = [
  {
    info: {
      title: "Senior Backend Engineer",
      company: "Acme Inc.",
      address: "New York, NY",
      description:
        "We're looking for a talented Backend Engineer to join our team. You'll be working on exciting new projects and helping us improve our product.",
    },
    date: "1 day ago",
    applicants: 12,
  },
  {
    info: {
      title: "Frontend Engineer",
      company: "Beta Corp.",
      address: "San Francisco, CA",

      description:
        "Are you a skilled Frontend Engineer? Join our team to help us build the future of web applications. Proficiency in React and TypeScript is required.",
    },
    date: "2 days ago",
    applicants: 15,
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="container grid items-start gap-12 p-8 md:grid-cols-[1fr,400px]">
        <div className="grid gap-4">
          {mockData.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
        <aside className="border-l border-gray-200 p-6">
          <h2 className="mb-6 text-xl font-bold">Discover internships</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Discover and explore internship opportunities seamlessly.
          </p>
        </aside>
      </section>
    </>
  )
}
