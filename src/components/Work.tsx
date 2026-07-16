import React, { FC, useCallback, useContext, useEffect } from 'react'
import styles from './design.module.scss'
import { PreviewContext } from './preview'

type WorkProps = {
  title: string
  href: string
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
      <span className={styles.workTitle}>{title}</span>
      {note && <span className={styles.workNote}>{note}</span>}
    </a>
  )
}

export default Work
