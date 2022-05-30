import { chromium } from 'playwright'

async function run() {
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext({
    viewport: {
      width: 960,
      height: 500,
    },
    deviceScaleFactor: 2,
  })

  async function take(no: string, retry = 3, delay = 1000, take = 1, query = '', delayBetweenShot = 0, prefix = '') {
    for (let i = 0; i < retry; i++) {
      const page = await context.newPage()
      await page.goto(`http://localhost:3000/${no}?shot=true${query}`)
      await page.waitForTimeout(delay)
      for (let j = 0; j < take; j++) {
        await page.screenshot({ path: `scripts/screenshots/${prefix}${no}-${i}-${j}.png` })
        if (delayBetweenShot)
          await page.waitForTimeout(delayBetweenShot)
      }

      page.close()
    }
  }

  async function open(no: string, query = '') {
    const page = await context.newPage()
    await page.goto(`http://localhost:3000/${no}?shot=true${query}`)
    await page.waitForEvent('close')
    return page
  }

  await take('', 1)


  await browser.close()
}

run()