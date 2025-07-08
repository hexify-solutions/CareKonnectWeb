"use client"

import styles from "./verifyEmailForm.module.css"
import { Spinner } from "@hexify/atoms"
import { OTPInput } from "@hexify/atoms"
import { Formik, Form } from "formik"
import { useSecureStorage } from "@/context/storage"
import lsKeys from "@/lib/constants/lsKeys"
import { GLOBAL_CONFIG } from "../../../../../../packages/engine"

const VerifyOtp = ({
  componentData,
  onVerify,
  profile,
  resendVerifyEmailHandler,
  onVerifyCallback,
}: any) => {
  const { getItem } = useSecureStorage()

  const email = getItem?.(lsKeys.verifyUserEmail)

  const validateHandler = (params: { otp: string[] }) => {
    const { otp } = params
    if (otp?.every(Boolean) && otp.length === GLOBAL_CONFIG.OTP_LENGTH) {
      const code = otp?.join("")
      onVerify(
        {
          code,
          emailOrPhone: profile.email || email,
          type: "email",
        },
        onVerifyCallback
      )
    }
  }

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
                type="button"
                onClick={(e: any) => {
                  e?.preventDefault()
                  e?.stopPropagation()
                  resendVerifyEmailHandler({ email: profile?.email || "" })
                }}
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
        )
      }}
    </Formik>
  )
}

const initialValues = {
  otp: Array.from({ length: GLOBAL_CONFIG.OTP_LENGTH }),
}
export default VerifyOtp
