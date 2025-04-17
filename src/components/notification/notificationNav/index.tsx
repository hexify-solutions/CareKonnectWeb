"use client";

import { BellIcon } from "@hexify/atoms";
import NotificationDropdown from "../notificationDropDown";
import useDropdown from "@/hooks/useDropdown";
import { useNotification } from "@/context/notification/notificationContext";
import style from "./notificationNav.module.css";


const NotificationNav = () => {
    const { isOpen, toggle, dropdownRef } = useDropdown();
    const { unReadCount } = useNotification();

    return (
        <div ref={dropdownRef} className={style.container}>
            <button onClick={toggle} className={style.toggleBtn}>
                <BellIcon />
                {unReadCount > 0 && (
                    <span className={style.count}>{unReadCount}</span>
                )}
            </button>

            {isOpen && (
                <div>
                    <NotificationDropdown />
                </div>
            )}
        </div>
    );
};

export default NotificationNav;