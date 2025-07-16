"use client"
import Communications from "../../../../../../../packages/communications/[slug]/layout"
import { useAuthContext } from "@/context/auth"

export default function CallPage(props) {
  const { profile } = useAuthContext()

  return (
    <div className={""}>
      <Communications user={profile} />
    </div>
  )
}
