import styles from "./innovationBanner.module.css"
import { GlassesIcon, StethoscopeIcon, ToothIcon } from "@hexify/atoms"
import INNOVATION_ONE from "./assets/innovation_1.png"
import DATA_MANAGEMENT from "./assets/data_management.png"
import FILE_CHECKMARK from "./assets/file_checkmark.png"
import CHARGING_STATION from "./assets/charging-station 1.png"
import SERVICE from "./assets/grid.png"
import Image from "next/image"
import clsx from "clsx"
import { isFeatureEnabledAsync } from "../../../../../packages/engine/brand/feature"

const InnovationBanner = async () => {
  const isFeatureEnabled = await isFeatureEnabledAsync()

  return (
    <div>
      <div className={styles.header}>
        <span> We are revolutionalising healthcare </span>
        <aside className={clsx(styles.iconWrapper, styles.doctor)}>
          <StethoscopeIcon />
        </aside>
        delivery{" "}
        <aside className={clsx(styles.iconWrapper, styles.tooth)}>
          <ToothIcon />
        </aside>{" "}
        <span className={styles.emp}>by bringing expertise</span>
        <aside className={clsx(styles.iconWrapper, styles.glasses)}>
          <GlassesIcon />
        </aside>{" "}
        through our telemedicine platform{" "}
        <span className={styles.emp}>to your doorstep</span>
      </div>

      {isFeatureEnabled("display_features") && (
        <div className={styles.showCase}>
          <div className={styles.showCaseSection}>
            <div className={clsx(styles.showCaseItem, styles.innovation)}>
              <div className={styles.lead}>Innovative</div>
              <span className={styles.subLead}>
                Enhances healthcare access for underserved populations via
                online consultations, mobile apps, and remote monitoring.
              </span>
              <aside className={styles.showCaseImageWrapper}>
                <Image src={INNOVATION_ONE} alt="innovation one" fill />
              </aside>
            </div>
            <div className={clsx(styles.showCaseItem, styles.integration)}>
              <div className={styles.lead}>Integration</div>
              <span className={styles.subLead}>
                Seamless coordination of services and information across various
                providers and systems
              </span>
              <aside className={styles.showCaseImageWrapper}>
                <Image src={DATA_MANAGEMENT} alt="integration" fill />
              </aside>
            </div>
            <div className={clsx(styles.showCaseItem, styles.compliant)}>
              <div className={styles.lead}>Compliant</div>
              <span className={styles.subLead}>
                Adherence to established laws, regulations, guidelines, and
                standards designed to ensure patient safety, privacy, and
                quality of care.
              </span>
              <aside className={styles.showCaseImageWrapper}>
                <Image src={FILE_CHECKMARK} alt="compliant" fill />
              </aside>
            </div>
          </div>
          <div className={clsx(styles.showCaseSectionBottom, "max-sm:hidden")}>
            <div
              className={clsx(styles.showSectionBottomItem, styles.plugPlay)}
            >
              <div className={styles.lead}>Plug & Play</div>
              <span className={styles.subLead}>
                Technology that is easily integrated into existing workflows or
                infrastructures without extensive setup or configuration
              </span>
              <aside className={styles.showCaseImageWrapper}>
                <Image src={CHARGING_STATION} alt="innovation one" fill />
              </aside>
            </div>
            <div className={clsx(styles.showSectionBottomItem, styles.service)}>
              <div className={styles.lead}>Full Service Healthcare</div>
              <span className={styles.subLead}>
                comprehensive approach that offers a wide range of medical
                services under one umbrella.
              </span>
              <aside className={styles.showCaseImageWrapper}>
                <Image src={SERVICE} alt="service" fill />
              </aside>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default InnovationBanner
