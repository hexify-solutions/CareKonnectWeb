type AppointmentInfo = {
  date?: string
  status?: "upcoming" | "passed"
  longDate?: string
  formattedTime?: string
  fullLongDate?: string
  timeZoneName?: string
  timeZoneAbbreviation?: string
}

function formatAppointmentDate(appointmentStartAt: string): AppointmentInfo {
  if (!appointmentStartAt) return {}
  const now = new Date()
  const startDate = new Date(appointmentStartAt)

  const timeZone = "Africa/Lagos"

  // Time: 2:32PM (no space before AM/PM)
  const optionsTimeShort: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  }

  const time = startDate
    .toLocaleTimeString("en-US", optionsTimeShort)
    .replace(" ", "")
    .toUpperCase()

  // Date: Apr. 29, 2025
  const optionsDateShort: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone,
  }

  const formattedDate = startDate?.toLocaleDateString("en-US", optionsDateShort)

  // Long date: Tue, Mar 12, 2025
  const optionsLongDate: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone,
  }

  const longDate = startDate?.toLocaleDateString("en-US", optionsLongDate)

  // Full long date: Monday, September 25, 2024
  const fullLongDate = startDate?.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone,
  })

  // Formatted time: 3:00 PM
  const formattedTime = startDate?.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  })

  // Full time with time zone name
  const formatterWithTimeZone = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
    timeZoneName: "long",
  })

  const formatterWithAbbreviation = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
    timeZoneName: "short",
  })

  // Example output: "3:00 PM West Africa Standard Time"
  const partsLong = formatterWithTimeZone?.formatToParts(startDate)
  const partsShort = formatterWithAbbreviation?.formatToParts(startDate)

  const timeZoneName =
    partsLong?.find((part) => part.type === "timeZoneName")?.value || ""
  const timeZoneAbbreviation =
    partsShort?.find((part) => part.type === "timeZoneName")?.value || ""

  const status: "upcoming" | "passed" = startDate > now ? "upcoming" : "passed"

  return {
    date: `${time} ${timeZoneAbbreviation} | ${formattedDate}`,
    status,
    longDate,
    formattedTime,
    fullLongDate,
    timeZoneName,
    timeZoneAbbreviation,
  }
}

export default formatAppointmentDate;
