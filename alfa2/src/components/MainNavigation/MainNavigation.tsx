import styles from './MainNavigation.module.css'
export const MainNavigation = () => {
  return (<nav className={styles['main-nav']}>
    <ul className={styles['nav-list']}>
      <li><a href="www.google.de">Google</a></li>
      <li><a href="www.sueddeutsche.de">Sueddeutsche</a></li>
    </ul>    
  </nav>)
}