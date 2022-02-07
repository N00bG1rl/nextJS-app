import Link from 'next/link'

import styles from '../../styles/MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>DnD Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All games</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New game</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
