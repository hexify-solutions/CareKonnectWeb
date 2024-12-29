"use client";

import { Checkbox, Button, Telephone } from "@hexify/atoms";
import { Formik, Form } from "formik";

import styles from "./hospitalBookingCard.module.css";

const BookingCard = () => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={() => {
        console.log("submittin");
      }}
    >
      {() => {
        return (
          <Form>
            <div className={styles.wrapper}>
              <div className={styles.header}>
                <h3 className={styles.price}>NGN 20,000 </h3>
              </div>
              <div className={styles.paymentSection}>
                <label className={styles.label}>
                  <Checkbox name="payment" />
                  <span>15 minutes: NGN 20,000</span>
                </label>
                <label className={styles.label}>
                  <Checkbox name="payment" />
                  <span>30 minutes: NGN 30,000</span>
                </label>
                <label className={styles.label}>
                  <Checkbox name="payment" />
                  <span>60 minutes: NGN 40,000</span>
                </label>
                <div className={styles.btnWrapper}>
                  <Button rounded size="large" variant="contained">
                    Book now
                  </Button>
                  <Button
                    className={styles.saveButton}
                    rounded
                    size="large"
                    variant="contained"
                  >
                    Save for later
                  </Button>
                  <div className={styles.inquiryWrapper}>
                    <span>Have an Inquiry?</span>
                    <button className={styles.contactUsBtn}>
                      <Telephone /> <span>Contact Us </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BookingCard;
