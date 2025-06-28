"use server"
import endPoints from "../endpoints"
import { fetchData } from ".."

export const getDoctor = async (id: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_URL}/${endPoints?.getDoctor(id)}`

    const doctor = await fetchData({
      url,
      errorMessage: "Error fetching  doctor:" + id,
      options: {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 3600,
        },
      },
    })

    return doctor
  } catch (error) {
    console.error("Error in get doctor by id:", error)
    throw error
  }
}
