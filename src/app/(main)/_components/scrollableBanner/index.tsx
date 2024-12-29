"use client"

import { ScrollableListBanner } from "@hexify/components";
import { iconLoaderMap, IconLoader } from "@hexify/atoms";
import styles from "./scrollableBanner.module.css";

const ScrollableBanner = () => {
  return <ScrollableListBanner render={renderListBanner} />;
};

const renderListBanner = () => {
  const list = [
    "Fast & affordable",
    "Specialist easily findable",
    "Convenient payments options",
    "Flexibility to order service at a later time",
  ];

  return (
    <>
      {list.map((item) => (
        <div className={styles.wrapper} key={item}>
          <span className={styles.icon}>
            <IconLoader path={iconLoaderMap.circleCheck || ""} />
          </span>
          <span>{item}</span>
        </div>
      ))}
    </>
  );
};

export default ScrollableBanner
