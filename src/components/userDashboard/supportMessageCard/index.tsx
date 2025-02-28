import styles from "./supportMessage.module.css";
import { AvatarWithName } from "@hexify/components";

const SupportMessageCard = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.date}>Posted at 12:45 AM</span>
      <div className={styles.message}>
        To request a refund for your canceled doctor’s appointment, please
        contact the clinic or hospital directly. Provide your appointment
        details, cancellation confirmation, and payment method. Many facilities
        have refund policies in place and will guide you through the process
      </div>

      <div className={styles.cardFooter}>
        <AvatarWithName name="JohnSnow" size="xsmall" />
      </div>
    </div>
  );
};

export default SupportMessageCard;
