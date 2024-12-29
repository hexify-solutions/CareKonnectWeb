import styles from "./doctorInfoCard.module.css";
import { Avatar, IconSquareChip, iconLoaderMap } from "@hexify/atoms";
import { DoctorInfo } from "@hexify/components";

const DoctorInfoCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.doctorInfoSection}>
        <Avatar
          size="xlarge"
          src="https://images.pexels.com/photos/5732461/pexels-photo-5732461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div>
          <DoctorInfo
            size="medium"
            label="Dr Innocent Edosa"
            rating={5}
            distance={"1.5 km from you"}
            tags={["Neurologist"]}
          />
        </div>
      </div>
      <div className={styles.infoCards}>
        <IconSquareChip
          title="3 Years +"
          subtitle="Experience"
          Icon={iconLoaderMap.badge}
        />
        <IconSquareChip
          color="secondary"
          title="62+"
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
