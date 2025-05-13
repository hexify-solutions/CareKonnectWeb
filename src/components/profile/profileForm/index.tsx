"use client";

import { Form, Formik} from "formik";
import { useState, useRef } from "react";
import {
  Button,
  InputField,
  Spinner,
  LocationPin24,
  Call,
  Edit,
  EmailIcon,
  ProfileIcon,
  CalendarIcon,
  ChevronLeft,
} from "@hexify/atoms";
import styles from "./profileForm.module.css";
import { useAuthContext } from "@/context/auth";
import { useUpdateProfile } from "@/http/user/mutation";
import { ProfileType } from "@/types";
import { Avatar, iconLoaderMap, SelectField } from "@hexify/atoms";
import { useUploadDocument } from "@/http/document/mutation";
import { toast } from "react-toastify";

const ProfileForm = () => {
  const { profile, setAuthState } = useAuthContext()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const updateProfileMutation = useUpdateProfile();
  const uploadDocumentMutation = useUploadDocument();



  const onClickHandler = () => {
    if (!isEditing) {
      setIsEditing(true)
      setPreview("")
      setSelectedFile(null)

      return
    }
  }

  const onSubmitHandler = (params) => {
    const updateProfile = (avatarUrl?: string) => {
      updateProfileMutation?.mutate(
        {
          firstName: params?.firstName,
          lastName: params?.lastName,
          address: params?.location,
          phoneNumber: params?.number,
          dob: params?.dob,
          gender: params?.gender,
          ...(avatarUrl && { avatarUrl }),
        },
        {
          onSettled: (data, err) => {
            if (err) {
              toast?.error(err?.message ?? 'An error occurred while updating profile.');
            } else {
              toast?.success(data?.message ?? 'Profile updated successfully.');
              setAuthState(prev => ({
                ...(prev || {}),
                profile: data?.data?.user
              }))
              setIsEditing(false);
            }
          },
        }
      );
    };
  
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('fileName', selectedFile.name);
      formData.append('fileNumber', String(Date.now()));
  
      uploadDocumentMutation?.mutate(formData, {
        onSettled: (data, err) => {
          if (err) {
            toast?.error(err?.message ?? 'File upload failed.');
            return;
          }
          // @ts-ignore
          const avatarUrl = data?.data?.fileUrl;
          updateProfile(avatarUrl);
        },
      });
  
      return;
    }
  
    updateProfile();
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedFile(file);
      // Optional: Show preview
      const reader = new FileReader()
      reader.onload = (e) => {
        //@ts-ignore
      setPreview(e.target.result || "")
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <Avatar
          displayText={`${profile?.firstName} ${profile?.lastName}`}
          src={preview || profile?.avatarUrl}
        />
        <span>
          <h6 className={styles.userName}>
            {profile?.firstName} {profile?.lastName}
          </h6>
          {!isEditing && (
            <span className={styles.userEmail}>{profile?.email}</span>
          )}
          {isEditing && (
            <>
              <button
                onClick={handleButtonClick}
                className={styles.changeAvatarBtn}
              >
                Change Avatar
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: "none" }}
              />
            </>
          )}
        </span>
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.profileForm}>
         {!isEditing && <h6 className={styles.formHeading}> Profile Information</h6>}
         {isEditing &&  <h6 className={styles.formHeading}> <button className={styles.updateBackBtn} onClick={()=> setIsEditing(false)}><ChevronLeft /></button> Update profile</h6>}
          <Formik
            initialValues={initialValues(profile)}
            onSubmit={onSubmitHandler}
            enableReinitialize
          >
            {({ values, handleChange, errors }) => {
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
                      placeholder="Enter your date of birth"
                      fullWidth
                      label="Date of Birth"
                      variant="filled"
                      data-hasprefix="true"
                      data-variant={isEditing ? "design_primary" : ""}
                      type="date"
                      name="dob"
                      disabled={!isEditing}
                      prefix={CalendarIcon}
                      onChange={handleChange}
                      value={values.dob}
                      error={!!errors.dob}
                    />
                  </div>
                  <div className={styles.inputWrapper}>
                    <SelectField
                      fullWidth
                      placeholder="Select your Gender"
                      label="Gender"
                      variant="filled"
                      data-hasprefix="true"
                      data-variant={isEditing ? "design_primary" : ""}
                      disabled={!isEditing}
                      name="gender"
                      prefix={iconLoaderMap.profile}
                      options={genderOptions}
                      onChange={(e) => handleChange("gender")(e.target.value)}
                      value={values.gender}
                      error={!!errors.gender}
                      helperText={errors.gender}
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
                      value={values.number}

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
                      value={values.location}
                      variant="filled"
                    />
                  </div>
                  <div className={styles.btnWrapper}>
                    {isEditing && (
                      <Button
                        variant="contained"
                        color="primary"
                        rounded
                        disabled={uploadDocumentMutation?.isPending || updateProfileMutation?.isPending}
                        fullWidth
                        size="large"
                        type="submit"
                      >
                        {updateProfileMutation?.isPending ? (
                          <Spinner />
                        ) : (
                          <>
                            <span>Update Profile </span>{" "}
                          </>
                        )}
                      </Button>
                    )}
                    {!isEditing && (
                      <Button
                        variant="contained"
                        color="primary"
                        rounded
                        fullWidth
                        size="large"
                        onClick={onClickHandler}
                      >
                        <Edit /> <span>Edit Profile </span>{" "}
                      </Button>
                    )}
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </div>
  )
}

const genderOptions = [
  { "value": "male", "label": "Male" },
  { "value": "female", "label": "Female" },
  { "value": "other", "label": "Other" },
  { "value": "prefer-not-to-say", "label": "Prefer not to Say" },
  { "value": "unknown", "label": "Not Specified" }
]


const initialValues = (profile: ProfileType) => {
  return {
    firstName: profile.firstName || "",
    lastName: profile.lastName || "",
    email: profile.email || "",
    dob: profile?.dob?.split('T')[0]|| "",
    gender: profile?.gender || "",
    number: profile?.phoneNumber || "",
    location: profile?.address || ""

  };
};

export default ProfileForm;
