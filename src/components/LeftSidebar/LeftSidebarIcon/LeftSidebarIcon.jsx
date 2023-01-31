import React from 'react'
import styles from './LeftSidebarIcon.module.scss'
import PropTypes from 'prop-types'

 function LeftSidebarIcon({icon}) {
  return (
    <div className={styles.icon}>
      <img src={`/${icon}-icon.svg`} alt="" className={styles['icon-img']}/>
    </div>
  )
}

LeftSidebarIcon.propTypes = {
  icon: PropTypes.string
}

export default LeftSidebarIcon