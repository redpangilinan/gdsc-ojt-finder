"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Sort() {
  const router = useRouter()
  const [sort, setSort] = React.useState("")

  const handleSortChange = (type: string) => {
    if (type === "Relevance") {
      router.push(`?sort=KeywordRelevance`)
    } else {
      router.push(`?sort=ListedDate`)
    }
    router.refresh()

    setSort(type)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>{sort || "Sort by"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleSortChange("Date")}>
          Date
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSortChange("Relevance")}>
          Relevance
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
