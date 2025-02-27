"use client";

import styles from "./verifyEmailForm.module.css";
import {Spinner} from "@hexify/atoms";
import { OTPInput } from "@hexify/atoms";
import { Formik, Form } from "formik";


const VerifyEmailForm = ({
  componentData, 
  onVerify, 
  profile,
  resendVerifyEmailHandler,

}) => {

  const validateHandler = (params: { otp: string[] }) => {
    const { otp } = params;
    if (otp?.every((v) => v !== "")) {
      const code = otp?.join("");
      onVerify({
        code,
        emailOrPhone: profile.email || "",
        type: "email",
      })
    }
  };

  return (
    <Formik
      validateOnChange
      enableReinitialize
      onSubmit={() => {}}
      initialValues={initialValues}
      validate={validateHandler}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form className={styles.form}>
            <aside className={styles.formHeader}>
              <h3 className={styles.heading}>
                {componentData?.heading} <br /> {componentData.lead}
              </h3>
              <span className={styles.subHeading}>
                {componentData.subHeading}
              </span>
            </aside>
            {
              <div className={styles.inputWrapper}>
                {!onVerify?.isLoading && (
                  <OTPInput
                    value={values?.otp}
                    onChange={(v) => setFieldValue("otp", v)}
                  />
                )}
                {onVerify?.isLoading && <Spinner />}
              </div>
            }
            <div className={styles.resendBtnWrapper}>
              <span>{componentData.resendLead}</span>{" "}
              <button
                onClick={() =>
                  resendVerifyEmailHandler({ email: profile?.email || "" })
                }
                className={styles.resendBtn}
              >
                {resendVerifyEmailHandler?.isLoading ? (
                  <Spinner />
                ) : (
                  componentData.resendCTA
                )}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const initialValues = {
  otp: ["", "", "", ""],
};
export default VerifyEmailForm;
