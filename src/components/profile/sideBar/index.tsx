"use client";

import sideBarMap from "./sidebarMap.json";
import Link from "next/link";
import { IconLoader, iconLoaderMap } from "@hexify/atoms";
import useQueryParams from "@/hooks/useQueryParams";
import styles from "./sideBar.module.css";
import { withSuspense } from '@/hoc';

const SideBar = () => {
  const { pathname } = useQueryParams();

  return (
    <div className={styles.sidebar}>
      {sideBarMap?.linkGroups?.map((linkGroup) => {
        return (
          <>
            <span className={styles.heading}>{linkGroup?.label}</span>
            <ul className={styles.linkList}>
              {linkGroup?.links?.map((link) => {
                return (
                  <li className={styles.linkItem} data-active={pathname === link.path}>
                    <Link href={link?.path}>
                      <IconLoader path={iconLoaderMap[link?.icon] || ""} />{" "}
                      <span>{link?.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default withSuspense(SideBar);
