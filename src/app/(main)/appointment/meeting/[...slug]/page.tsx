"use client"
import MeetingComponent from "@/components/appointment/meeting"
import { useParams } from "next/navigation"
import { withSuspense } from '@/hoc';

const AppointmentMeeting = ({ params }) => {
  const paramsData = useParams()

  console.log(paramsData)

  function parseKeyValueArray(arr: string[]) {
    const result = {
      z: "",
    }

    arr.forEach((item) => {
      const [key] = item.split("-")
      result[key] = item.slice(key.length + 1)
    })

    return result
  }
  const parsedParams = parseKeyValueArray(paramsData?.slug as string[])

  console.log(parsedParams, "parsed params")

  if (!parsedParams?.z) {
    return <div>Invalid meeting id</div>
  }

  return (
    <div>
      <MeetingComponent meetingId={parsedParams?.z} />
    </div>
  )
}

export default  withSuspense(AppointmentMeeting)
