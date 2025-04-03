"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, InputField, iconLoaderMap, Spinner } from "@hexify/atoms";
import styles from "./signInForm.module.css";
import Link from "next/link";
import SignInOptions from "@/app/(auth)/onboarding/_component/signInOptions";
import { LoginType } from "@/types";
import { useAuthContext } from "@/context/auth";
import componentData from "@/data/loginForm.json";

import routes from "@/lib/constants/routes";
const SignInForm = () => {
  const { onLogin } = useAuthContext();
  const onSubmitHandler = (params: LoginType) => {
    onLogin(params);
  };

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
                rounded
              >
                {onLogin.isLoading ? <Spinner /> : componentData.signUpCTA}
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

export default SignInForm;
