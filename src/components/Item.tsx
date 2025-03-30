import React, { FC } from 'react'
import styles from './design.module.scss'

type ItemProps = {
  children: React.ReactNode | any
  style?: React.CSSProperties
  width?: number | string
  maxWidth?: number | string
  height?: number
}

export type ItemType = {
  x: number
  y: number
  component: React.ReactNode
}

const Item: FC<ItemProps> = ({
  children,
  width = 100,
  height = undefined,
  maxWidth = undefined,
  style = {},
}) => {
  return (
    <div
      className={styles.item}
      style={{
        width,
        maxWidth,
        height,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Item
