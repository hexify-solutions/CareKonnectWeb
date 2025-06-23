import Link from "next/link"
import routes from "@/lib/constants/routes"
import { DoctorCard, HospitalCard } from "@hexify/components"

const ServiceList = ({ services, styles }) => {
  return (
    <>
      <ul className={styles.serviceList}>
        {services?.map((service, index) => {
          if (service?.userType?.toLowerCase() === "doctor") {
            return (
              <li key={service?.id} className={styles.listItem}>
                <Link href={routes.doctor(service?.id)}>
                  <DoctorCard
                    image={service.image}
                    info={{
                      tags: service?.tags,
                      label: service?.name,
                      rating: service?.rating,
                      distance: service?.distance,
                    }}
                  />
                </Link>
              </li>
            )
          }
          if (
            service?.userType?.toLowerCase() === "hospital" ||
            service?.userType?.toLowerCase() === "pharmacy"
          ) {
            const href =
              service?.userType?.toLowerCase() === "pharmacy"
                ? routes?.pharmacy(service?.id)
                : routes?.hospital(service?.id)
            return (
              <li key={service?.id} className={styles.listItem}>
                <Link href={href}>
                  <HospitalCard
                    image={service?.image}
                    name={service?.name}
                    location={service?.location}
                    tags={service?.tags}
                    rating={service?.rating}
                    distance={service.distance}
                    time={service.time}
                  />
                </Link>
              </li>
            )
          }

          return null
        })}
      </ul>
    </>
  )
}

export default ServiceList
