import styles from "./specialistList.module.css";
import Link from "next/link";
import { HospitalCard, DoctorCard } from "@hexify/components";
import routes from "@/lib/constants/routes";
import mockSpecialistData from "../../data/mockSpecialist.json";

const SpecialistList = ({ size }: { size?: "small" }) => {
  return (
    <div className="inner-wrapper">
      <ul className={styles.list}>
        {mockSpecialistData?.map(({ image, id, type, ...specialist }) => {
          if (type === "hospital") {
            return (
              <li key={id} className={styles.listItem}>
                <Link href={routes.hospital(specialist.label)}>
                  <HospitalCard size={size}  info={specialist} image={image} />
                </Link>
              </li>
            );
          }
          return (
            <li key={id} className={styles.listItem}>
              <Link href={routes.doctor(specialist.label)}>
                <DoctorCard size={size} info={specialist} image={image} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SpecialistList;
