"use server"
import endPoints from "../endpoints"
import { fetchData } from ".."

export const getTopSpecialists = async () => {
  try {
    const url = `${process.env.PUBLIC_URL}/${endPoints?.getTopSpecialists}`

    const topSpecialist = await fetchData({
      url,
      errorMessage: "Error fetching  top specialist:",
      options: {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 3600,
        },
      },
    })

    return topSpecialist?.data
  } catch (error) {
    console.error("Error in get topSpecialist by id:", error)
    throw error
  }
}
