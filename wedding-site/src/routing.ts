import { pages } from './config'
import type { Page } from './types'

export function currentPage(): Page {
  const hash = window.location.hash.slice(1)
  if (hash === 'thank-you') return 'thank-you'
  return pages.some(({ id }) => id === hash) ? (hash as Page) : 'home'
}
