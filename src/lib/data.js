import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { load } from 'js-yaml'

function loadYaml(filename) {
  return load(readFileSync(join(process.cwd(), 'src', 'data', filename), 'utf8'))
}

// Always returns base URL with a trailing slash, e.g. '/nycgallery/'
export const base = (() => {
  const b = import.meta.env.BASE_URL
  return b.endsWith('/') ? b : b + '/'
})()

export const getSite = () => loadYaml('site.yaml')
export const getArtworks = () => loadYaml('artworks.yaml')
export const getArtist = () => loadYaml('artist.yaml')
export const getExhibitions = () => loadYaml('exhibitions.yaml')
