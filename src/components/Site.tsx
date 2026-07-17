import React, {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import styles from './design.module.scss'
import entries, { Column } from '../entries'
import { Preview, PreviewContext } from './preview'

const COLUMNS: Column[] = ['name', 'manifesto', 'work']

// Only the columns that need styling of their own appear here.
const CLASS_FOR_COLUMN: Partial<Record<Column, string>> = {
  work: styles.columnWork,
}

type Point = { x: number; y: number }

// Nudge the preview off the cursor so it never sits under the pointer.
const PREVIEW_OFFSET = 24

const PreviewLayer: FC<{
  preview: Preview
  pointer: MutableRefObject<Point>
}> = ({ preview, pointer }) => {
  const frame = useRef<HTMLDivElement>(null)

  // Positioned outside React: the pointer moves far more often than we want renders.
  const place = useCallback(() => {
    const element = frame.current
    if (!element) return

    const { x, y } = pointer.current
    const { width, height } = element.getBoundingClientRect()

    // Flip to the other side of the cursor rather than overflow the viewport.
    const left =
      x + PREVIEW_OFFSET + width > window.innerWidth
        ? x - PREVIEW_OFFSET - width
        : x + PREVIEW_OFFSET
    const top = Math.min(
      Math.max(y - height / 2, PREVIEW_OFFSET),
      window.innerHeight - height - PREVIEW_OFFSET
    )

    element.style.transform = `translate(${left}px, ${top}px)`
  }, [pointer])

  // Place before the first paint: a hover that never moves again still fires no
  // mousemove, and an unplaced frame would flash in the corner.
  useLayoutEffect(() => {
    if (!preview) return

    place()
    window.addEventListener('mousemove', place)
    return () => window.removeEventListener('mousemove', place)
  }, [preview, place])

  if (!preview) return null

  return (
    <div className={styles.preview} ref={frame} aria-hidden>
      {/* Height is unknown until the image lands, so centre it again once it has. */}
      <img src={preview.src} alt="" onLoad={place} />
    </div>
  )
}

const Site = () => {
  const [preview, setPreview] = useState<Preview>(null)
  const pointer = useRef<Point>({ x: 0, y: 0 })

  useEffect(() => {
    const track = (e: MouseEvent) => {
      pointer.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', track)
    return () => window.removeEventListener('mousemove', track)
  }, [])

  // Identity-stable so Work's hide-on-unmount effect doesn't re-run per render.
  const set = useCallback((next: Preview) => setPreview(next), [])

  return (
    <PreviewContext.Provider value={set}>
      <main className={styles.site}>
        {COLUMNS.map((column) => (
          <section
            key={column}
            className={[styles.column, CLASS_FOR_COLUMN[column]]
              .filter(Boolean)
              .join(' ')}
          >
            <div className={styles.stack}>
              {entries
                .filter((entry) => entry.column === column)
                .map((entry, index) => (
                  <React.Fragment key={index}>{entry.component}</React.Fragment>
                ))}
            </div>
          </section>
        ))}
      </main>

      <PreviewLayer preview={preview} pointer={pointer} />
    </PreviewContext.Provider>
  )
}

export default Site
