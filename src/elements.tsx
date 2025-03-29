import React from 'react'

type CanvasElement = {
  id: string
  x: number
  y: number
  component: React.ReactNode
}

const elements: CanvasElement[] = [
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

export { elements }
