import React, { FC } from 'react'

type ElementProps = {
  children: React.ReactNode
  style: React.CSSProperties
}

const ElementWrapper: FC<ElementProps> = ({ children, style }) => {
  return <div style={style}>{children}</div>
}

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
      <ElementWrapper style={{ height: 300, width: 300 }}>
        <iframe
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/track/2s0Ea95qHSgtpPKw9pFBoD?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </ElementWrapper>
    ),
  },
]

export { elements }
