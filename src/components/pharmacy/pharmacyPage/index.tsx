"use client"

import styles from "./pharmacyPage.module.css"
import { Breadcrumb } from "@hexify/atoms"
import PharmacyProductList from "@/components/pharmacy/pharmacyProductList"
import PharmacyActions from "@/components/pharmacy/pharmacyActions"
import { useState } from "react"
import PharmacySectionTabs from "../pharmacySectionTabs"
import PharmacyReview from "../pharmacyReview"
import PharmacyAboutUsCard from "../pharmacyAboutUsCard"
import clsx from "clsx"
import PharmacyBanner from "../pharmacyBanner"

const PharmacyPage = ({ slug, pharmacy }) => {
  const [activeSection, setActiveSection] = useState("product")
  return (
    <div>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        <Breadcrumb
          excludePaths={["pharmacy"]}
          renamePaths={{ [slug]: pharmacy?.name || "Pharmacy" }}
        />
        <PharmacyBanner pharmacy={pharmacy} />
        <div className={styles.actionsWrapper}>
          <PharmacyActions />
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.tabSection}>
            <PharmacySectionTabs
              setActiveSection={(section) => setActiveSection(section)}
            />
          </div>
        </div>
        {activeSection === "product" && (
          <div className={styles.productList}>
            {<PharmacyProductList pharmacy={pharmacy} />}
          </div>
        )}
        {activeSection === "about" && (
          <div className={styles.productList}>
            <PharmacyAboutUsCard pharmacy={pharmacy} />
          </div>
        )}
        {activeSection === "review" && (
          <div className={styles.productList}>
            <PharmacyReview />
          </div>
        )}
      </div>
    </div>
  )
}

export default PharmacyPage
