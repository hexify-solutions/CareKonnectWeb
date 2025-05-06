"use client";


import SearchNotificationsAndFilter from "@/components/search/searchNotifications";
import NotificationCard from "../cards/notificationCard";
import { notifications } from "../cards/notificationsData";
import NotificationTab from "../notificationTab";
import React from "react";
import style from "./notificationDropdown.module.css";

const NotificationDropdown = () => {

  return (
    <div className={style.wrapper}>
      <SearchNotificationsAndFilter 
        search=""
        searchCategory=""
        onSubmitSearchHandler={() => {}}
        onSelectFilterHandler={() => {}}
      />
      <NotificationTab />

    
      <div className={style.push}>
        {["Nov 20, 2024", "Nov 19, 2024"].map((dateGroup) => (
          <div key={dateGroup} className={style.notification}>
            <h6 className={style.header}>
              {dateGroup === "Nov 20, 2024" ? "Today Nov 20, 2024" : "Yesterday Nov 19, 2024"}
            </h6>
            {notifications.length > 0 ? (
              notifications.filter((item) => item.date === dateGroup).map((note) => (
                <NotificationCard key={note.id} {...note} />
              ))
            ) : (
              <div className={style.blank}>No notifications</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationDropdown;
