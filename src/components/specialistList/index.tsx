import styles from "./specialistList.module.css";
import Link from "next/link";
import { HospitalCard, DoctorCard } from "@hexify/components";
import mockSpecialistData from "../../data/mockSpecialist.json";

const SpecialistList = () => {
  return (
    <div>
      <div className="inner-wrapper">
        <h3 className={styles.heading} arial-label="Top Specialist">
          Top Specialists
        </h3>
        <ul className={styles.list}>
          {mockSpecialistData?.map(({image, id, type, ...specialist}) => {
            if(type === "hospital") {
              return <li key={id} className={styles.listItem}>
              <Link href="/">
                <HospitalCard info={specialist} image={image} />
              </Link>
            </li>
            }
            return (
              <li key={id} className={styles.listItem}>
                <Link href="/">
                  <DoctorCard info={specialist} image={image} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SpecialistList;
