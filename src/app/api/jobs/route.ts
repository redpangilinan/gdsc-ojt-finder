import { NextRequest } from "next/server"
import { Job } from "@/types"
import * as cheerio from "cheerio"
import wretch from "wretch"

export async function GET(request: NextRequest) {
  async function fetchHtml(url: string) {
    const time = new Date().getTime()
    const newUrl = `${url}&t=${time}`
    const html = await wretch(newUrl).get().text()
    return cheerio.load(html)
  }

  function getSortMode() {
    const sort = request.nextUrl.searchParams.get("sort")

    if (sort === "KeywordRelevance") {
      return sort
    }

    return "ListedDate"
  }

  async function getJobs() {
    const baseUrl = `https://www.jobstreet.com.ph/internship-jobs-in-information-communication-technology?sortmode=${getSortMode()}`
    const $ = await fetchHtml(baseUrl)
    const jobs: Job[] = []

    $("article").each((index, element) => {
      const id = $(element).attr("data-job-id")
      const title = $(element).find("h3 a").text().trim()
      const company = $(element)
        .find("a[data-automation='jobCompany']")
        .text()
        .trim()
      const location = $(element)
        .find("a[data-automation='jobLocation']")
        .map((index, element) => $(element).text().trim())
        .get()
        .join(", ")
      const salary = $(element)
        .find("[data-automation='jobSalary']")
        .text()
        .trim()
      const description = $(element)
        .find("[data-automation='jobSubClassification']")
        .text()
        .trim()
      const date = $(element)
        .find("[data-automation='jobListingDate']")
        .text()
        .trim()
      const url = `${baseUrl}&jobId=${id}&type=standard`

      const job: Job = {
        title,
        company,
        location,
        salary,
        description,
        date,
        url,
      }

      jobs.push(job)
    })

    return jobs
  }

  try {
    const response = await getJobs()

    const headers = {
      "Content-Type": "application/json",
    }

    return new Response(JSON.stringify(response), { headers })
  } catch (error) {
    console.error(error)
    return new Response(null, { status: 500 })
  }
}
