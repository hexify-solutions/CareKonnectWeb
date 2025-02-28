"use client";

import useDropdown from "@/hooks/useDropdown";
import Link from "next/link";
import styles from "./userProfileDropdown.module.css";
import { UserIcon, DashboardIcon, Avatar, IconLoader, iconLoaderMap } from "@hexify/atoms";
import routes from "@/lib/constants/routes";
import { useAuthContext } from "@/context/auth";

const UserProfileDropdown = () => {
  const { isOpen, toggle, dropdownRef } = useDropdown();
  const {profile} = useAuthContext();

  return (
    <div ref={dropdownRef} className={styles.wrapper}>
      <button onClick={toggle} className={styles.toggle}>
        <Avatar
          displayText={`${profile?.firstName} ${profile?.lastName}`}
          size="xsmall"
          //@ts-ignore
          src={profile?.image}
        ></Avatar>
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <Link href={routes.userDashboard} className={styles.dropdownListItem}>
            <UserIcon /> <span>Dashboard</span>
          </Link>
          <Link href={routes.profile} className={styles.dropdownListItem}>
            <UserIcon /> <span>Profile</span>
          </Link>
          <Link href={routes.logout} className={styles.dropdownListItem}>
          <IconLoader path={"logout"} />
          <span>Logout</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
