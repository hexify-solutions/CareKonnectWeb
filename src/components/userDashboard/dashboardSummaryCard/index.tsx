import styles from "./dashboardSummaryCard.module.css";
import React from "react";

interface DashboardSummaryCardProps {
  icon: React.ReactNode;
  theme?: 'primary' | 'secondary' | 'error';
  total?: React.ReactNode;
  title?: React.ReactNode;
  data?: { label: string; value: React.ReactNode}[]
}

const DashboardSummaryCard = ({
  icon,
  theme,
  total,
  title,
  data,
}: DashboardSummaryCardProps) => {
  return (
    <div className={styles.wrapper} data-theme={theme}>
      <aside className={styles.iconWrapper}>{icon}</aside>
      <div className={styles.leadWrapper}>
        <div className={styles.lead}>{total || 0}</div>
        <div>{title}</div>
      </div>
      <div className={styles.infoGrid}>
        {data?.map((datum, idx) => {
          return (
            <div key={datum?.label + idx}>
              <span className={styles.emp}>{datum?.value}</span> <span>{datum?.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DashboardSummaryCard