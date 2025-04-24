import styles from "./doctorInfoCard.module.css";
import { Avatar, IconSquareChip, iconLoaderMap } from "@hexify/atoms";
import { DoctorInfo } from "@hexify/components";

const DoctorInfoCard = ({ doctor }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.doctorInfoSection}>
        <Avatar
          size="xlarge"
          src={doctor?.doctorDetails?.avatarUrl}
          displayText={`${doctor?.firstName} ${doctor?.lastName}`}
        />
        <div>
          <DoctorInfo
            size="medium"
            label={`${doctor?.firstName} ${doctor?.lastName}`}
            rating={5}
            distance={"1.5 km from you"}
            tags={doctor?.doctorDetails?.specializations?.map((s) => s?.name || "")}
          />
        </div>
      </div>
      <div className={styles.infoCards}>
        <IconSquareChip
          title={`${doctor?.doctorDetails?.yearsOfExperience || 0} Years +`}
          subtitle="Experience"
          Icon={iconLoaderMap.badge}
        />
        <IconSquareChip
          color="secondary"
          title={`${doctor?.doctorDetails?.stats?.patients}+`}
          subtitle="Patients"
          Icon={iconLoaderMap.badge}
        />
        <IconSquareChip
          color="tertiary"
          title="30+"
          subtitle="Reviews"
          Icon={iconLoaderMap.badge}
        />
      </div>
    </div>
  );
};

export default DoctorInfoCard;
