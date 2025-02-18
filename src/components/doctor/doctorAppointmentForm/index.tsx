"use client";

import { DatePicker, TimePicker } from "@hexify/components";
import { Formik, Form } from "formik";
import styles from "./doctorAppointmentForm.module.css";
import { Button, InputField, ToggleInput } from "@hexify/atoms";

const DoctorAppointmentForm = () => {
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={() => {
        console.log("checking");
      }}
    >
      {({ setFieldValue, values, errors, handleChange }) => {
        return (
          <Form>
            <div className={styles.formInputWrapper}>
              <DatePicker />
            </div>
            <div className={styles.formInputWrapper}>
              <TimePicker />
            </div>
            {/* <div className={styles.formInputWrapper}>
              <ToggleInput
                onChange={(v) => setFieldValue("appointmentType", v)}
                value={values.appointmentType}
                label="Appointment Type"
                options={appointmentOptions}
              />
            </div> */}
            <div className={styles.formInputWrapper}>
              <InputField
                fullWidth
                multiline
                minRows={4}
                type="text"
                showLabel
                label="Description"
                data-variant="design_secondary"
                placeholder="Describe why you want to see a doctor "
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button
                type="submit"
                size="large"
                fullWidth
                color="primary"
                variant="contained"
                rounded
              >
                Book Appointment
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const appointmentOptions = [
  { label: "Online", value: "online" },
  { label: "In-person", value: "in-person" },
];

const initialValue = {
  appointmentType: appointmentOptions?.[0]?.value,
};

export default DoctorAppointmentForm;
