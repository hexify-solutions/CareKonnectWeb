import "@hexify/engine/brand/initialize.server"
import type { Metadata } from "next"
import QueryProvider from "@/context/reactQueryProvider"
import "../styles/global.css"
import AuthProvider from "@/context/auth"
import SecureStorageProvider from "@/context/storage"
import ToastProvider from "@/context/toastProvider"
import UserLocationProvider from "@/context/location"
import CartProvider from "@/context/cart"
import { CustomTheme } from "@hexify/atoms"

export const metadata: Metadata = {
  title: "Care Konnect",
  description: "All in one health care system",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#F8FAF0" }}>
        <CustomTheme>
          <UserLocationProvider>
            <SecureStorageProvider>
              <QueryProvider>
                <AuthProvider>
                  <CartProvider>
                    <main>{children} </main>
                  </CartProvider>
                </AuthProvider>
                <ToastProvider />
              </QueryProvider>
            </SecureStorageProvider>
          </UserLocationProvider>
        </CustomTheme>
      </body>
    </html>
  )
}
