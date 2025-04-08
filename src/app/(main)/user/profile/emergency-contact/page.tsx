import EmergencyContactForm from "@/components/profile/emergencyContactForm"
import { revalidateUserStats } from "@/http/user/serverAction"

import styles from "../page.module.css"
import { getEmergencyContact } from "@/http/user/serverAction"

const EmergencyContact = async () => {
  const contact = await getEmergencyContact()
  return (
    <div className={styles.formWrapper} >
      <EmergencyContactForm revalidateUserStats={revalidateUserStats} contact={contact} />
    </div>
  )
}

export default EmergencyContact
