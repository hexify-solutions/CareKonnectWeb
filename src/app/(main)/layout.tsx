import NavigationComponent from "@/components/navigation"
import { CustomTheme } from "@hexify/atoms"
import { Footer } from "@hexify/components"
import footerMap from "../../data/footerMap"
import styles from "./layout.module.css"
// import NotificationProvider from "@/context/notification/notificationProvider";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CustomTheme>
      {/* <NotificationProvider> */}
      <main className={styles.main}>
        <header>
          <NavigationComponent />
        </header>
        <>{children}</>
        <div className={styles.footer}>
          <Footer
            terms={footerMap()?.terms}
            copyright={footerMap()?.copyright}
            socialLinks={footerMap()?.socialLinks}
            linkGroups={footerMap()?.linkGroup}
          />
        </div>
      </main>
      {/* </NotificationProvider> */}
    </CustomTheme>
  )
}

export default RootLayout
