import React, { FC, useCallback, useContext, useEffect } from 'react'
import styles from './design.module.scss'
import { PreviewContext } from './preview'

type WorkProps = {
  title: string
  // Optional: an entry with nowhere to go is just stated, not linked.
  href?: string
  // Shown next to the cursor while hovering; clicking still opens the link.
  image?: string
  note?: string
}

const Work: FC<WorkProps> = ({ title, href, image, note }) => {
  const setPreview = useContext(PreviewContext)

  const show = useCallback(() => {
    if (image) setPreview({ src: image, alt: title })
  }, [image, title, setPreview])

  const hide = useCallback(() => {
    if (image) setPreview(null)
  }, [image, setPreview])

  // A link can unmount (or the pointer can leave via a scroll) while hovered.
  useEffect(() => hide, [hide])

  const content = (
    <>
      <span className={styles.workTitle}>{title}</span>
      {note && <span className={styles.workNote}>{note}</span>}
    </>
  )

  // No href, no anchor: an entry that opens nothing should not read as a link
  // to the pointer, the keyboard or a screen reader. Its picture still answers
  // the cursor.
  if (!href) {
    return (
      <span
        className={styles.work}
        title={title}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        {content}
      </span>
    )
  }

  return (
    <a
      className={styles.work}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {content}
    </a>
  )
}

export default Work
