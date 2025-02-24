import { AvatarWithName } from "@hexify/components";
import styles from "./supportCard.module.css";
import { Chip } from "@hexify/atoms";
import clsx from "clsx";

const SupportCard = ({
  openTicketHandler,
}: {
  openTicketHandler?: () => void;
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.date}>Posted at 12:45 AM</span>
      <div className={styles.ticketInfo}>
        <span>
          Ticket ID# <span>2023-CS123</span>
        </span>
        <Chip
          className={clsx(styles.chip, styles.priorityChip)}
          label="High Priority"
        />
        <Chip
          className={clsx(styles.chip, styles.statusChip)}
          label="Ongoing"
        />
      </div>
      <div className={styles.infoWrapper}>
        <h6 className={styles.heading}>
          How to get refund for cancelled Doctor’s appointment?
        </h6>
        <span className={styles.info}>
          To request a refund for your canceled doctor’s appointment, please
          contact the clinic or hospital directly. Provide your appointment
          details, cancellation confirmation, and payment method. Many
          facilities have refund policies in place and will guide you through
          the process
        </span>
      </div>
      <div className={styles.cardFooter}>
        <AvatarWithName name="JohnSnow" size="xsmall" />
     {!!openTicketHandler &&   <button onClick={openTicketHandler} className={styles.openTicketBtn}>
          Open Ticket
        </button>}
      </div>
    </div>
  );
};

export default SupportCard;
