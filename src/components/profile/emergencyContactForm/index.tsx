"use client"

import { Formik, Form } from "formik"
import styles from "../formStyles.module.css"
import { useTransition } from "react"
import {Spinner} from "@hexify/atoms"
import { InputField, Call, Button, EmailIcon, ProfileIcon } from "@hexify/atoms"
import * as Yup from "yup"
import { useCreateEmergencyContact } from "@/http/user/mutation"
import { toast } from "react-toastify"

const EmergencyContactForm = ({ contact, revalidateUserStats }) => {
  const emergencyContactMutation = useCreateEmergencyContact()
  const [_, startTransition ] = useTransition();

  const onSubmitHandler = (params) => {
    emergencyContactMutation?.mutate(params, {
      onSettled: (data, err) => {
        if (!err) {
          startTransition(() => {
            revalidateUserStats('user-emergency-contact')
          })
          toast.success("Emergency Contact Updated Successfull ")
        } else {
          toast.error(err?.message || "Error Updating Emergency Contact")
        }
      },
    })
  }

  return (
    <div className={styles.form}>
      <h6 className={styles.formHeading}> Emergency Contact </h6>
      <Formik
        initialValues={initialValues?.(contact)}
        onSubmit={onSubmitHandler}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({
          values,
          handleBlur,
          handleChange,
          errors,
          touched,
          isValid,
          dirty,
        }) => {
          return (
            <Form>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  placeholder="Enter name"
                  label="Name"
                  variant="filled"
                  data-variant="design_primary"
                  type="text"
                  name="name"
                  prefix={ProfileIcon}
                  value={values?.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && !!errors.name}
                  helperText={<>{touched.name && errors.name} </>}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth
                  variant="filled"
                  placeholder="Enter Email"
                  data-variant="design_primary"
                  prefix={EmailIcon}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.email}
                  error={touched.email && !!errors.email}
                  helperText={<>{touched.email && errors.email} </>}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Enter phone number"
                  label="Phone Number"
                  type="tel"
                  prefix={Call}
                  hasPrefix
                  fullWidth
                  value={values?.phone}
                  variant="filled"
                  name="phone"
                  data-variant="design_primary"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && !!errors.phone}
                  helperText={<>{touched.phone && errors.phone} </>}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Relationship"
                  label="Relationship"
                  type="text"
                  prefix={Call}
                  hasPrefix
                  fullWidth
                  value={values?.relationship}
                  variant="filled"
                  name="relationship"
                  data-variant="design_primary"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.relationship && !!errors.relationship}
                  helperText={
                    <>{touched.relationship && errors.relationship} </>
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
                  disabled={!(isValid && dirty)}
                >
                  {emergencyContactMutation?.isPending ? (
                    <Spinner />
                  ) : (
                    "Save Emergency Contact"
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

const initialValues = (contact) =>  ({
  name: contact?.name || "",
  email: contact?.email || "",
  phone: contact?.phone || "",
  relationship: contact?.relationship || "",
})

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .required("Name is required")
  .test(
    "full-name",
    "Please enter both first and last name",
    value => {
      if (!value) return false;
      const parts = value.trim().split(/\s+/);
      return parts.length >= 2;
    }
  ),
  email: Yup.string().email("Please provide a valid email").required("Email is required"),
  relationship: Yup.string().required("Relationship is required"),
  phone: Yup.string().required("Phone number is required"),
})

export default EmergencyContactForm
