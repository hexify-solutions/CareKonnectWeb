import styles from "./specialistList.module.css"
import Link from "next/link"
import { HospitalCard, DoctorCard } from "@hexify/components"
import routes from "@/lib/constants/routes"
import { getTopSpecialists } from "@/http/globals/serverActions"
import { getStoredUserLocation } from "@/lib/utils/getStoredUserLocation"
import { calculatePatientDistance } from "@hexify/providers/src/lib/utils"

type SpecialistListProps = {
  size?: "small"
}

const fallbackImage =
  "https://images.pexels.com/photos/12311410/pexels-photo-12311410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

const specialistRenderers: Record<
  string,
  (
    specialist: any,
    coords: GeolocationPosition["coords"],
    size?: "small"
  ) => JSX.Element | null
> = {
  pharmacy: (specialist, coords, size) => {
    return (
      <li key={specialist.id} className={styles.listItem}>
        <Link href={routes.pharmacy(specialist.pharmacyDetailsId)}>
          <HospitalCard
            size={size}
            image={specialist.pharmacyDetails?.avatarUrl}
            name={specialist.pharmacyDetails?.name}
            location={specialist?.pharmacyDetails?.location}
            tags={["Pharmacy"]}
          />
        </Link>
      </li>
    )
  },

  doctor: (specialist, coords, size) => {
    const doctorId = specialist?.doctorDetails?.id
    const fullName =
      `${specialist?.firstName ?? ""} ${specialist?.lastName ?? ""}`.trim()
    const avatar = specialist?.avatarUrl || fallbackImage
    const tags =
      specialist?.specializations?.length > 0
        ? [specialist?.specializations[0].name]
        : []
    if (specialist?.specializations.length > 1) {
      tags.push(`+${specialist?.specializations.length - 1}`)
    }

    const distance = calculatePatientDistance(specialist, { location: coords })
    return (
      <li key={doctorId || specialist.id} className={styles.listItem}>
        <Link
          href={`${routes.doctor(specialist.doctorDetails?.id)}?availability=${specialist?.doctorDetails?.id}`}
        >
          <DoctorCard
            size={size}
            info={{
              label: fullName || "Doctor",
              rating: specialist?.rating || 5,
              distance: `${distance} from you`,
              tags,
            }}
            image={avatar}
          />
        </Link>
      </li>
    )
  },
}

const renderSpecialistItem = (
  specialist: any,
  coords: GeolocationPosition["coords"],
  size?: "small"
): JSX.Element | null => {
  const renderer = specialistRenderers[specialist.userType]
  return renderer ? renderer(specialist, coords, size) : null
}

const SpecialistList = async ({ size }: SpecialistListProps) => {
  const response = await getTopSpecialists()
  const coords = await getStoredUserLocation()

  const specialists = response?.data ?? []
  return (
    <div className="inner-wrapper">
      <ul className={styles.list}>
        {specialists.map((specialist: any) =>
          renderSpecialistItem(specialist, coords, size)
        )}
      </ul>
    </div>
  )
}

export default SpecialistList
