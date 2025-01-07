"use client";

import styles from "./passwordResetForm.module.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, InputField, iconLoaderMap } from "@hexify/atoms";
import componentData from "../../../../../../../data/passwordChange.json";

const PasswordResetForm = () => {
  const onSubmitHandler = () => {
    console.log("resetting password");
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
      initialValues={initialValues}
      enableReinitialize
    >
      {({ values, errors, handleChange }) => {
        return (
          <Form className={styles.form}>
            <aside className={styles.formHeader}>
              <h3 className={styles.heading}>{componentData?.heading}</h3>
              <span className={styles.subHeading}>
                {componentData.subHeading}
              </span>
            </aside>
            <div className={styles.inputWrapper}>
              <InputField
                placeholder="Enter your password here"
                fullWidth
                label="Password"
                variant="filled"
                suffix={iconLoaderMap.password}
                prefix={iconLoaderMap.lock}
                data-hasprefix="true"
                data-hassuffix="true"
                data-variant="design_primary"
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                error={!!errors.password}
                helperText={errors.password}
              />
            </div>
            <div className={styles.inputWrapper}>
              <InputField
                placeholder="Enter your password here"
                fullWidth
                label="Password"
                variant="filled"
                suffix={iconLoaderMap.password}
                prefix={iconLoaderMap.lock}
                data-hasprefix="true"
                data-hassuffix="true"
                data-variant="design_primary"
                type="password"
                name="passwordConfirmation"
                onChange={handleChange}
                value={values.passwordConfirmation}
                error={!!errors.passwordConfirmation}
                helperText={errors.passwordConfirmation}
              />
            </div>
            <div className={styles.btn}>
              <Button
                type="submit"
                size="large"
                fullWidth
                color="primary"
                variant="contained"
                data-variant="rounded"
              >
                {componentData.passwordChangeCTA}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const initialValues = {
  password: "",
  passwordConfirmation: "",
};

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Must match password")
    .required("Password confirmation is required"),
});
export default PasswordResetForm;
