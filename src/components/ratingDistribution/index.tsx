import styles from "./ratingDistribution.module.css"

interface RatingDistributionProps {
  ratings?: {
    fiveStars: number
    fourStars: number
    threeStars: number
    twoStars: number
    oneStar: number
  }
}

const RatingDistribution = ({ ratings = {
  fiveStars: 10,
  fourStars: 50,
  threeStars: 10,
  twoStars: 5,
  oneStar: 20,



} }: RatingDistributionProps) => {
  const { fiveStars, fourStars, threeStars, twoStars, oneStar } = ratings
  const total = fiveStars + fourStars + threeStars + twoStars + oneStar

  // Calculate percentages for bar widths
  const calculatePercentage = (value: number) => {
    if (total === 0) return 0
    return (value / total) * 100
  }

  return (
    <div className={styles.container}>
      <div className={styles.ratingRow}>
        <div className={styles.label}>5 stars</div>
        <div className={styles.barContainer}>
          <div className={styles.bar} style={{ width: `${calculatePercentage(fiveStars)}%` }}></div>
        </div>
        <div className={styles.count}>{fiveStars}</div>
      </div>

      <div className={styles.ratingRow}>
        <div className={styles.label}>4 stars</div>
        <div className={styles.barContainer}>
          <div className={styles.bar} style={{ width: `${calculatePercentage(fourStars)}%` }}></div>
        </div>
        <div className={styles.count}>{fourStars}</div>
      </div>

      <div className={styles.ratingRow}>
        <div className={styles.label}>3 stars</div>
        <div className={styles.barContainer}>
          <div className={styles.bar} style={{ width: `${calculatePercentage(threeStars)}%` }}></div>
        </div>
        <div className={styles.count}>{threeStars}</div>
      </div>

      <div className={styles.ratingRow}>
        <div className={styles.label}>2 stars</div>
        <div className={styles.barContainer}>
          <div className={styles.bar} style={{ width: `${calculatePercentage(twoStars)}%` }}></div>
        </div>
        <div className={styles.count}>{twoStars}</div>
      </div>

      <div className={styles.ratingRow}>
        <div className={styles.label}>1 star</div>
        <div className={styles.barContainer}>
          <div className={styles.bar} style={{ width: `${calculatePercentage(oneStar)}%` }}></div>
        </div>
        <div className={styles.count}>{oneStar}</div>
      </div>
    </div>
  )
}

export default RatingDistribution
