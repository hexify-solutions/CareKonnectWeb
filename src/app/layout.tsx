
import type { Metadata } from "next";
import "../styles/global.css";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
