import React, { FC } from 'react'
import styles from './design.module.scss'

// The whole cloud in one go: a comma-separated list of terms. Commas only
// separate — they are never rendered, so the terms run together as a texture.
// Which term ends up bold, italic or gray is left to nth-child cycles in CSS.
const Term: FC<{ children: string }> = ({ children }) => (
  <p className={styles.term}>
    {children
      .split(',')
      // A term may be wrapped across lines in the source; it is still one term.
      .map((term) => term.trim().replace(/\s+/g, ' '))
      .filter(Boolean)
      .map((term, index) => (
        <span key={index}>{term}</span>
      ))}
  </p>
)

export default Term
