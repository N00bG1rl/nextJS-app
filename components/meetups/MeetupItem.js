import { useRouter } from 'next/router'

import Card from '../ui/Card'
import styles from '../../styles/MeetupItem.module.css'

function MeetupItem(props) {
  // Use programmatic navigation
  const router = useRouter()

  function handleDetailShow() {
    // Get id from meetupList through props and greate route
    router.push('/' + props.id)
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={styles.actions}>
          <button onClick={handleDetailShow}>Show Details</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
