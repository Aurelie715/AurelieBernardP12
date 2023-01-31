import React from 'react'
import styles from './Card.module.scss'
import PropTypes from 'prop-types'

function Card({icon, color, value, description}) {
  return (
    <div className={styles.container}>
        <div style={{backgroundColor: color}} className={styles["container-icon"]}>
            <img src={`/${icon}-icon.svg`} alt="" />
        </div>
        <div className={styles["container-text"]}> 
            <p className={styles["text-value"]}>{value}</p>
            <p className={styles["text-description"]}>{description}</p>
        </div>
    </div>
  )
}

Card.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    value: PropTypes.string,
    description: PropTypes.string,
}

export default Card