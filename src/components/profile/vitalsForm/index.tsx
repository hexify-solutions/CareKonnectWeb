"use client";


import styles from "../formStyles.module.css";
import {
  InputField,
  Button,
  Shield,
} from "@hexify/atoms";
import { Formik, Form } from "formik";

const VitalsForm = ({ vitals }) => {

  
  return (
    <div className={styles.form}>
      <h6 className={styles.formHeading}> Vitals </h6>
      <Formik initialValues={initialValues(vitals)} onSubmit={() => {}} enableReinitialize>
        {({ values, handleChange, isValid, handleBlur, dirty  }) => {
          return (
            <Form>
              <div className={styles.inputWrapper}>
                <InputField
                  name="weight"
                  type="text"
                  label="Weight"
                  fullWidth
                  variant="filled"
                  placeholder="Weight"
                  data-variant="design_primary"
                  value={values?.weight}
                  onChange={handleChange}
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
                  value={values?.heartRate}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  value={values?.oxygenSaturation}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  name="temperature"
                  value={values?.temperature}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  name="bloodPressure"
                  value={values?.bloodPressure}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  data-variant="design_primary"
                />
              </div>
              <div className={styles.btnWrapper}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  rounded
                  disabled={!(isValid && dirty)}
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


const initialValues = (values) => {
  return {
    weight: values?.weight + " " + (values?.weightUnit || "kg"),
    heartRate: values?.heartRate,
    oxygenSaturation: values?.oxygenSaturation,
    temperature: values?.temperature,
    bloodPressure: values?.bloodPressure,
  }
}
export default VitalsForm;
