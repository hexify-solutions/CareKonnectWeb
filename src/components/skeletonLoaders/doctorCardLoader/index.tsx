
import styles from "./doctorCardLoader.module.css";

const DoctorCardLoader = () => {
    return <>
           <div className={styles.cardItem}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.textWrapper}>
            <div className={styles.skeletonText} style={{ width: "40%" }}></div>
            <div className={styles.skeletonText} style={{ width: "90%" }}></div>
            </div>
          </div>

    </>
}

export default DoctorCardLoader;
