"use client";

import { Form, Formik } from "formik";
import { useState } from "react";
import {
  Button,
  InputField,
  Spinner,
  LocationPin24,
  Call,
  Edit,
  EmailIcon,
  ProfileIcon,
} from "@hexify/atoms";
import styles from "./profileForm.module.css";
import { useAuthContext } from "@/context/auth";
import { ProfileType } from "@/types";
import { Avatar } from "@hexify/atoms";

const ProfileForm = () => {
  const { profile } = useAuthContext();
  const [isEditing, setIsEditing ] = useState<boolean>(false);


  const onClickHandler = () => {
    if(!isEditing) {
      setIsEditing(true);
      return;
    }
    console.log('updateing profile now')
  }

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <Avatar displayText={`${profile?.firstName} ${profile?.lastName}`} src={""} />
        <span>
          <h6 className={styles.userName}>{profile?.firstName} {profile?.lastName}</h6>
          {!isEditing && <span className={styles.userEmail}>{profile?.email}</span>}
          {isEditing && <button className={styles.changeAvatarBtn}>Change Avatar</button>}
        </span>
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.profileForm}>
          <h6 className={styles.formHeading}> Profile Information</h6>
          <Formik
            initialValues={initialValues(profile)}
            onSubmit={() => {}}
            enableReinitialize
          >
            {({ values, handleChange }) => {
              return (
                <Form>
                  <div className={styles.inputWrapper}>
                    <InputField
                      fullWidth
                      placeholder="Enter your first name here"
                      label="First Name"
                      variant="filled"
                      data-variant={isEditing ? "design_primary" : ""}
                      disabled={!isEditing}
                      type="text"
                      name="firstName"
                      prefix={ProfileIcon}
                      value={values?.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputWrapper}>
                    <InputField
                      fullWidth
                      placeholder="Enter your last name here"
                      label="Last Name(surname)"
                      variant="filled"
                      data-variant={isEditing ? "design_primary" : ""}
                      disabled={!isEditing}
                      type="text"
                      name="lastName"
                      prefix={ProfileIcon}
                      value={values?.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputWrapper}>
                    <InputField
                      name="email"
                      type="email"
                      label="Email"
                      disabled
                      fullWidth
                      variant="filled"
                      placeholder="Enter your email address"
                      prefix={EmailIcon}
                      value={values?.email}
                    />
                  </div>
                  <div className={styles.inputWrapper}>
                    <InputField
                      placeholder="number"
                      label="Phone Number"
                      type="tel"
                      data-variant={isEditing ? "design_primary" : ""}
                      prefix={Call}
                      hasPrefix
                      fullWidth
                      variant="filled"
                      disabled={!isEditing}
                      name="number"
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputWrapper}>
                    <InputField
                      hasPrefix
                      label="Address"
                      data-variant={isEditing ? "design_primary" : ""}
                      type="text"
                      placeholder="Address"
                      disabled={!isEditing}
                      prefix={LocationPin24}
                      name="location"
                      fullWidth
                      onChange={handleChange}
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
                      onClick={onClickHandler}
                    >
                     { !isEditing && <><Edit /> <span>Edit Profile </span> </> }
                     { isEditing && <><span>Update Profile </span> </> }
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

const initialValues = (profile: ProfileType) => {
  return {
    firstName: profile.firstName || "",
    lastName: profile.lastName || "",
    email: profile.email || "",
  };
};

export default ProfileForm;
