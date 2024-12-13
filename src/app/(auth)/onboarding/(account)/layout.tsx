import { CustomTheme } from "@hexify/atoms";
import styles from "./layout.module.css";
import Nav from "../_component/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CustomTheme>
    <div className={styles.wrapper}>
      <div className={styles.navWrapper}>
        <Nav logoVariant="dark" />
      </div>
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  </CustomTheme>
  );
}
