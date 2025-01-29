"use client";

import { Formik, Form } from "formik";
import styles from "../formStyles.module.css";
import { InputField, Button, Shield, CardIcon } from "@hexify/atoms";

const HmoProviderForm = () => {
  return (
    <div className={styles.form}>
      <h6 className={styles.formHeading}> HMO Provider </h6>
      <Formik initialValues={{}} onSubmit={() => {}}>
        {() => {
          return (
            <Form>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  label="HMO"
                  variant="filled"
                  data-variant="design_primary"
                  name="password"
                  placeholder="Select provider"
                  type="text"
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  label="Policy Number"
                  variant="filled"
                  name="policy"
                  placeholder="Enter policy number"
                  prefix={Shield}
                  type="text"
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  label="Plan Name"
                  variant="filled"
                  placeholder="Plan name"
                  prefix={CardIcon}
                  type="text"
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
                  Update HMO Provider
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default HmoProviderForm;
