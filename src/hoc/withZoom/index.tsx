"use client"

import { useRef, useEffect, useState } from "react"

export const withZoom = (WrappedComponent) => {
  const Hoc = (props: any) => {
    const [zoomSignature, setZoomSignature] = useState(null)
    const zoomElementRef = useRef(null)
    const clientRef = useRef(null)

    const generateZoomSignature = async (meeting: string) => {
      const response = await fetch("/api/zoom/generateSignature", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meetingId: meeting,
          role: 0,
        }),
      })

      if (!response?.ok) {
        console.log("error generating zoom signature")
        return
      }

      const data = await response.json()

      setZoomSignature(data?.signature)
    }

    useEffect(() => {
      if (!props?.meetingId) return
      generateZoomSignature(props?.meetingId || "")
    }, [])

    useEffect(() => {

        if (!zoomSignature && !zoomElementRef?.current) return;
(async () => {
    console.log(zoomSignature, ">>>>>>>>>>>")
        const ZoomEmbed = await (
          await import("@zoom/meetingsdk/embedded")
        ).default
        const client = ZoomEmbed?.createClient()
        console.log(client, zoomElementRef, '>>>>>>>>>>>>>>>>')
        if (zoomElementRef.current && client) {
          await client.init({
            language: "en-US", // Or your desired language
            zoomAppRoot: zoomElementRef.current,
          })
          await client.join({
            signature: zoomSignature, // Replace with your Zoom signature
            sdkKey: "w4uans0hR1OPJY_Du6oTFA", // Replace with your SDK key
            meetingNumber: props?.meetingId, // Replace with your meeting number
            userName: "Innocent Edosa", // Replace with the user's name
            // Add other join parameters as needed
          })
        }
      })()
    }, [zoomSignature])

    return <WrappedComponent {...props} zoomElementRef={zoomElementRef} />
  }

  return Hoc
}
