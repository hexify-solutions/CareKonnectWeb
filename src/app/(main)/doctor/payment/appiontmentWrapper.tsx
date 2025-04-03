"use client"
import AppointmentDetailCard from "@/components/appointment/appointmentDetailCard"
import { useAppointmentQuery } from "@/http/appointment/query"

const AppointmentDetails = ({ id }) => {
  const appointment = useAppointmentQuery({ id })

  console.log(appointment?.data, "this is the appointment data here")

  return <AppointmentDetailCard appointment={appointment?.data}/>
}

export default AppointmentDetails
