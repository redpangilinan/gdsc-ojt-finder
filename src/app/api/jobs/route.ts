import { Job } from "@/types"
import * as cheerio from "cheerio"
import wretch from "wretch"

export async function GET() {
  try {
    const timestamp = new Date().getTime()
    const baseUrl =
      "https://www.jobstreet.com.ph/internship-jobs-in-information-communication-technology?sortmode=ListedDate"
    const timestampUrl = `${baseUrl}&timestamp=${timestamp}`
    const response = await wretch(timestampUrl, { cache: "no-store" })
      .get()
      .text()
    const $ = cheerio.load(response)
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

    return new Response(JSON.stringify(jobs))
  } catch (error) {
    console.error(error)
    return new Response(null, { status: 500 })
  }
}
