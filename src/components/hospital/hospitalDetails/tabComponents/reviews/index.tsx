import styles from "./reviews.module.css";
import { ReviewCard } from "@hexify/components";

const HospitalReviews = () => {
  return (
    <div>
      <div className={styles.feedbackList}>
        {Array.from({ length: 5 })?.map(() => {
          return (
            <div className={styles.reviewCardWrapper}>

                <ReviewCard
                  review="I had a wonderful experience at Salem Specialist Hospital. The staff was compassionate, and the doctors were extremely knowledgeable. The facilities were clean, and the waiting time was minimal. Highly recommended!"
                  name="Innocent Edosa"
                  role="Managing Director"
                />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HospitalReviews;
