import { Modal, CircleCheckIcon, CancelIcon, Button  } from "@hexify/atoms";
import Link from "next/link";
import styles from "./paymentSuccessModal.module.css";

const PaymentSuccessModal = ({ open = false, cancelHandler, viewReceiptHandler }) => {
  return (
    <Modal open={open}>
      <div className={styles.wrapper}>
        <div className={styles.btnWrapper}>
          <aside className={styles.iconWrapper}>
            <CircleCheckIcon />
          </aside>
          <button onClick={cancelHandler} className={styles.cancelButton}>
            <CancelIcon type="small" />
          </button>
        </div>
        <div className={styles.infoWrapper}>
          <h4 className={styles.heading}>Payment Successfully made!</h4>
          <div>
            We’re pleased to inform you that your payment of ₦26,878.67 has been
            successfully processed. A notification will be sent to you once an
            update is made on your bookings.
          </div>
          <div className={styles.actionBtnWrapper}>
            <Button type="button" onClick={viewReceiptHandler} variant="contained" rounded>View receipt</Button>
            <Link href="/appointment/details/slug">
            
            <Button variant="contained"  className={styles.appointmentBtn} rounded>Go to appointments</Button>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentSuccessModal;
