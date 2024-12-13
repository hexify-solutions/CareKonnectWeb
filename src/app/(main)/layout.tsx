import { Navigation } from "@hexify/components";
import navigationMap from "../../data/navigationMap.json";
import { CustomTheme } from "@hexify/atoms";
import { Footer } from "@hexify/components";
import footerMap from "../../data/footerMap.json";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CustomTheme>
      <main className={styles.main}>

      <header>
        <Navigation links={navigationMap.links} />
      </header>
      <>{children}</>
      <div className={styles.footer}>
        <Footer
          terms={footerMap.terms}
          copyright={footerMap.copyright}
          socialLinks={footerMap.socialLinks}
          linkGroups={footerMap?.linkGroup}
        />
      </div>
      </main>
    </CustomTheme>
  );
}
