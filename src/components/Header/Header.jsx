import React from 'react'
import logo from '../../assets/sportsee-logo.svg'
import styles from './Header.module.scss'

/**
 * Function use to display the header of the app
 * @returns {JSX.Element}
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="le logo de sportsee" className={styles['header-logo']}/>
      <nav>
          <ul className={styles['header-nav']}>
              <li className={styles['nav-element']}>Accueil</li>
              <li className={styles['nav-element']}>Profil</li>
              <li className={styles['nav-element']}>Réglage</li>
              <li className={styles['nav-element']}>Communauté</li>
          </ul>
      </nav>
    </header>
  )
}
