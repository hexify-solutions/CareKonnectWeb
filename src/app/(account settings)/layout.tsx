import NavigationComponent from "@/components/navigation";
import { CustomTheme } from "@hexify/atoms";
import styles from "./layout.module.css";

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
    <CustomTheme>
      <main className={styles.main}>
        <header>
          <NavigationComponent />
        </header>
        <>{children}</>
      </main>
    </CustomTheme>
  );
}
