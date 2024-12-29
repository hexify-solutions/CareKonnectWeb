"use client"

import Link from "next/link";
import styles from "./hospitalDetail.module.css";
import HospitalAbout from "./tabComponents/about";
import HospitalFacilities from "./tabComponents/facilities";
import HospitalReviews from "./tabComponents/reviews";
import {
  LocationOn,
  Share,
  Love,
  IconSquareChip,
  iconLoaderMap,
  Tabs,
} from "@hexify/atoms";

interface HospitalCategory {
  label: string;
  color: "primary" | "neutral" | "tertiary" | "error";
}

const hospitalCategoryList: HospitalCategory[] = [
  {
    label: "General",
    color: "primary",
  },
  {
    label: "Pharmacy",
    color: "neutral",
  },
  {
    label: "Lab Tests",
    color: "tertiary",
  },
  {
    label: "Emergency",
    color: "error",
  },
];

const tabs = [
    {
      label: "About",
      Component: HospitalAbout,
    },
    {
      label: "Reviews",
      Component: HospitalReviews,
    },
    {
      label: "Facilities",
      Component: HospitalFacilities,
    },
  ];

const HospitalDetails: React.FC = () => {
  const generateCategoryPath = (category: string) => {
    switch (category) {
      case "General":
        return `/hospital/salem`;
      case "Pharmacy":
        return `/hospital/salem/pharmacy`;
      case "Emergency":
        return `/hospital/salem/emergency`;
      case "Lab Tests":
        return `/hospital/salem/labs`;
      default:
        return "/";
    }
  };
  return (
    <div>
      <div className={styles.headingWrapper}>
        <div>
          <h3 className={styles.heading}>Salem Specialist Hospital</h3>
          <span className={styles.address}>
            <LocationOn />
            <span>Plot 12, Adeola Odeku Street, Victoria Island, Lagos.</span>
          </span>
        </div>
        <div className={styles.headingActions}>
          <button>
            <Love />
          </button>
          <button>
            <Share />
          </button>
        </div>
      </div>
      <ul className={styles.hospitalCategoryList}>
        {hospitalCategoryList.map((category) => (
          <li key={category.label} className={styles.hospitalCategoryItem}>
            <Link href={generateCategoryPath(category?.label)}>
              <IconSquareChip
                size="medium"
                subtitle={category.label}
                color={category.color}
                Icon={iconLoaderMap[category.label?.toLowerCase()]}
              />
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};



export default HospitalDetails;
