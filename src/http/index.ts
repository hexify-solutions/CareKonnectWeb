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



export const fetchData = async (url: string, errorMessage?: string) => {
  try {

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
