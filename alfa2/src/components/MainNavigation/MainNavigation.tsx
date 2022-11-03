import styles from './MainNavigation.module.css'
export const MainNavigation = () => {

  const x = {
    a: 'eins',
    b: 'zwei'
  }

  console.log(x.a) //preferred
  console.log(x['a']) //avoid

  return (<nav className={styles.mainNav}>
    <ul className={styles['nav-list']}>
      <li><a href="www.google.de">Google</a></li>
      <li><a href="www.sueddeutsche.de">Sueddeutsche</a></li>
    </ul>    
  </nav>)
}