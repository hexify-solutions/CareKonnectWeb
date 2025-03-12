import styles from "./specialistList.module.css";
import Link from "next/link";
import { HospitalCard, DoctorCard } from "@hexify/components";
import routes from "@/lib/constants/routes";
// import mockSpecialistData from "../../data/mockSpecialist.json";

const SpecialistList = async ({ size }: { size?: "small" }) => {

  const data = await fetch(`${process.env.PUBLIC_URL}/global/top-specialists`)
  const topSpecialists = await data.json()



  return (
    <div className="inner-wrapper">
      <ul className={styles.list}>
        {topSpecialists?.data?.data?.map(({ image, id, userType, ...specialist }) => {
          console.log(specialist)
          if (userType === "hospital") {
            return (
              <li key={id} className={styles.listItem}>
                {/* <Link href={routes.hospital(specialist.label)}>
                  <HospitalCard size={size} info={specialist} image={image} />
                </Link> */}
              </li>
            )
          }
          return (
            <li key={specialist?.doctorDetails?.id} className={styles.listItem}>
              <Link href={routes.doctor(specialist?.doctorDetails?.userId)}>
                <DoctorCard
                  size={size}
                  info={{
                    label: specialist?.firstName + "  " + specialist?.lastName,
                    rating: specialist?.doctorDetails?.rating || 5,
                    distance: "1.5km from you",
                    tags: specialist?.doctorDetails?.specializations?.map(
                      (spec) => spec?.name
                    ),
                  }}
                  image={specialist?.doctorDetails?.avatarUrl || "https://images.pexels.com/photos/12311410/pexels-photo-12311410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default SpecialistList;
