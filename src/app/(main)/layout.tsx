import NavigationComponent from "@/components/navigation"
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
    <>
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
    </>
  )
}

export default RootLayout
