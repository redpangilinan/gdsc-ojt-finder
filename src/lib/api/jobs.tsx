import wretch from "wretch"

import { env } from "@/env.mjs"

const apiUrl = env.NEXT_PUBLIC_APP_URL

const api = wretch(apiUrl, {
  cache: "no-store",
})
  .errorType("json")
  .resolve((r) => r.json())

export const getJobs = async () => {
  return await api.get("/api/jobs")
}
