import NavigationComponent from "@/components/navigation";
import styles from "./layout.module.css";
import { Suspense } from "react";

export const metadata = {
  title: "Care Connect User Profile",
  description: "All in one health care system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<>Loading</>}>
      <main className={styles.main}>
        <>{children}</>
      </main>
    </Suspense>
  );
}
