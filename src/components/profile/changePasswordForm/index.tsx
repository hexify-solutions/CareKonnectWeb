"use client";

import { Formik, Form } from "formik";
import styles from "../formStyles.module.css";
import { InputField, iconLoaderMap, Button, Spinner } from "@hexify/atoms";
import { useUserChangePassword } from "@/http/auth/mutation";
import * as Yup from 'yup';
import { toast } from "react-toastify";

const ChangePasswordForm = () => {
  const changePasswordMutation = useUserChangePassword()
  const onSubmitHandler = (params, { resetForm }) => {
    changePasswordMutation.mutate(
      {
        oldPassword: params?.oldPassword,
        newPassword: params?.password,
      },
      {
        onSettled: (_, error) => {
          if (!error) {
            toast.success("Password changed successfully");
            resetForm?.();
          } else {
            toast.error(
             error?.message || "Error changing password"
            )
          }
        },
      }
    )
  }
  return (
    <div className={styles.form}>
      <h6 className={styles.formHeading}> Change Password </h6>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitHandler}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({
          isValid,
          dirty,
          touched,
          values,
          errors,
          handleBlur,
          handleChange,
        }) => {
          return (
            <Form>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  label="Enter Current Password"
                  variant="filled"
                  suffix={iconLoaderMap.password}
                  prefix={iconLoaderMap.lock}
                  data-hasprefix="true"
                  data-hassuffix="true"
                  data-variant="design_primary"
                  type="password"
                  name="oldPassword"
                  placeholder="current password"
                  error={touched?.oldPassword && !!errors.oldPassword}
                  helperText={
                    <>{touched?.oldPassword && errors.oldPassword} </>
                  }
                  value={values?.oldPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  label="Enter New Password"
                  variant="filled"
                  suffix={iconLoaderMap.password}
                  prefix={iconLoaderMap.lock}
                  data-hasprefix="true"
                  data-hassuffix="true"
                  data-variant="design_primary"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.password}
                  placeholder="new password"
                  error={touched.password && !!errors.password}
                  helperText={<>{touched.password && errors.password} </>}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  label="Confirm Password"
                  variant="filled"
                  suffix={iconLoaderMap.password}
                  prefix={iconLoaderMap.lock}
                  data-hasprefix="true"
                  data-hassuffix="true"
                  data-variant="design_primary"
                  onChange={handleChange}
                  value={values?.confirmPassword}
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  onBlur={handleBlur}
                  error={touched.confirmPassword && !!errors.confirmPassword}
                  helperText={
                    <>{touched.confirmPassword && errors.confirmPassword} </>
                  }
                />
              </div>
              <div className={styles.btnWrapper}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  type="submit"
                  rounded
                  size="large"
                  disabled={!(isValid && dirty) || changePasswordMutation.isPending}
                >
                  {changePasswordMutation?.isPending ? (
                    <Spinner />
                  ) : (
                    "Change Password"
                  )}
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

const initialValues = {
  oldPassword: "",
  password: "",
  confirmPassword: "",
}


const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Your current password is required'),
  password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password cannot exceed 20 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required"),
    
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

export default ChangePasswordForm;
