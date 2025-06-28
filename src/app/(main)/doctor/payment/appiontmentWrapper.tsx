import AppointmentDetailCard from "@/components/appointment/appointmentDetailCard"
import { fetchData } from "@/http"
import { cookies } from "next/headers"
import cookieKeys from "@/lib/constants/cookieKeys"
import routes from "@/lib/constants/routes"

const AppointmentDetails = async ({ id }) => {
  const cookieStore = await cookies()
  const token = cookieStore.get(cookieKeys.token)?.value

  const appointment = await fetchData({
    url: `${process.env.NEXT_PUBLIC_URL}${routes?.appointmentById(id)}`,
    errorMessage: "Error fetching doctor details:",
    options: {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  })

  return <AppointmentDetailCard appointment={appointment?.data} />
}

export default AppointmentDetails
