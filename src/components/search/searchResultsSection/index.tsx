"use client"
import styles from "./searchResultsSection.module.css"
import Link from "next/link";
import { DoctorCard } from "@hexify/components"
import { pluralize } from "@hexify/shared"
import routes from "@/lib/constants/routes"


const SearchResultSection = ({ label, list }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.sectionHeading}>{pluralize(label)}</h4>
      <div className={styles.list}>
        {list?.map((item) => {
          if(item?.userType === "doctor") {
            
            return (
              <Link
                key={item?.doctorDetails?.id}
                href={routes?.doctor(item?.doctorDetails?.id)}
              >
                <DoctorCard
                  image={
                    item?.doctorDetails?.avatarUrl ||
                    "https://images.pexels.com/photos/12311410/pexels-photo-12311410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  info={{
                    label: item?.firstName + " " + item?.lastName,
                    tags: item?.doctorDetails?.specializations?.map(
                      (spec) => spec?.name
                    ),
                    rating: item?.doctorDetails?.rating || 5,
                    distance: "1.5km from you",
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
