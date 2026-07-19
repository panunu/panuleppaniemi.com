import React, { FC } from 'react'
import styles from './design.module.scss'

const Label: FC<{ children: string }> = ({ children }) => (
  <h2 className={styles.label}>{children}</h2>
)

export default Label
