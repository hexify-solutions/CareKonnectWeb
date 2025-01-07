"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, InputField, iconLoaderMap, Spinner } from "@hexify/atoms";
import styles from "./passwordChangeForm.module.css";
import Link from "next/link";
import routes from "../../../../../../../lib/constants/routes";
import componentData from "../../../../../../../data/passwordChange.json";
import { useAuthContext } from "@/context/auth";

const PasswordChangeForm = () => {

  const { onTriggerPasswordChange } = useAuthContext();

  const onSubmitHandler = (params: { email: string }) => {
    onTriggerPasswordChange?.(params)
  };

  return (
    <Formik validationSchema={validationSchema} onSubmit={onSubmitHandler} initialValues={initialValues}>
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
                disabled={onTriggerPasswordChange.isLoading}
              />
            </div>
            <div className={styles.signUpPrompt}>
              {componentData.signUpPrompt}
              <Link href={routes.signup} className={styles.emp}>
                &nbsp;{componentData.signUpCTA}
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
                disabled={onTriggerPasswordChange.isLoading}
              >
                {onTriggerPasswordChange.isLoading ? (
                  <Spinner />
                ) : (
                  componentData.passwordChangeCTA
                )}
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
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default PasswordChangeForm;
