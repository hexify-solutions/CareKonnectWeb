import {
  Modal,
  CancelIcon,
  InputField,
  Button,
  iconLoaderMap,
} from "@hexify/atoms"
import styles from "./uploadPrescription.module.css"
import { Form, Formik, FieldArray } from "formik"
import * as Yup from "yup"

const initialPrescription: Prescription = {
  medicationName: "",
  dosageSchedule: "",
  refillDetails: "",
  document: null,
}

interface Prescription {
  medicationName: string
  dosageSchedule: string
  refillDetails: string
  document: File | null
}

interface FormValues {
  prescriptions: Prescription[]
}

const UploadPrescriptionModal = ({ cancelHandler, open }: any) => {
  return (
    <div>
      <Modal open={open}>
        <div className={styles.wrapper}>
          <button onClick={cancelHandler} className={styles.cancelBtn}>
            <CancelIcon type="two" />
          </button>

          <div className={styles.header}>
            <div className={styles.heading}>Enter Prescription</div>
            <div className={styles.subHeading}>
              Keep your prescriptions safe and accessible with a quick upload
            </div>
          </div>

          <Formik
            initialValues={{ prescriptions: [initialPrescription] }}
            onSubmit={() => {}}
            enableReinitialize
            validationSchema={validationSchema}
          >
            {({ handleChange, handleBlur, values, setFieldValue }) => {
              return (
                <Form className={styles.form}>
                  <FieldArray name="prescriptions">
                    {({ push, remove }) => {
                      return (
                        <>
                          {values?.prescriptions?.map((value: Prescription, index) => {
                            return (
                              <div className={styles.formSection}>
                                <div className={styles.inputWrapper}>
                                  <InputField
                                    type="text"
                                    onBlur={handleBlur}
                                    variant="filled"
                                    value={value?.medicationName}
                                    onChange={(e) => setFieldValue(`prescriptions[${index}].medicationName`, e.target.value)}
                                    name="name"
                                    label="Medication Name"
                                    placeholder="Enter medication name"
                                    data-hasprefix="true"
                                    data-variant="design_primary"
                                    prefix={iconLoaderMap.email}
                                    fullWidth
                                  />
                                </div>
                                <div className={styles.inputWrapper}>
                                  <InputField
                                    type="text"
                                    onBlur={handleBlur}
                                    variant="filled"
                                    name="dosageSchedule"
                                    value={value?.dosageSchedule}
                                    onChange={(e) => setFieldValue(`prescriptions[${index}].dosageSchedule`, e.target.value)}

                                    label="Design Schedule"
                                    placeholder="e.g 1 morning, 1 evening"
                                    data-hasprefix="true"
                                    data-variant="design_primary"
                                    prefix={iconLoaderMap.calendar}
                                    fullWidth
                                  />
                                </div>
                                <div className={styles.inputWrapper}>
                                  <InputField
                                    type="text"
                                    onBlur={handleBlur}
                                    variant="filled"
                                    name="refillDetails"
                                    value={value?.refillDetails}
                                    onChange={(e) => setFieldValue(`prescriptions[${index}].refillDetails`, e.target.value)}

                                    label="Refill Details"
                                    placeholder="input refill details"
                                    data-hasprefix="true"
                                    data-variant="design_primary"
                                    prefix={iconLoaderMap.email}
                                    fullWidth
                                  />
                                </div>
                                <div className={styles.inputWrapper}>
                                  <InputField
                                    type="file"
                                    onBlur={handleBlur}
                                    variant="filled"
                                    name="document"
                                    label="Attach a supporting document (Optional)"
                                    onChange={(e) => setFieldValue(`prescriptions[${index}].document`, e.target.value)}

                                    data-hasprefix="true"
                                    data-variant="design_primary"
                                    prefix={iconLoaderMap.calendar}
                                    fullWidth
                                  />
                                </div>
                           { index !== values?.prescriptions?.length - 1 &&     <div className={styles.addMoreBtnWrapper}>
                                  <button
                                    onClick={() => remove(index)}
                                    type="button"
                                    className={styles.addMoreButton}
                                  >
                                    {" "}
                                  -  Remove
                                  </button>
                                </div>}
                           { index === values?.prescriptions?.length - 1 &&     <div className={styles.addMoreBtnWrapper}>
                                  <button
                                    onClick={() => push(initialPrescription)}
                                    type="button"
                                    className={styles.addMoreButton}
                                  >
                                    {" "}
                                    + Add more
                                  </button>
                                </div>}
                              </div>
                            )
                          })}
                        </>
                      )
                    }}
                  </FieldArray>
                  <div className={styles.submitButtonWrapper}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      rounded
                      size="large"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      </Modal>
    </div>
  )
}



const validationSchema = Yup.object().shape({
  prescriptions: Yup.array().of(
    Yup.object().shape({
      medicationName: Yup.string().required("Medication name is required"),
      dosageSchedule: Yup.string().required("Dosage schedule is required"),
      refillDetails: Yup.string(),
      document: Yup.mixed(),
    })
  ),
})

export default UploadPrescriptionModal
