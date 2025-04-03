import styles from "./dashboardSummaryCard.module.css";
import React from "react";

interface DashboardSummaryCardProps {
  icon: React.ReactNode;
  theme?: 'primary' | 'secondary' | 'error';
  digit?: React.ReactNode;
  title?: React.ReactNode;
}

const DashboardSummaryCard = ({ icon, theme, digit, title }: DashboardSummaryCardProps) => {
  return (
    <div className={styles.wrapper} data-theme={theme}>
      <aside className={styles.iconWrapper}>{icon}</aside>
      <div className={styles.leadWrapper}>
        <div className={styles.lead}>{digit || 0}</div>
        <div>{title}</div>
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