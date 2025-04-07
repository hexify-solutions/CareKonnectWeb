"use server"
import { cookies } from "next/headers"
import cookieKeys from "@/lib/constants/cookieKeys"
import endPoints from "../endpoints"
import { fetchData } from ".."

export const getAppointmentById = async (id: string) => {

  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(cookieKeys.token)?.value

    const url = `${process.env.PUBLIC_URL}${endPoints?.getAppointment(id)}`

    const appointment = await fetchData({
      url,
      errorMessage: "Error fetching appointment details:",
      options: {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    })

    return appointment?.data
  } catch (error) {
    console.error("Error in get appointment by id:", error)
    throw error
  }
}
