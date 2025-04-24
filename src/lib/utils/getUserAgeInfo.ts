type UserAgeInfo = {
  dateOfBirth?: string
  age?: number
}

export function getUserAgeInfo(dateString: string): UserAgeInfo {
  if(!dateString) return {}
  const dob = new Date(dateString)
  const today = new Date()

  let age = today.getFullYear() - dob.getFullYear()
  const monthDiff = today.getMonth() - dob.getMonth()
  const dayDiff = today.getDate() - dob.getDate()

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--
  }

  const dateOfBirth = dob?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

  return { dateOfBirth, age }
}
