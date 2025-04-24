import EmergencyContactForm from "@/components/profile/emergencyContactForm"
import { revalidate } from "@/http/user/serverAction"

import styles from "../page.module.css"
import { getEmergencyContact } from "@/http/user/serverAction"

const EmergencyContact = async () => {
  const contact = await getEmergencyContact()
  return (
    <div className={styles.formWrapper} >
      <EmergencyContactForm revalidate={revalidate} contact={contact} />
    </div>
  )
}

export default EmergencyContact
