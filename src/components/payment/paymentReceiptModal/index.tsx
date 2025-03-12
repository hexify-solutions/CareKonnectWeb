import { CancelIcon, Logo, Modal, Button } from "@hexify/atoms";
import styles from "./paymentReceiptModal.module.css";
import {
  ReceiptsIcon,
  FacebookIcon,
  Instagram,
  Twitter,
  Linkedin,
} from "@hexify/atoms";

const PaymentReceiptModal = ({ open, cancelHandler }) => {
  return (
    <Modal open={open} onClose={cancelHandler}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <aside className={styles.logoWrapper}>
              <Logo variant="dark" />
            </aside>
            <button className={styles.cancelBtn} onClick={cancelHandler}>
              <CancelIcon />
            </button>
          </header>
          <div className={styles.detailsWrapper}>
            <aside>
              <ReceiptsIcon />
            </aside>
            <div className={styles.heading}>Payment Receipt!</div>
            <div className={styles.info}>
              <span>Hey Martha,</span>
              <span>
                We have successfully processed your payment for a booking
              </span>
            </div>
            <div className={styles.paymentSummary}>
              <span className={styles.paymentLabel}>Total Payment</span>
              <span>NGN 26,655.87</span>
            </div>
            <div className={styles.summaryWrapper}>
              <div className={styles.summarySection}>
                <div className={styles.summaryInfo}>
                  <span>Payment Method</span>
                  <span className={styles.summaryValue}>Card Payment</span>
                </div>
                <div className={styles.summaryInfo}>
                  <span>Received by</span>
                  <span className={styles.summaryValue}>
                    LEX Medicals Limited{" "}
                  </span>
                </div>
                <div className={styles.summaryInfo}>
                  <span>Ref Number</span>
                  <span className={styles.summaryValue}>
                    0069784210000085752257
                  </span>
                </div>
                <div className={styles.summaryInfo}>
                  <span>Account Name</span>
                  <span className={styles.summaryValue}>
                    Martha Blackwood G.
                  </span>
                </div>
                <div className={styles.summaryInfo}>
                  <span>Card Number</span>
                  <span className={styles.summaryValue}>
                    Ending with ....1234
                  </span>
                </div>
              </div>
              <div className={styles.summarySection}>
                <div className={styles.summaryInfo}>
                  <span>Payment Time</span>
                  <span className={styles.summaryValue}>
                    Monday, 25 Feb 2025, 13:22
                  </span>
                </div>
                <div className={styles.summaryInfo}>
                  <span>Description</span>
                  <span className={styles.summaryValue}>
                    I am having chronic headache for days now, and I’ve tried
                    different prescriptions.
                  </span>
                </div>
                <div className={styles.summaryInfo}>
                  <span>Billing Address</span>
                  <span className={styles.summaryValue}>
                    13, Jacob Street, Fadeyi, Lagos
                  </span>
                </div>
                <div className={styles.summaryInfo}>
                  <span>Payment for</span>
                  <span className={styles.summaryValue}>
                    Booking Dr. Johnson Awe
                  </span>
                </div>
                <div className={styles.summaryInfo}>
                  <span>Amount</span>
                  <span className={styles.summaryValue}>NGN 26,655.87</span>
                </div>
              </div>
            </div>
            <div className={styles.downloadWrapper}>
              <div className={styles.downloadInfo}>
                <span>Best regards,</span>
                <span>CareKonnect Team</span>
              </div>
              <Button variant="contained" rounded size="large">
                <span>Download</span>
              </Button>
            </div>
            <footer className={styles.footer}>
              <div>
                Need help?{" "}
                <span className={styles.emp}>Contact our support team</span>or
                no longer interested in the booking? Talk to the{" "}
                <span className={styles.emp}>Help Center.</span> Want to give us
                feedback? Let us know what you think on our{" "}
                <span className={styles.emp}> feedback page</span>.
              </div>
              <ul className={styles.iconWrapper}>
                <li>
                  <a href="https://www.facebook.com">
                    <FacebookIcon variant="boarded" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com">
                    <Linkedin variant="boarded" />
                  </a>
                </li>
                <li>
                  <a href="https://www.x.com">
                    <Twitter variant="boarded" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <Instagram variant="boarded" />
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentReceiptModal;
