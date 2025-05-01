"use client"
import styles from "./searchResultsSection.module.css"
import Link from "next/link"
import { DoctorCard } from "@hexify/components"
import { pluralize } from "@hexify/shared"
import routes from "@/lib/constants/routes"
import { useUserLocation } from "@/context/location"
import { calculatePatientDistance } from "@hexify/providers/src/lib/utils"

const SearchResultSection = ({ label, list }) => {
  const location = useUserLocation()
  const patientCoords = { location: location?.position?.coords }
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.sectionHeading}>{pluralize(label)}</h4>
      <div className={styles.list}>
        {list?.map((item) => {
          if (item?.userType === "doctor") {
            const distance = calculatePatientDistance(item, patientCoords)
            const tags =
              item?.doctorDetails?.specializations?.length > 0
                ? item?.doctorDetails?.specializations
                    .slice(0, 3)
                    ?.map((spec) => spec?.name)
                : []
            if (item?.doctorDetails?.specializations.length > 3) {
              tags.push(`+${item?.doctorDetails?.specializations.length - 3}`)
            }

            return (
              <Link
                key={item?.doctorDetails?.id}
                href={routes?.doctor(item?.doctorDetails?.id)}
                // href={`${routes.doctor(item.doctorDetails?.id)}?availability=${item?.doctorDetails?.id}`}
              >
                <DoctorCard
                  image={
                    item?.doctorDetails?.avatarUrl ||
                    "https://images.pexels.com/photos/12311410/pexels-photo-12311410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  info={{
                    label: item?.firstName + " " + item?.lastName,
                    tags,
                    rating: item?.doctorDetails?.rating || 5,
                    distance: distance,
                  }}
                />
              </Link>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default SearchResultSection
