/**
 * GitHub Pages has no SPA fallback: only real files get 200. Copy the built
 * index.html into each client route as .../index.html so crawlers and direct
 * links work (GitHub 301s /path → /path/ then serves the nested index).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.resolve(__dirname, '..', 'dist')
const indexPath = path.join(dist, 'index.html')

if (!fs.existsSync(indexPath)) {
  console.error('spa-github-pages: dist/index.html not found. Run vite build first.')
  process.exit(1)
}

const html = fs.readFileSync(indexPath, 'utf8')

/** Paths under dist/ (no leading slash), matching vue-router */
const staticRoutes = [
  'about',
  'projects/tiktok-work',
  'projects/adaptive-mouse',
  'projects/nautical-phrases',
  'projects/research-lab',
  'projects/booz-allen',
  'projects/eco-maps',
  'projects/gym-mate',
  'projects/jokes',
  'projects/audio',
  'projects/smart-aquarium',
  'projects/lateral-leap',
  'projects/humidity-sensor',
  'projects/drive-free',
  'projects/leap-hand',
]

for (const route of staticRoutes) {
  const dir = path.join(dist, ...route.split('/'))
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
}

fs.writeFileSync(path.join(dist, '404.html'), html)

console.log(
  `spa-github-pages: wrote ${staticRoutes.length} route shells + 404.html into dist/`,
)
