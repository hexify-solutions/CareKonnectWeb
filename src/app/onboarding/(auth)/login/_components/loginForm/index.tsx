"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, InputField, iconLoaderMap } from "@hexify/atoms";
import styles from "./loginForm.module.css";
import componentData from "../../../../../_data/loginForm.json";
import routes from "../../../../../_lib/constants/routes";
import Link from "next/link";
import SignInOptions from "@/app/onboarding/_component/signInOptions";

const LoginForm = () => {
  const onSubmitHandler = () => {};
  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
      initialValues={initialValues}
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
                fullWidth
                placeholder="Enter your email here"
                label="Email"
                variant="filled"
                data-hasprefix="true"
                data-variant="design_primary"
                type="email"
                name="email"
                prefix={iconLoaderMap.email}
                value={values.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
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
                name="password"
                onChange={handleChange}
                value={values.password}
                error={!!errors.password}
                helperText={errors.password}
              />
            </div>
            <div className={styles.signInPrompt}>
              {componentData.signInPrompt}
              <Link href={routes.signup} className={styles.emp}>
                &nbsp;{componentData.signInCTA}
              </Link>
            </div>
            <SignInOptions />
            <div className={styles.forgetPassword}>
              {componentData.forgotPasswordPrompt}
              <Link href={routes.passwordChange} className={styles.emp}>
                &nbsp;{componentData.forgotPasswordCTA}
              </Link>
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
                {componentData.signUpCTA}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string().required("Password is required"),
});

export default LoginForm;
