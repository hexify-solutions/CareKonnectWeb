"use server"
import endPoints from "../endpoints"
import { fetchData } from ".."

export const getPharmacyById = async (id: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_URL}/${endPoints?.getPharmacy(id)}`

    const pharmacies = await fetchData({
      url,
      errorMessage: "Error fetching pharmacies:",
      options: {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 3600,
        },
      },
    })

    return pharmacies?.data
  } catch (error) {
    console.error("Error in get pharmacies by id:", error)
    throw error
  }
}
