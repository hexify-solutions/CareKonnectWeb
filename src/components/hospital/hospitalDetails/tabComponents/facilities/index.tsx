import { IconLoader, iconLoaderMap } from "@hexify/atoms";
import styles from "./facilities.module.css";

const HospitalFacilities = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.facilities}>
        {facilities?.map((facility) => {
          return (
            <div key={facility.label} className={styles.facility}>
             { <IconLoader path={iconLoaderMap[facility.icon] || ""} />}
              <span>{facility.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const facilities = [
  {
    label: "Kitchen",
    icon: "kitchen",
  },
  {
    label: "Air Conditioner",
    icon: "frost",
  },
  {
    label: "Television with Netflix",
    icon: "television",
  },
  {
    label: "Free Wireless Internet",
    icon: "internet",
  },
  {
    label: "Washer",
    icon: "washer",
  },
  {
    label: "Balcony or Patio",
    icon: "patio",
  },
];

export default HospitalFacilities;
