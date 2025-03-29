import React, { FC } from 'react'
import styles from './design.module.scss'

type ItemProps = {
  children: React.ReactNode | any
  style?: React.CSSProperties
  width?: number | string
  height?: number
}

type Item = {
  x: number
  y: number
  component: React.ReactNode
}

const Item: FC<ItemProps> = ({
  children,
  width = 100,
  height = undefined,
  style = {},
}) => {
  return (
    <div
      className={styles.elementWrapper}
      style={{
        width,
        height: height,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Item
