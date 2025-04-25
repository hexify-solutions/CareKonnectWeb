import ReviewCard from "@/components/reviewCard"
import styles from "./pharmacyReview.module.css"
import RatingDistribution from "@/components/ratingDistribution"
import { Button, ChevronDown, Rating } from "@hexify/atoms"
import useDropdown from "@/hooks/useDropdown"

const PharmacyReview = () => {
  const { isOpen, toggle, dropdownRef } = useDropdown()

  return (
    <div>
      <div className={styles.filterHeader}>
        <div ref={dropdownRef} className={styles.dropdown}>
          <button onClick={toggle} className={styles.filterToggle}>
            Sort by latest review{" "}
            <span data-isopen={isOpen} className={styles.dropdownIcon}>
              <ChevronDown />
            </span>
          </button>
          {isOpen && (
            <div className={styles.filterDropdown}>
              {/* <div>Filter by</div> */}
            </div>
          )}
        </div>
        <Button color="primary" variant="contained" rounded>
          Write a review
        </Button>
      </div>
      <div className={styles.reviewSummary}>
        <div className={styles.reviewDetails}>
          <div className={styles.heading}>Employee Reviews</div>
          <div className={styles.rating}>4.7</div>
          <div>
            <Rating defaultValue={5} />
          </div>
          <div className={styles.ratingCount}>(578 Reviews)</div>
        </div>

        <div className={styles.ratingDistribution}>
          <RatingDistribution />
        </div>
      </div>
      <ul className={styles.reviewList}>
        {Array.from({ length: 10 })?.map(() => {
          return <ReviewCard />
        })}
      </ul>
    </div>
  )
}

export default PharmacyReview
