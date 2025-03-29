import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'

type CanvasItem = {
  id: string
  x: number
  y: number
  component: React.ReactNode
}

const Page: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const lastOffset = useRef({ x: 0, y: 0 })

  const canvasItems: CanvasItem[] = [
    {
      id: 'item1',
      x: 100,
      y: 150,
      component: (
        <div style={{ background: 'lightblue', padding: 10 }}>Hello</div>
      ),
    },
    {
      id: 'item2',
      x: 300,
      y: 250,
      component: (
        <div style={{ background: 'lightcoral', padding: 10 }}>World</div>
      ),
    },
  ]

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const dx = e.clientX - dragStart.current.x
      const dy = e.clientY - dragStart.current.y
      setOffset({ x: lastOffset.current.x + dx, y: lastOffset.current.y + dy })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    lastOffset.current = offset
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        background: '#f0f0f0',
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          position: 'absolute',
        }}
      >
        {canvasItems.map((item) => (
          <div
            key={item.id}
            style={{
              position: 'absolute',
              left: item.x,
              top: item.y,
            }}
          >
            {item.component}
          </div>
        ))}
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Page />)
