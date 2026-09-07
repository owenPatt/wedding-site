import { useState } from 'react'
import { pages } from '../config'
import type { Page } from '../types'

type HeaderProps = {
  page: Page
}

export function Header({ page }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        O <span>&amp;</span> P
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
      <nav className={open ? 'nav-open' : ''} aria-label="Main navigation">
        {pages.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={page === id ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
