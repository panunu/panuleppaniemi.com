import React, { useCallback, useRef, useState } from 'react'
import styles from './design.module.scss'
import data from '../data'

const Content: React.FC = React.memo(() => {
  return (
    <>
      {data.map((item, key) => (
        <div
          key={key}
          style={{
            position: 'absolute',
            left: item.x,
            top: item.y,
          }}
        >
          {item.component}
        </div>
      ))}
    </>
  )
})

const Canvas = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const lastOffset = useRef({ x: 0, y: 0 })

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY }
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        const dx = e.clientX - dragStart.current.x
        const dy = e.clientY - dragStart.current.y
        setOffset({
          x: lastOffset.current.x + dx,
          y: lastOffset.current.y + dy,
        })
      }
    },
    [isDragging, lastOffset]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    lastOffset.current = offset
  }, [offset])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true)
    const touch = e.touches[0]
    dragStart.current = { x: touch.clientX, y: touch.clientY }
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging) {
        const touch = e.touches[0]
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

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    lastOffset.current = offset
  }, [offset])

  return (
    <div
      className={styles.container}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          position: 'absolute',
        }}
      >
        <Content />
      </div>
    </div>
  )
}

export default Canvas
