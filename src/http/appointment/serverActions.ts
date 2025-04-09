"use server"
import { cookies } from "next/headers"
import cookieKeys from "@/lib/constants/cookieKeys"
import endPoints from "../endpoints"
import { fetchData } from ".."
import { buildQueryString } from '../../lib/utils/buildQueryStrings';


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

export const getUsersAppointments = async (params = {}) => {
  try {
    const queryString =  buildQueryString(params)
    const cookieStore = await cookies()
    const token = cookieStore.get(cookieKeys.token)?.value

    const url = `${process.env.PUBLIC_URL}/${endPoints?.getUsersAppointments}${queryString ? `?${queryString}` : ""}`

    console.log(url, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.")

    const appointments = await fetchData({
      url,
      errorMessage: "Error fetching appointments:",
      options: {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        next: {
          revalidate: 120,
        },
      },
    })

    return appointments
  } catch (error) {
    console.error("Error in get /appointments:", error)
    throw error
  }
}
