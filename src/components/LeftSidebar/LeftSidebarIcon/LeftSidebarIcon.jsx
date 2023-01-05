import React from 'react'
import styles from './LeftSidebarIcon.module.scss'

export default function LeftSidebarIcon({icon}) {
  return (
    <div className={styles.icon}>
      <img src={`/${icon}-icon.svg`} alt="" className={styles['icon-img']}/>
    </div>
  )
}
