import { Suspense } from "react"
import RecentServices from "./components/recentServices"
import ServiceHistory from "./components/serviceHistory"

const Services = () => {
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <RecentServices />
      </Suspense>
      <ServiceHistory />
    </div>
  )
}

export default Services
