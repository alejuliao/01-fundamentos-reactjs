import styles from './Header.module.scss'

import feedLogo from '../assets/logo.svg'
export function Header(){
  return(
    <header>
      
      <header className={styles.header}>
      <img src={feedLogo} alt="Logo" />Feed</header>
    </header>
  )
}