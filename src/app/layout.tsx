import type { Metadata } from "next"
import QueryProvider from "@/context/reactQueryProvider"
import "../styles/global.css"
import AuthProvider from "@/context/auth"
import SecureStorageProvider from "@/context/storage"
import ToastProvider from "@/context/toastProvider"
import UserLocationProvider from "@/context/location"
import CartProvider from "@/context/cart"
import {
  createBranding,
  loadStaticFile,
} from "@hexify/atoms/src/theme/getBranding"
import { CustomTheme } from "@hexify/atoms"
import MaintenancePage from "@hexify/providers/src/components/MaintainanceMode"
import textData from "../../test-data.json"

export const metadata: Metadata = {
  title: "Care Konnect",
  description: "All in one health care system",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = await createBranding()

  return (
    <html lang="en">
      <body style={{ backgroundColor: "#F8FAF0" }}>
        {JSON.stringify(loadStaticFile())}
        <CustomTheme branding={data?.e || !data ? undefined : data}>
          {data?.features?.appDisabled ? (
            <MaintenancePage />
          ) : (
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
          )}
        </CustomTheme>
      </body>
    </html>
  )
}
