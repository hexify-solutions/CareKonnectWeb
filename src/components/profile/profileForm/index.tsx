"use client";

import { Form, Formik } from "formik";
import { Button, InputField, iconLoaderMap, Spinner , LocationPin24, Call, Edit} from "@hexify/atoms";
import styles from "./profileForm.module.css";

const ProfileForm = () => {
  return (
    <div className={styles.profileForm}>
        <h6 className={styles.formHeading}> Profile Information</h6>
      <Formik initialValues={{}} onSubmit={() => {}}>
        {() => {
          return (
            <Form>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  placeholder="Enter your email here"
                  label="Name"
                  variant="filled"
                  data-variant="design_primary"
                  disabled
                  type="text"
                  name="name"
                  prefix={iconLoaderMap.profile}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth
                  variant="filled"
                  placeholder="Enter your email address"
                  prefix={iconLoaderMap.email}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="number"
                  label="Phone Number"
                  type="text"
                  prefix={Call}
                  hasPrefix
                  fullWidth
                  variant="filled"
                  name="number"
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  hasPrefix
                  label="Address"
                  type="text"
                  placeholder="Address"
                  prefix={LocationPin24}
                  name="location"
                  fullWidth
                  variant="filled"
                />
              </div>
              <div className={styles.btnWrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  rounded
                  fullWidth
                  size="large"
                >
                  <Edit /> <span>Edit Profile </span>
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ProfileForm;
