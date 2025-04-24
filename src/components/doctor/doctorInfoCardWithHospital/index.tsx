import { Avatar, IconSquareChip, iconLoaderMap } from "@hexify/atoms";
import styles from "./doctorInfoCardWithHospital.module.css";
import { DoctorInfo } from "@hexify/components";

const DoctorInfoCardWithHospital = ({ doctor }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.doctorInfoWrapper}>
        <Avatar
          size="xlarge"
          src={doctor?.doctorDetails?.avatarUrl}
        />
        <div>
          <DoctorInfo
            size="medium"
            label={`Dr ${doctor?.firstName} ${doctor?.lastName}`}
            rating={5}
            distance={"1.5 km from you"}
            tags={["Neurologist"]}
          />
        </div>
      </div>
      <div className={styles.infoCardList}>
        <IconSquareChip
          title={`${doctor?.doctorDetails?.yearsOfExperience} Years +`}
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
      <div className={styles.hospitalInfo}>
        <h4>{doctor?.doctorDetails?.clinicName}</h4>
        <span>{doctor?.doctorDetails?.locations}</span>
      </div>
    </div>
  );
};

export default DoctorInfoCardWithHospital;
