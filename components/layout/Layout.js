import MainNavigation from './MainNavigation'
import styles from '../../styles/Layout.module.css'

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  )
}

export default Layout
