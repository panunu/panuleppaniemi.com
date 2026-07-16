import React, { FC } from 'react'
import styles from './design.module.scss'

// A letter that can stand up: the capital is a second glyph stacked over the
// lowercase, so the two can cross-fade. text-transform alone cannot be
// animated — CSS would snap from one glyph to the other.
const Letter: FC<{ children: string }> = ({ children }) => {
  // Already a capital — nothing to rise to, so no twin and no hover.
  if (children === children.toLocaleUpperCase()) {
    return <span className={styles.letter}>{children}</span>
  }

  return (
    <span className={styles.letter}>
      <span className={styles.lower}>{children}</span>
      {/* Capitalised in CSS, and never selectable: it is the same letter twice
          in the DOM, and copying the name should not yield "PPaannuu". */}
      <span className={styles.upper}>{children}</span>
    </span>
  )
}

// The name, split to the letter so each one can answer to the cursor on its
// own. Newlines in the text are the line breaks.
const Name: FC<{ children: string }> = ({ children }) => {
  const lines = children.split('\n').map((line) => line.trim())

  return (
    <header className={styles.name}>
      {/* The letters are decoration; the heading is still read as a name. */}
      <h1 aria-label={lines.join(' ')}>
        {lines.map((line, index) => (
          <span key={index} className={styles.nameLine} aria-hidden>
            {/* NFC first: an 'ä' composed of two code points would otherwise
                split into an 'a' and a stray diaeresis. */}
            {Array.from(line.normalize('NFC')).map((letter, position) => (
              <Letter key={position}>{letter}</Letter>
            ))}
          </span>
        ))}
      </h1>
    </header>
  )
}

export default Name
