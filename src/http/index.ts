// export const fetchData = async (url: string, errorMessage: string) => {
//   try {
//     const response = await fetch(url)
//     if (!response.ok) {
//       throw new Error(errorMessage)
//     }
//     return await response.json()
//   } catch (error) {
//     console.error(errorMessage, error)
//     return null
//   }
// }


import { cookies } from "next/headers";

export const fetchData = async (url: string, errorMessage?: string) => {
  try {
    const cookieStore =  await cookies(); // Get cookies on the server
    const token = cookieStore.get("auth_token")?.value; // Extract token
    console.log(token, "this is the token >>>>>>>>> ")

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}), // Attach token if it exists
      },
    });

    if (!response.ok) {
      throw new Error(errorMessage || "Error")
    }

    return await response.json();
  } catch (error) {
    console.error(errorMessage, error);
    return null;
  }
};
