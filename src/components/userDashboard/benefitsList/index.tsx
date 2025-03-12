"use client";

import { InputField, Tabs } from "@hexify/atoms";
import { useMemo } from "react";
import styles from "./benefitList.module.css";

const BenefitsList = () => {
  const tabs = useMemo(
    () => [
      {
        label: "All benefits",
        Component: () => <div>checks</div>,
      },
      {
        label: "Covered",
        Component: () => <div>checks</div>,
      },
      {
        label: "Not covered",
        Component: () => <div>checks</div>,
      },
    ],
    []
  );

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          <Tabs tabs={tabs} />
        </div>
        <div>
          <InputField />
        </div>
      </header>
    </div>
  );
};

export default BenefitsList;
