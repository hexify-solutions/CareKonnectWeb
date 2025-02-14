import type { Metadata } from "next";
import QueryProvider from "@/context/reactQueryProvider";
import "../styles/global.css";
import AuthProvider from "@/context/auth";
import SecureStorageProvider from "@/context/storage";
import ToastProvider from "@/context/toastProvider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Care Konnect",
  description: "All in one health care system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>
          <Suspense fallback={<>Loading</>}>
            <QueryProvider>
              <SecureStorageProvider>
                <AuthProvider>
                  <main>{children} </main>
                </AuthProvider>
              </SecureStorageProvider>
              <ToastProvider />
            </QueryProvider>
          </Suspense>
        </>
      </body>
    </html>
  );
}
