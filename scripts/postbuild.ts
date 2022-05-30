import fs from 'fs-extra'
import cheerio from 'cheerio'
import { works } from '../src/works'

const DOMAIN = 'https://vue-components-snowy.vercel.app/'

export async function postBuild() {

  const indexHTML = await fs.readFile('dist/index.html', 'utf-8')

  for (const work of works) {
    const $ = cheerio.load(indexHTML)

    const head = $('head')
    const title = `${work.no}. ${work.name}`
    $('title').text(title)

    head.append($(`<meta property="og:title" content="${title}" />`))

    if (fs.existsSync(`public/shots/${work.no}.png`)) {
      head.append($(`<meta property="og:image" content="${DOMAIN}/shots/${work.no}.png" />`))
      head.append($('<meta name="twitter:card" content="summary_large_image" />'))
    }

    await fs.writeFile(`dist/${work.no}.html`, $.html(), 'utf-8')
  }

  const $ = cheerio.load(indexHTML)
  const head = $('head')
  const title = $('title').text()

  head.append($(`<meta property="og:title" content="${title}" />`))
  head.append($(`<meta property="og:image" content="${DOMAIN}/screenshots/index.png" />`))

  await fs.writeFile('dist/index.html', $.html(), 'utf-8')
}

postBuild()