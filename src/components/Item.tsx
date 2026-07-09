import React, { FC } from 'react'
import styles from './design.module.scss'

type ItemProps = {
  children: React.ReactNode | any
  style?: React.CSSProperties
  maxWidth?: number | string
  background?: boolean
  title?: string
}

export type ItemType = {
  x: number
  y: number
  component: React.ReactNode
  width?: number | string
  height?: number
  // Set false to skip this entry in the Tab focus cycle (e.g. intro, portal).
  focusable?: boolean
}

const Item: FC<ItemProps> = ({
  children,
  maxWidth = undefined,
  background = false,
  title = undefined,
  style = {},
}) => {
  return (
    <div
      className={`${styles.item} ${background ? styles.itemBackground : ''}`}
      title={title}
      aria-label={title}
      style={{
        maxWidth,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Item
