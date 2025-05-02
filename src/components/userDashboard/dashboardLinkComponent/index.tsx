"use client"

import Link from "next/link"
import styles from "./linkComponent.module.css"
import { usePathname } from "next/navigation"
import links from "./linkMap"
import routes from "@/lib/constants/routes"

const DashboardLinkComponent = () => {
  const pathname = usePathname()

  return (
    <ul className={styles.linkWrapper}>
      {links?.map((link) => {
        const isLinkActive = () => {
          if (link?.path === routes?.userDashboard) {
            return pathname === routes?.userDashboard
          } else {
            return pathname?.includes(link?.path)
          }
        }

        return (
          <li
            data-active={isLinkActive?.()}
            key={link?.label}
            className={styles.linkItem}
          >
            <Link href={link?.path}>
              <span>{link?.label}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default DashboardLinkComponent
