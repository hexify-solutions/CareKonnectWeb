"use server"
import { cookies } from "next/headers"
import cookieKeys from "@/lib/constants/cookieKeys"
import endPoints from "../endpoints"
import tags from "../tags"
import { fetchData } from ".."


const getToken = async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get(cookieKeys.token)?.value
    
    return token
}

export const getUserStats = async () => {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(cookieKeys.token)?.value

    const url = `${process.env.PUBLIC_URL}${endPoints?.stats}`

    const stats = await fetchData({
      url,
      errorMessage: "Error fetching user stats:",
      options: {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    })

    return stats?.data
  } catch (error) {
    console.error("Error in get dashboard/stats:", error)
    throw error
  }
}


export const getUserVitals = async () => {
  try {
   
    const token = await getToken()
    const url = `${process.env.PUBLIC_URL}${endPoints?.getUserVitals}`

    const vitals = await fetchData({
      url,
      errorMessage: "Error fetching user vitals:",
      options: {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        next: {
          revalidate: 3600,
          tags: [tags.userVitals]
        }
      },
    })

    return vitals?.data

  } catch (error) {
    console.error("Error in get /vitals:", error)
    throw error
  }
}

export const getEmergencyContact = async () => {
  try {
   
    const token = await getToken()
    const url = `${process.env.PUBLIC_URL}/${endPoints?.getEmergencyContact}`

    const contact = await fetchData({
      url,
      errorMessage: "Error fetching emergency contact:",
      options: {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        next: {
          revalidate: 3600,
          tags: [tags.emergencyContact]
        },
      },
    })
    return contact?.data?.[0]
  } catch (error) {
    console.error("Error in get /emergency:", error)
    throw error
  }
}


import { revalidateTag } from 'next/cache'

export async function revalidate(tag: string) {
  revalidateTag(tag)
}