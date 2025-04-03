// @ts-nocheck
"use client";
import styles from "./passwordResetForm.module.css";
import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { Button, InputField, Spinner, iconLoaderMap } from "@hexify/atoms";
import componentData from "../../../../../../../data/passwordChange.json";
import VerifyOtp from "@/components/profile/verifyOtpForm";
import { useSecureStorage } from "@/context/storage";
import componentDataForVerifyOtp from "@/data/verifyEmail.json";
import { useAuthContext } from "@/context/auth";
import lsKeys from "@/lib/constants/lsKeys";

const PasswordResetForm = () => {
  const [otp, setValidOtp] = useState("");
  const [checkingOtp, setCheckingOtp] = useState(true);
  const { onVerify, resendVerifyEmailHandler, onPasswordChange } = useAuthContext();
  const { getItem } = useSecureStorage();
  const email = getItem(lsKeys.resetPasswordEmail)

  const onSubmitHandler = (params) => { 
    onPasswordChange?.({
     otp,
      email,
      newPassword: params.password
    })
  };

  const onVerifyHandler = (data: { code: string}) => {
      setCheckingOtp(false)
      setValidOtp(data?.code)
  }

  return (
    <>
      {checkingOtp && <VerifyOtp resendVerifyEmailHandler={resendVerifyEmailHandler} onVerifyCallback={onVerifyHandler} profile={{email}} onVerify={onVerify} componentData={componentDataForVerifyOtp} />}
      {!checkingOtp && !!otp && (
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
                    disabled={onPasswordChange.isLoading}
                    size="large"
                    fullWidth
                    color="primary"
                    variant="contained"
                    rounded
                  >
                    {onPasswordChange.isLoading ? <Spinner /> : componentData.passwordChangeCTA}
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
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
