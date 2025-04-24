"use client";


import styles from "../formStyles.module.css";
import tags from "@/http/tags"

import { useTransition } from "react"

import {
  InputField,
  Button,
  Shield,
  Spinner,
} from "@hexify/atoms";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useCreateUserVital } from "@/http/user/mutation"
import { toast } from "react-toastify"

const VitalsForm = ({ vitals, revalidate}) => {
  const createUserVitalMutation = useCreateUserVital()
  const [_, startTransition ] = useTransition();

  const onSubmitHandler = (params) => {
    createUserVitalMutation.mutate(
      { ...params, weightUnit: "Kg", heightUnit: "in", meta: { datetime: new Date()?.toISOString() } },
      {
        onSettled: (_, error) => {
          if (!error) {
            startTransition(() => {
              revalidate(tags.userVitals)
            })
            toast.success("Vitals updated successfully")
          } else {
            toast.error(error?.message || "Error updating vitals")
          }
        },
      }
    )
  }

  return (
    <div className={styles.form}>
      <h6 className={styles.formHeading}> Vitals </h6>
      <Formik
        initialValues={initialValues(vitals)}
        onSubmit={onSubmitHandler}
        enableReinitialize
        validationSchema={validationSchema}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          dirty,
          isValid,
          touched,
        }) => {
          return (
            <Form>
              <div className={styles.inputWrapper}>
                <InputField
                  name="weight"
                  type="text"
                  label="Weight"
                  fullWidth
                  variant="filled"
                  placeholder="Weight"
                  data-variant="design_primary"
                  value={values?.weight}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  prefix={Shield}
                  error={touched?.weight && !!errors.weight}
                  helperText={<>{touched?.weight && errors.weight} </>}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  name="height"
                  type="text"
                  label="Height"
                  fullWidth
                  variant="filled"
                  placeholder="Height"
                  data-variant="design_primary"
                  value={values?.height}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  prefix={Shield}
                  error={touched?.height && !!errors.height}
                  helperText={<>{touched?.height && errors.height} </>}
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Heart Rate"
                  label="Heart Rate"
                  type="text"
                  prefix={Shield}
                  hasPrefix
                  fullWidth
                  variant="filled"
                  name="heartRate"
                  value={values?.heartRate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched?.heartRate && !!errors.heartRate}
                  helperText={<>{touched?.heartRate && errors.heartRate} </>}
                  data-variant="design_primary"
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Oxygen saturation"
                  label="Oxygen saturation"
                  type="text"
                  prefix={Shield}
                  hasPrefix
                  fullWidth
                  variant="filled"
                  name="oxygenSaturation"
                  value={values?.oxygenSaturation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  data-variant="design_primary"
                  error={touched?.oxygenSaturation && !!errors.oxygenSaturation}
                  helperText={
                    <>{touched?.oxygenSaturation && errors.oxygenSaturation} </>
                  }
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Body temperature"
                  label="Body temperature"
                  type="text"
                  prefix={Shield}
                  hasPrefix
                  fullWidth
                  variant="filled"
                  name="temperature"
                  value={values?.temperature}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  data-variant="design_primary"
                  error={touched?.temperature && !!errors.temperature}
                  helperText={
                    <>{touched?.temperature && errors.temperature} </>
                  }
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Blood pressure"
                  label="Blood pressure"
                  type="text"
                  prefix={Shield}
                  hasPrefix
                  fullWidth
                  variant="filled"
                  name="bloodPressure"
                  value={values?.bloodPressure}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  data-variant="design_primary"
                  error={touched?.bloodPressure && !!errors.bloodPressure}
                  helperText={
                    <>{touched?.bloodPressure && errors.bloodPressure} </>
                  }
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Respiratory Rate"
                  label="Respiratory Rate"
                  type="text"
                  prefix={Shield}
                  hasPrefix
                  fullWidth
                  variant="filled"
                  name="respiratoryRate"
                  value={values?.respiratoryRate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  data-variant="design_primary"
                  error={touched?.respiratoryRate && !!errors.respiratoryRate}
                  helperText={
                    <>{touched?.respiratoryRate && errors.respiratoryRate} </>
                  }
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  placeholder="Notes"
                  label="Notes"
                  type="text"
                  multiline
                  minRows={4}
                  fullWidth
                  variant="filled"
                  name="notes"
                  value={values?.notes}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  data-variant="design_primary"
                  error={touched?.notes && !!errors.notes}
                  helperText={<>{touched?.notes && errors.notes} </>}
                />
              </div>
              <div className={styles.btnWrapper}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  type="submit"
                  rounded
                  disabled={
                    !(isValid && dirty) || createUserVitalMutation.isPending
                  }
                  size="large"
                >
                  {createUserVitalMutation.isPending ? (
                    <Spinner />
                  ) : (
                    "Update vitals"
                  )}{" "}
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

const initialValues = (values) => {
  return {
    weight: values?.weight,
    heartRate: values?.heartRate,
    oxygenSaturation: values?.oxygenSaturation,
    temperature: values?.temperature,
    bloodPressure: values?.bloodPressure,
    height: values?.height,
    respiratoryRate: values?.respiratoryRate,
    notes: values?.notes,
  }
}

const validationSchema = Yup.object().shape({
  weight: Yup.string()
    .required("Weight is required")
    .matches(/^\d+(\.\d+)?/, "Weight must be a number"),
  respiratoryRate: Yup.string()
    .required("Respiratory Rate is required")
    .matches(/^\d+(\.\d+)?/, "Respiratory Rate must be a number"),
  notes: Yup.string().required("Notes is required"),
  height: Yup.string()
    .required("Weight is required")
    .matches(/^\d+(\.\d+)?/, "Weight must be a number"),
  heartRate: Yup.number()
    .typeError("Heart rate must be a number")
    .required("Heart rate is required"),
  oxygenSaturation: Yup.number()
    .typeError("Oxygen saturation must be a number")
    .required("Oxygen saturation is required"),
  temperature: Yup.number()
    .typeError("Temperature must be a number")
    .required("Temperature is required"),
  bloodPressure: Yup.string()
    .required("Blood pressure is required")
    .matches(
      /^\d{2,3}\/\d{2,3}$/,
      "Blood pressure must be in the format '120/80'"
    ),
})

export default VitalsForm
