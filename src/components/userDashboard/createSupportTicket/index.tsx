"use client";
import styles from "./createSupportTicket.module.css";

import { Button, InputField, Modal } from "@hexify/atoms";
import { Form, Formik } from "formik";
import { useState } from "react";
import clsx from "clsx";

export const CreateSupportTicket = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setShowModal(true)}
        size="large"
        variant="contained"
        rounded
      >
        Create new ticket
      </Button>
      <Modal onClose={() => setShowModal(false)} open={showModal}>
        <CreateSupportTicketForm cancelHandler={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

const CreateSupportTicketForm = (props) => {
  return (
    <div className={styles.wrapper}>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <FormComponent {...props} />
      </Formik>
    </div>
  );
};

const FormComponent = ({ cancelHandler }) => {
  return (
    <Form>
      <div className={styles.form}>
        <div className={styles.header}>
          <h3 className={styles.heading}>Create Ticket</h3>
          <span className={styles.subHeading}>
            Write new queries and issues
          </span>
        </div>
        <div>
          <div className={clsx(styles.inputField, styles.inputGrid)}>
            <div className={styles.inputField}>
              <InputField
                variant="filled"
                label="Email"
                placeholder="Type Email"
                type="email"
                data-variant="design_primary"
                fullWidth
                onChange={() => {}}
              />
            </div>
            <div className={styles.inputField}>
              <InputField
                data-variant="design_primary"
                fullWidth
                variant="filled"
                type="text"
                label="Ticket Type"
                onChange={() => {}}
              />
            </div>
            <div className={styles.inputField}>
              <InputField
                data-variant="design_primary"
                fullWidth
                type="text"
                variant="filled"
                label="Priority Level"
                onChange={() => {}}
              />
            </div>
          </div>
          <div>
            <InputField
              data-variant="design_primary"
              fullWidth
              variant="filled"
              type="text"
              label="Ticket Body"
              onChange={() => {}}
            />
          </div>
          <div className={styles.btnWrapper}>
            <Button
              onClick={cancelHandler}
              rounded
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
            <Button rounded variant="contained" color="primary">
              Send Ticket
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};
