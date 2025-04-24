import styles from "./profilePageLoader.module.css"

export default function ProfilePageSkeletonLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarSection}>
          <div className={styles.sectionTitle}>ACCOUNT</div>

          <div className={styles.menuItem}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonText} style={{ width: "40%" }}></div>
          </div>

          <div className={`${styles.menuItem} ${styles.active}`}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonText} style={{ width: "65%" }}></div>
          </div>

          <div className={styles.menuItem}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonText} style={{ width: "55%" }}></div>
          </div>

          <div className={styles.menuItem}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonText} style={{ width: "35%" }}></div>
          </div>
        </div>

        <div className={styles.sidebarSection}>
          <div className={styles.sectionTitle}>SECURITY & SETTINGS</div>

          <div className={styles.menuItem}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonText} style={{ width: "60%" }}></div>
          </div>

          <div className={styles.menuItem}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonText} style={{ width: "58%" }}></div>
          </div>
        </div>

        <div className={styles.sidebarSection}>
          <div className={styles.sectionTitle}>OTHERS</div>

          <div className={styles.menuItem}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonText} style={{ width: "100%" }}></div>
          </div>

          <div className={styles.menuItem}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonText} style={{ width: "100%" }}></div>
          </div>

          <div className={styles.menuItem}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonText} style={{ width: "100%" }}></div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div className={styles.skeletonTitle}></div>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.skeletonLabel}></div>
          <div className={styles.inputContainer}>
            <div className={styles.inputIcon}></div>
            <div className={styles.skeletonInput}></div>
          </div>
          <div className={styles.inputUnderline}></div>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.skeletonLabel}></div>
          <div className={styles.inputContainer}>
            <div className={styles.inputIcon}></div>
            <div className={styles.skeletonInput}></div>
          </div>
          <div className={styles.inputUnderline}></div>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.skeletonLabel}></div>
          <div className={styles.inputContainer}>
            <div className={styles.inputIcon}></div>
            <div className={styles.skeletonInput}></div>
          </div>
          <div className={styles.inputUnderline}></div>
        </div>

        <div className={styles.skeletonButton}></div>
      </div>
    </div>
  )
}

