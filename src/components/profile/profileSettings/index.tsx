import { ChevronRight, LockIcon, EmailIcon, AlarmIcon } from "@hexify/atoms";
import { Switch } from "@hexify/atoms";
import styles from "./profileSettings.module.css";

const ProfileSettings = () => {
  return (
    <div>
      <h6 className={styles.heading}>Settings</h6>
      <div className={styles.contentWrapper}>
        <div className={styles.settingCard}>
          <div className={styles.settingCardDetails}>
            <aside className={styles.icon}>
              <LockIcon type="two" />
            </aside>
            <div>
              <div className={styles.lead}>2FA Authentication</div>
              <span className={styles.subLead}>Enable 2FA Authentication</span>
            </div>
          </div>
          <div>
            <ChevronRight />
          </div>
        </div>
        <div className={styles.settingCard}>
          <div className={styles.settingCardDetails}>
            <aside className={styles.icon}>
                <AlarmIcon />
            </aside>
            <div>
              <div className={styles.lead}>SMS Notifications</div>
              <span className={styles.subLead}>Enable SMS Notification</span>
            </div>
          </div>
          <div>
            <Switch />
          </div>
        </div>
        <div className={styles.settingCard}>
          <div className={styles.settingCardDetails}>
            <aside className={styles.icon}>
            <EmailIcon type="outline" />

            </aside>
            <div>
              <div className={styles.lead}>Email Notifications</div>
              <span className={styles.subLead}>Enable Email Notifications</span>
            </div>
          </div>
          <div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
