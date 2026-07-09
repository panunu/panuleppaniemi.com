import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import styles from './design.module.scss'
import entries from '../entries'

// Motion tuning.
const FRICTION = 0.92 // Velocity decay per frame → momentum glide after release.
const ARROW_ACCEL = 0.8 // Acceleration added each frame while an arrow key is held.
const MAX_VELOCITY = 22 // Speed cap for arrow-driven panning.
const MIN_VELOCITY = 0.05 // Below this we consider motion stopped.
const FOCUS_EASE = 0.12 // Lerp factor when easing toward a focused item.

const ARROW_KEYS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']

// Indices eligible for Tab focus (skips intro, portal, and anything else
// flagged focusable: false).
const FOCUSABLE = entries
  .map((item, index) => (item.focusable === false ? -1 : index))
  .filter((index) => index !== -1)

const Content: FC<{ focusedIndex: number }> = React.memo(({ focusedIndex }) => {
  return (
    <>
      {entries.map((item, key) => (
        <div
          key={key}
          className={focusedIndex === key ? styles.focused : undefined}
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
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const [isDragging, setIsDragging] = useState(false)

  // Source of truth for the animation loop (avoids stale-closure reads of state).
  const offsetRef = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const target = useRef<{ x: number; y: number } | null>(null)
  const heldKeys = useRef<Set<string>>(new Set())
  const focusIndex = useRef(-1)

  const dragStart = useRef({ x: 0, y: 0 })
  const lastOffset = useRef({ x: 0, y: 0 })
  const lastPointer = useRef({ x: 0, y: 0 })
  const isDraggingRef = useRef(false)
  const raf = useRef<number | null>(null)

  const commit = useCallback((next: { x: number; y: number }) => {
    offsetRef.current = next
    setOffset(next)
  }, [])

  const tick = useCallback(() => {
    // Direct dragging owns the offset; the physics loop steps aside.
    if (isDraggingRef.current) {
      raf.current = null
      return
    }

    const vel = velocity.current
    let { x, y } = offsetRef.current

    const keys = heldKeys.current
    if (keys.size > 0) {
      // Manual steering cancels any in-progress focus animation.
      target.current = null
      if (keys.has('ArrowLeft')) vel.x += ARROW_ACCEL
      if (keys.has('ArrowRight')) vel.x -= ARROW_ACCEL
      if (keys.has('ArrowUp')) vel.y += ARROW_ACCEL
      if (keys.has('ArrowDown')) vel.y -= ARROW_ACCEL
      vel.x = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, vel.x))
      vel.y = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, vel.y))
    }

    if (target.current) {
      // Ease toward a focused item.
      const t = target.current
      x += (t.x - x) * FOCUS_EASE
      y += (t.y - y) * FOCUS_EASE
      vel.x = 0
      vel.y = 0
      if (Math.abs(t.x - x) < 0.5 && Math.abs(t.y - y) < 0.5) {
        x = t.x
        y = t.y
        target.current = null
      }
    } else {
      x += vel.x
      y += vel.y
      // Friction only kicks in once the keys are released → momentum.
      if (keys.size === 0) {
        vel.x *= FRICTION
        vel.y *= FRICTION
        if (Math.abs(vel.x) < MIN_VELOCITY) vel.x = 0
        if (Math.abs(vel.y) < MIN_VELOCITY) vel.y = 0
      }
    }

    commit({ x, y })
    lastOffset.current = { x, y }

    const stillMoving =
      target.current !== null ||
      keys.size > 0 ||
      vel.x !== 0 ||
      vel.y !== 0

    raf.current = stillMoving ? requestAnimationFrame(tick) : null
  }, [commit])

  const startAnimating = useCallback(() => {
    if (raf.current === null) raf.current = requestAnimationFrame(tick)
  }, [tick])

  const focusEntry = useCallback(
    (direction: number) => {
      const count = FOCUSABLE.length
      if (count === 0) return
      // focusIndex tracks a position within FOCUSABLE, not the raw entry index.
      const pos = (focusIndex.current + direction + count) % count
      focusIndex.current = pos
      const next = FOCUSABLE[pos]
      setFocusedIndex(next)

      const item = entries[next]
      const itemWidth = typeof item.width === 'number' ? item.width : 300
      const itemHeight = item.height ?? 200

      target.current = {
        x: window.innerWidth / 2 - (item.x + itemWidth / 2),
        y: window.innerHeight / 2 - (item.y + itemHeight / 2),
      }
      velocity.current = { x: 0, y: 0 }
      startAnimating()
    },
    [startAnimating]
  )

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (ARROW_KEYS.includes(e.key)) {
        e.preventDefault()
        heldKeys.current.add(e.key)
        startAnimating()
      } else if (e.key === 'Tab') {
        e.preventDefault()
        focusEntry(e.shiftKey ? -1 : 1)
      }
    }
    const onKeyUp = (e: KeyboardEvent) => {
      heldKeys.current.delete(e.key)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      if (raf.current !== null) cancelAnimationFrame(raf.current)
    }
  }, [startAnimating, focusEntry])

  const handleStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    isDraggingRef.current = true
    // Grabbing halts any momentum or focus glide in progress.
    velocity.current = { x: 0, y: 0 }
    target.current = null

    const touch =
      (e as React.TouchEvent).touches?.[0] ?? (e as React.MouseEvent)

    dragStart.current = { x: touch.clientX, y: touch.clientY }
    lastPointer.current = { x: touch.clientX, y: touch.clientY }
  }, [])

  const handleMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDraggingRef.current) return

      const touch =
        (e as React.TouchEvent).touches?.[0] ?? (e as React.MouseEvent)

      const dx = touch.clientX - dragStart.current.x
      const dy = touch.clientY - dragStart.current.y

      // Per-move delta doubles as the velocity we hand off to momentum.
      velocity.current = {
        x: touch.clientX - lastPointer.current.x,
        y: touch.clientY - lastPointer.current.y,
      }
      lastPointer.current = { x: touch.clientX, y: touch.clientY }

      commit({
        x: lastOffset.current.x + dx,
        y: lastOffset.current.y + dy,
      })
    },
    [commit]
  )

  const handleEnd = useCallback(() => {
    setIsDragging(false)
    isDraggingRef.current = false
    lastOffset.current = offsetRef.current
    // Release into a momentum glide from the last drag velocity.
    startAnimating()
  }, [startAnimating])

  return (
    <div
      className={styles.container}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
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
        <Content focusedIndex={focusedIndex} />
      </div>

      <Compass offset={offset} />
    </div>
  )
}

export default Canvas
