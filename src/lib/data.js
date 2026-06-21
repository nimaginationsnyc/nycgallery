import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { load } from 'js-yaml'

function loadYaml(filename) {
  return load(readFileSync(join(process.cwd(), 'src', 'data', filename), 'utf8'))
}

export const getSite = () => loadYaml('site.yaml')
export const getArtworks = () => loadYaml('artworks.yaml')
export const getArtist = () => loadYaml('artist.yaml')
export const getExhibitions = () => loadYaml('exhibitions.yaml')
