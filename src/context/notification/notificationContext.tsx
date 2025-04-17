"use client";

import { createContext, useContext } from "react";

interface NotificationContextProps {
  notifications: Notification[];
  unReadCount: number;
  markAsRead: (id: string) => void;
  deleteNotification: (id: string) => void;
}

export const NotificationContext = createContext<NotificationContextProps | null>(null);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }
  return context;
};


