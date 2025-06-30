"use client"

import {
  Button,
  InputField,
  iconLoaderMap,
  Spinner,
  CalendarIcon,
} from "@hexify/atoms"
import * as Yup from "yup"
import { Formik, Form } from "formik"
import SignInOptions from "@/app/(auth)/onboarding/_component/signInOptions"
import Link from "next/link"
import styles from "./signupForm.module.css"
import routes from "../../../../../../../lib/constants/routes"
import componentData from "../../../../../../../data/signupForm.json"
import { SelectField } from "@hexify/atoms"
import { useAuthContext } from "@/context/auth"

type SignupFormType = {
  firstName: string
  lastName: string
  gender?: string
  dob: string
  email: string
  password: string
}

const SignupForm = () => {
  const { onRegister } = useAuthContext()

  const onSubmitHandler = (params: SignupFormType) => {
    onRegister({
      ...params,
      userType: "patient",
    })
  }

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues()}
      onSubmit={onSubmitHandler}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ handleChange, values, errors }) => {
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
                placeholder="Enter your first name here"
                fullWidth
                label="Name"
                variant="filled"
                data-hasprefix="true"
                data-variant="design_primary"
                type="text"
                name="firstName"
                prefix={iconLoaderMap.profile}
                onChange={handleChange}
                value={values.firstName}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </div>
            <div className={styles.inputWrapper}>
              <InputField
                placeholder="Enter your last name here"
                fullWidth
                label="Last Name (surname)"
                variant="filled"
                data-hasprefix="true"
                data-variant="design_primary"
                type="text"
                name="lastName"
                prefix={iconLoaderMap.profile}
                onChange={handleChange}
                value={values.lastName}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </div>
            <div className={styles.inputWrapper}>
              <InputField
                placeholder="Enter your date of birth"
                fullWidth
                label="Date of Birth"
                variant="filled"
                data-hasprefix="true"
                data-variant="design_primary"
                type="date"
                name="dob"
                prefix={CalendarIcon}
                onChange={handleChange}
                value={values.dob}
                error={!!errors.dob}
                helperText={errors.dob}
              />
            </div>
            <div className={styles.inputWrapper}>
              <SelectField
                fullWidth
                placeholder="Select your Gender"
                label="Gender"
                variant="filled"
                data-hasprefix="true"
                data-variant="design_primary"
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
                name="password"
                onChange={handleChange}
                value={values.password}
                error={!!errors.password}
                helperText={errors.password}
              />
            </div>
            <div className={styles.signInPrompt}>
              {componentData.signInPrompt}
              <Link href={routes.login} className={styles.emp}>
                &nbsp;{componentData.signInCTA}
              </Link>
            </div>
            <SignInOptions />
            <div className={styles.buttonWrapper}>
              <div className={styles.policyText}>
                By continuing you are indicating that you agree to the{" "}
                <Button
                  className={styles.emp}
                  variant="text"
                  data-variant="text"
                >
                  Terms of service
                </Button>{" "}
                and{" "}
                <Button
                  className={styles.emp}
                  variant="text"
                  data-variant="text"
                >
                  Privacy Policy
                </Button>
                .
              </div>
              <div className={styles.btn}>
                <Button
                  type="submit"
                  size="large"
                  fullWidth
                  color="primary"
                  variant="contained"
                  rounded
                >
                  {onRegister.isLoading ? <Spinner /> : componentData.signUpCTA}
                </Button>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "prefer-not-to-say", label: "Prefer not to Say" },
  { value: "unknown", label: "Not Specified" },
]

const initialValues = () => {
  return {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
  }
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  firstName: Yup.string()
    .min(3, "First name must be at least 3 characters")
    .max(50, "First name cannot exceed 50 characters")
    .required("First name is required"),

  lastName: Yup.string()
    .min(3, "Last name must be at least 3 characters")
    .max(50, "Last name cannot exceed 50 characters")
    .required("Last name is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(200, "Password cannot exceed 200 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
})

export default SignupForm
