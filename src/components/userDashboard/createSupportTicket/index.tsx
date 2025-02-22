"use client";
import styles from "./createSupportTicket.module.css";

import { Button, InputField, Modal, SelectField, SendIcon, TicketIcon } from "@hexify/atoms";
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
      <TicketIcon />  Create new ticket
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
              <SelectField
                data-variant="design_primary"
                variant="filled"
                label="Ticket Type"
                options={ticketTypeOptions}
                placeholder="Choose ticket type"
                onChange={() => {}}
              />
            </div>
            <div className={styles.inputField}>
              <SelectField
                data-variant="design_primary"
                placeholder="Set priority level"
                variant="filled"
                label="Priority Level"
                onChange={() => {}}
                options={priorityLevelOptions}
              />
            </div>
          </div>
          <div>
            <InputField
              data-variant="design_primary"
              multiline
              minRows={5}
              placeholder="Type issues here"
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
              className={styles.cancelBtn}
            >
              Cancel
            </Button>
            <Button rounded variant="contained" color="primary">
             <SendIcon /> Send Ticket
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};

const ticketTypeOptions = [
  { label: "Ticket Type One", value: "1" },
  { label: "Ticket Type  two", value: "2" },
  { label: "Ticket Type three", value: "3" },
  { label: "Ticket Type four", value: "4" },
  { label: "Ticket Type five", value: "5" },
];
const priorityLevelOptions = [
  { label: "Priority Level One", value: "1" },
  { label: "Priority Level  two", value: "2" },
  { label: "Priority Level three", value: "3" },
  { label: "Priority Level four", value: "4" },
  { label: "Priority Level five", value: "5" },
];
