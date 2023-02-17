import React from 'react'
import styles from './Card.module.scss'
import PropTypes from 'prop-types'

/**
 * funtion use to display the card on the right of the screen
 * @param {string} icon icon of the card
 * @param {string} color background-color of the icon
 * @param {string} value value in grams or kilocalories 
 * @param {string} description 
 * @returns {JSX.Element}
 */
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