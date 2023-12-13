import { env } from "@/env.mjs"
import { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "GDSC OJT Finder",
  author: "GDSC-UECal",
  description: "Discover and explore internship opportunities seamlessly",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: env.NEXT_PUBLIC_GDSC_URL,
  },
  links: {
    github: "https://github.com/redpangilinan/gdsc-ojt-finder",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
