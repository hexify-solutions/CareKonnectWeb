"use client";


import styles from "../formStyles.module.css";
import {
  InputField,
  Button,
  Shield,
  ProfileIcon,
} from "@hexify/atoms";
import { Formik, Form } from "formik";

const VitalsForm = () => {
  return (
    <div className={styles.form}>
      <h6 className={styles.formHeading}> Vitals </h6>
      <Formik initialValues={{}} onSubmit={() => {}}>
        {() => {
          return (
            <Form>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  placeholder="Age"
                  label="Age"
                  variant="filled"
                  data-variant="design_primary"
                  type="text"
                  name="age"
                  prefix={ProfileIcon}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  name="weight"
                  type="text"
                  label="Weight"
                  fullWidth
                  variant="filled"
                  placeholder="Weight"
                  data-variant="design_primary"
                  prefix={Shield}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Heart Rate"
                  label="Heart Rate"
                  type="text"
                  prefix={Shield}
                  hasPrefix
                  fullWidth
                  variant="filled"
                  name="heartRate"
                  data-variant="design_primary"
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Oxygen saturation"
                  label="Oxygen saturation"
                  type="text"
                  prefix={Shield}
                  hasPrefix
                  fullWidth
                  variant="filled"
                  name="oxygenSaturation"
                  data-variant="design_primary"
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Body temperature"
                  label="Body temperature"
                  type="text"
                  prefix={Shield}
                  hasPrefix
                  fullWidth
                  variant="filled"
                  name="bodyTemp"
                  data-variant="design_primary"
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Blood pressure"
                  label="Blood pressure"
                  type="text"
                  prefix={Shield}
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
                  Update vitals
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default VitalsForm;
