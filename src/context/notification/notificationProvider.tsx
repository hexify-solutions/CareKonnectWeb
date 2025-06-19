"use client"

import React, { useEffect, useState } from "react"
import { messaging, getToken, onMessage } from "@/firebase/firebaseConfig"
import api from "@/http/api"
import { NotificationContext } from "./notificationContext"

interface Notification {
  id: string
  title: string
  body: string
  data: {
    action: string
    action_url: string
  }
  is_read: boolean
  created_at: string
}

interface NotificationProviderProps {
  children: React.ReactNode
}

const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState(null)
  const [unReadCount, setUnreadCount] = useState(0)

  const fetchNotifications = async () => {
    try {
      const response = await api.get<Notification[]>("/v1/notifications")
      setNotifications(response)
      setUnreadCount(
        response.filter((notification) => !notification.is_read).length
      )
    } catch (error) {
      console.error("Failed to fetch notifications", error)
    }
  }

  const markAsRead = async (id: string) => {
    try {
      await api.patch(`/v1/notifications/${id}/mark-as-read`)
      fetchNotifications()
    } catch (error) {
      console.error("Error marking notification as read", error)
    }
  }
  const deleteNotification = async (id: string) => {
    try {
      await api.delete(`/v1/notifications/${id}`)
      fetchNotifications()
    } catch (error) {
      console.error("Error deleting notification", error)
    }
  }

  useEffect(() => {
    Notification.requestPermission().then(async (permission) => {
      if (permission === "granted") {
        const token = await getToken(messaging, {
          vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
        })

        return token
      } else {
        console.error("Notification permission denied.")
      }
    })

    onMessage(messaging, (payload) => {
      fetchNotifications()
    })

    fetchNotifications()
  }, [])

  return (
    <NotificationContext.Provider
      value={{ notifications, unReadCount, markAsRead, deleteNotification }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider
