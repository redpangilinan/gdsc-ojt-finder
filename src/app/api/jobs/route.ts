import { Job } from "@/types"
import * as cheerio from "cheerio"
import * as puppeteer from "puppeteer"

export async function GET() {
  try {
    const url =
      "https://www.jobstreet.com.ph/internship-jobs-in-information-communication-technology?sortmode=ListedDate"
    const browser = await puppeteer.launch({ headless: "new" })
    const page = await browser.newPage()
    await page.setViewport({ width: 375, height: 667 })
    await page.goto(url)
    await page.waitForSelector("[data-automation='jobShortDescription']")

    const html = await page.content()
    const $ = cheerio.load(html)
    const jobs: Job[] = []

    $("article").each((index, element) => {
      const title = $(element).find("h3 a").text().trim()
      const company = $(element)
        .find("a[data-automation='jobCompany']")
        .text()
        .trim()
      const location = $(element)
        .find("a[data-automation='jobLocation']")
        .text()
        .trim()
      const description = $(element)
        .find("[data-automation='jobShortDescription']")
        .text()
        .trim()
      const date = $(element)
        .find("[data-automation='jobListingDate']")
        .text()
        .trim()

      const job: Job = {
        title,
        company,
        location,
        description,
        date,
      }

      jobs.push(job)
    })

    await browser.close()

    return new Response(JSON.stringify(jobs))
  } catch (error) {
    console.error(error)
    return new Response(null, { status: 500 })
  }
}
