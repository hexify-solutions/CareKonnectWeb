import styles from "./reviewCard.module.css"
import { Avatar, Rating } from "@hexify/atoms"

const ReviewCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <aside className={styles.profile}>
        <Avatar size="medium" displayText="Innocent Edosa" />
        <div className={styles.profileDetails}>
          <div>Sarah Lawerence</div>
          <div className={styles.role}>Product Designer</div>
          <div className={styles.rating}>
            <Rating defaultValue={4} />
          </div>
        </div>
      </aside>
      <div className={styles.review}>
        I had a wonderful experience at Salem Specialist Hospital. The staff was
        compassionate, and the doctors were extremely knowledgeable. The
        facilities were clean, and the waiting time was minimal. Highly
        recommended!"
      </div>
    </div>
  )
}

export default ReviewCard
