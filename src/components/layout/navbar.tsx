import { siteConfig } from "@/config/site"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b px-8">
      <h1 className="text-3xl font-bold">{siteConfig.name}</h1>
      <ModeToggle />
    </header>
  )
}
