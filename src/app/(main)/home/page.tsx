import Categories from "../_components/categories"
import SpecialistList from "@/components/specialistList"
import SignupBanner from "../_components/signupBanner"
import Hero from "@/components/hero"
import ScrollableBanner from "../_components/scrollableBanner"
import InnovationBanner from "@/components/innovationBanner"
import styles from "./page.module.css"
import clsx from "clsx"
import { Suspense } from "react"

export default function HomePage() {
  return (
    <>
      <div className={styles.heroWrapper}>
        <Hero />
      </div>
      <div className={styles.bannerWrapper}>
        <ScrollableBanner />
      </div>
      <div>
        <Categories />
      </div>
      <div className={clsx("inner-wrapper", styles.specialistWrapper)}>
        <h3 className={styles.heading} arial-label="Top Specialist">
          Top Specialists
        </h3>
        <Suspense fallback={<div>Loading</div>}>
          <SpecialistList />
        </Suspense>
        <div className={styles.innovationBannerWrapper}>
          <InnovationBanner />
        </div>
      </div>
      <SignupBanner />
    </>
  )
}
