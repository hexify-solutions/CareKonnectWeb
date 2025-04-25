"use client"

import { Tabs } from "@hexify/atoms"
import { useEffect } from "react"
import { withSuspense } from "@/hoc"

const Component = ({ path, setActiveSection }: any) => {
  useEffect(() => {
    setActiveSection?.(path)
  }, [])

  return null
}

const PharmacySectionTabs = (props) => {
  const tabs = [
    {
      label: "All products",
      Component: () => <Component {...props} path="product" />,
    },
    {
      label: "About",
      Component: () => <Component {...props} path="about" />,
    },
    {
      label: "Reviews",
      Component: () => <Component {...props} path="review" />,
    },
  ]
  return <Tabs tabs={tabs}></Tabs>
}

export default withSuspense(PharmacySectionTabs)
