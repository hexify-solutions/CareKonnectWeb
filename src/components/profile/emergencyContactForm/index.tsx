"use client";

import { Formik, Form } from "formik";
import styles from "../formStyles.module.css";
import { InputField, iconLoaderMap,  Call, Button, EmailIcon, ProfileIcon } from "@hexify/atoms";

const EmergencyContactForm = () => {
  return (
    <div className={styles.form}>
      <h6 className={styles.formHeading}> Emergency Contact </h6>
      <Formik initialValues={{}} onSubmit={() => {}}>
        {() => {
          return (
            <Form>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  placeholder="Enter name"
                  label="Name"
                  variant="filled"
                  data-variant="design_primary"
                  type="text"
                  name="name"
                  prefix={ProfileIcon}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth
                  variant="filled"
                  placeholder="Enter Email"
                  data-variant="design_primary"
                  prefix={EmailIcon}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Enter phone number"
                  label="Phone Number"
                  type="text"
                  prefix={Call}
                  hasPrefix
                  fullWidth
                  variant="filled"
                  name="number"
                  data-variant="design_primary"
                />
              </div>
              <div className={styles.btnWrapper}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  rounded
                  size="large"
                >
                  Save Emergency Contact
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EmergencyContactForm;
