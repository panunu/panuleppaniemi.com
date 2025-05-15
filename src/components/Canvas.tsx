import React, { FC, useCallback, useRef, useState } from 'react'
import styles from './design.module.scss'
import entries from '../entries'

const Content: FC = React.memo(() => {
  return (
    <>
      {entries.map((item, key) => (
        <div
          key={key}
          style={{
            position: 'absolute',
            left: item.x,
            top: item.y,
            width: item.width,
            height: item.height,
          }}
        >
          {item.component}
        </div>
      ))}
    </>
  )
})

const Compass: React.FC<{ offset: { x: number; y: number } }> = ({
  offset,
}) => {
  const centerX = window.innerWidth / 2 - offset.x
  const centerY = window.innerHeight / 2 - offset.y

  const radius = Math.min(window.innerWidth, window.innerHeight) / 2 - 20

  const items = entries.map((item, index) => {
    const dx = item.x - centerX
    const dy = item.y - centerY
    const distance = Math.sqrt(dx * dx + dy * dy)

    const buffer = 100
    const isOffscreen =
      item.x + offset.x < -buffer ||
      item.x + offset.x > window.innerWidth + buffer ||
      item.y + offset.y < -buffer ||
      item.y + offset.y > window.innerHeight + buffer

    if (!isOffscreen) return null

    const angle = Math.atan2(dy, dx)
    const dotX = Math.cos(angle) * radius + window.innerWidth / 2
    const dotY = Math.sin(angle) * radius + window.innerHeight / 2

    return (
      <div
        key={index}
        className={styles.compass}
        style={{
          left: dotX,
          top: dotY,
          transform: `scale(${distance / 1200})`,
        }}
      />
    )
  })

  return <>{items}</>
}

const Canvas = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const lastOffset = useRef({ x: 0, y: 0 })

  const handleStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)

    const touch =
      (e as React.TouchEvent).touches?.[0] ?? (e as React.MouseEvent)

    dragStart.current = { x: touch.clientX, y: touch.clientY }
  }, [])

  const handleMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (isDragging) {
        const touch =
          (e as React.TouchEvent).touches?.[0] ?? (e as React.MouseEvent)

        const dx = touch.clientX - dragStart.current.x
        const dy = touch.clientY - dragStart.current.y

        setOffset({
          x: lastOffset.current.x + dx,
          y: lastOffset.current.y + dy,
        })
      }
    },
    [isDragging, lastOffset]
  )

  const handleEnd = useCallback(() => {
    setIsDragging(false)
    lastOffset.current = offset
  }, [offset])

  return (
    <div
      className={styles.container}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <div
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          position: 'absolute',
        }}
      >
        <Content />
      </div>

      <Compass offset={offset} />
    </div>
  )
}

export default Canvas
