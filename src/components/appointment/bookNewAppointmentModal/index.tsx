"use client";

import { CancelIcon, ChevronRight, Modal, Pharmacy } from "@hexify/atoms";
import styles from "./bookNewAppointmentModal.module.css";
import Link from "next/link";

const BookNewAppointmentModal = ({ open, cancelHandler }) => {
  return (
    <div>
      <Modal open={open} onClose={cancelHandler}>
        <div className={styles.wrapper}>
          <button onClick={cancelHandler} className={styles.cancelBtn}>
            <CancelIcon type="two" />
          </button>

          <ul className={styles.listWrapper}>
            <li>
              <Link className={styles.listItemLink} href="/">
                <aside className={styles.icon}></aside>
                <div className={styles.info}>
                  <span>Book an Appointment with a Doctor </span>
                  <span className={styles.subHeading}>
                    Schedule a one-on-one consultation
                  </span>
                </div>
                <span className={styles.leftIcon}>
                  <ChevronRight />
                </span>
              </Link>
            </li>
            <li>
              <Link className={styles.listItemLink} href="/">
                <aside className={styles.icon}></aside>
                <div className={styles.info}>
                  <span>Book an Appointment with a Laboratory </span>
                  <span className={styles.subHeading}>
                    Schedule a visit to a lab
                  </span>
                </div>
                <span className={styles.leftIcon}>
                  <ChevronRight />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default BookNewAppointmentModal;
