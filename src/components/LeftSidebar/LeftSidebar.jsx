import React from 'react'
import styles from './LeftSidebar.module.scss'
import LeftSidebarIcon from './LeftSidebarIcon/LeftSidebarIcon'

export default function LeftSidebar() {
  return (
    <aside className={styles['left-sidebar']}>
      <div className={styles['sidebar-icon']}>
        <LeftSidebarIcon icon="sitdown"/>
        <LeftSidebarIcon icon="swimming"/>
        <LeftSidebarIcon icon="bicycle"/>
        <LeftSidebarIcon icon="weight"/>
      </div>
      <div className={styles['sidebar-copyright']}>
        <p>
          Copyright, SportSee 2020
        </p>
      </div>
    </aside>
  )
}
