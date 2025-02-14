import styles from "./dashboardSummaryCard.module.css";
import React from "react";

interface DashboardSummaryCardProps {
  icon: React.ReactNode;
  theme?: 'primary' | 'secondary' | 'error';
}

const DashboardSummaryCard: React.FC<DashboardSummaryCardProps> = ({ icon, theme }) => {
  return (
    <div className={styles.wrapper} data-theme={theme}>
      <aside className={styles.iconWrapper}>{icon}</aside>
      <div className={styles.leadWrapper}>
        <div className={styles.lead}>29</div>
        <div>Appointments</div>
      </div>
      <div className={styles.infoGrid}>
        <div>
          <span className={styles.emp}>O1</span> <span>Ongoing</span>
        </div>
        <div>
          <span className={styles.emp}>O1</span> <span>Ongoing</span>
        </div>
        <div>
          <span className={styles.emp}>O1</span> <span>Ongoing</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummaryCard;