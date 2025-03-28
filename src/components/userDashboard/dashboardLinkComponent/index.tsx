"use client"

import Link from "next/link";
import styles from "./linkComponent.module.css";
import { usePathname } from "next/navigation";
import links from "./linkMap";
const DashboardLinkComponent = () => {
    const pathname = usePathname();

  return (

    <ul className={styles.linkWrapper}>
      {links?.map((link) => {
        return (
          <li data-active={pathname === link?.path} key={link?.label} className={styles.linkItem}>
            <Link href={link?.path} >
              <span>{link?.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DashboardLinkComponent;
