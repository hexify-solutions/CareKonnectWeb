import { Suspense } from "react"
import RecentPrescriptions from "./components/recentPrescriptions"
import PrescriptionHistory from "./components/prescriptionHistory"

const Prescriptions = () => {
  return (
    <div>
      <Suspense>
        <RecentPrescriptions />
      </Suspense>
      <Suspense>
        
        <PrescriptionHistory />
      </Suspense>
    </div>
  )
}

export default Prescriptions
