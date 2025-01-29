"use client";

import { Formik, Form } from "formik";
import styles from "../formStyles.module.css";
import { InputField, iconLoaderMap,  Call, Button, EmailIcon, ProfileIcon } from "@hexify/atoms";

const ChangePasswordForm = () => {
  return (
    <div className={styles.form}>
      <h6 className={styles.formHeading}> Change Password </h6>
      <Formik initialValues={{}} onSubmit={() => {}}>
        {() => {
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
                  name="password"
                  placeholder="current password"
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
                  placeholder="new password"
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
                  type="password"
                  name="password"
                  placeholder="confirm password"
                />
              </div>
              <div className={styles.btnWrapper}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  rounded
                  size="large"
                >
                  Change Password
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ChangePasswordForm;
