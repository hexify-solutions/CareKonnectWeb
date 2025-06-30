"use client"

import { DatePicker } from "@hexify/components"
import { useRouter } from "next/navigation"
import routes from "@/lib/constants/routes"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import styles from "./doctorAppointmentForm.module.css"
import useQueryParams from "@/hooks/useQueryParams"
import { Button, InputField, SelectField, Spinner } from "@hexify/atoms"
import { withAuthModal } from "@/hoc/withAuthModal"
import { useMemo } from "react"
import { toast } from "react-toastify"
import { useCreateAppointment } from "@/http/appointment/mutation"
import dayjs from "dayjs"
import { withSuspense } from "@/hoc"
import patientVisitType from "@/data/patientVisitTypes.json"

const validationSchema = Yup.object().shape({
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  note: Yup.string().required("Enter reasons for seeing the doctor."),
  consultationType: Yup.string().required("Select consultation type."),
})

const DoctorAppointmentForm = ({ isAuth, triggerAuth, appointmentSlots }) => {
  const { buildQueryString } = useQueryParams()
  const router = useRouter()

  const appointmentMutation = useCreateAppointment()
  const onSubmitHandler = (params) => {
    if (!isAuth) {
      return triggerAuth()
    }

    const date = params?.date?.format("YYYY-MM-DD")
    const timeId = appointmentSlots?.[date]?.find(
      (option) => option.time24 === params?.time
    )?.id

    const data = {
      notes: params?.note,
      selectedTime: params?.time,
      timeAvailabilityId: timeId,
      consultationType: params?.consultationType,
    }

    appointmentMutation?.mutate(data, {
      onSuccess: (data: { data: { id: string; doctorDetailsId: string } }) => {
        toast.success("Appointment slot booked")
        const queryString = buildQueryString({
          appointmentId: data?.data?.id,
          doctor: data?.data?.doctorDetailsId,
        })
        router.push(routes.doctorPayment(`?${queryString}`))
      },
      onError: () => {
        toast.error("Could not book appointment")
      },
    })
  }

  const allowedDates = useMemo(() => {
    return Object.keys(appointmentSlots || {}).map((date) => dayjs(date))
  }, [appointmentSlots])

  const consultationType = useMemo(
    () =>
      patientVisitType.map((types) => ({
        ...types,
        label: types.visit_type,
        value: types.visit_type,
      })),
    []
  )

  return (
    <Formik
      initialValues={{ date: "", time: "", note: "", consultationType: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
      enableReinitialize
    >
      {({ setFieldValue, values, errors, touched, handleChange }) => {
        const timeOptions =
          appointmentSlots?.[values?.date?.format?.("YYYY-MM-DD")]?.map(
            (option) => ({
              label: `${option.time} - ${option?.duration} minutes`,
              value: option?.time24,
            })
          ) || []

        return (
          <Form>
            <div className={styles.formInputWrapper}>
              <DatePicker
                onChange={(dateValue) => setFieldValue("date", dateValue)}
                shouldDisableDate={(date) =>
                  !allowedDates.some((allowedDate) =>
                    allowedDate.isSame(date, "day")
                  )
                }
                error={touched.date && Boolean(errors.date)}
                // helperText={touched.date && errors.date}
              />
            </div>
            {timeOptions && timeOptions?.length > 0 && (
              <div className={styles.formInputWrapper}>
                <SelectField
                  className={styles.selectField}
                  onChange={(e) => setFieldValue("time", e?.target?.value)}
                  name="time"
                  value={values.time}
                  options={timeOptions}
                  label="Select Time"
                  error={touched.time && Boolean(errors.time)}
                  // helperText={touched.time && errors.time}
                />
              </div>
            )}
            <div className={styles.formInputWrapper}>
              <SelectField
                className={styles.selectField}
                onChange={(e) =>
                  setFieldValue("consultationType", e?.target?.value)
                }
                label="Consultation Type"
                value={values.consultationType}
                options={consultationType}
                name="consultationType"
                error={
                  touched.consultationType && Boolean(errors.consultationType)
                }
                // helperText={touched.time && errors.time}
              />
            </div>
            <div className={styles.formInputWrapper}>
              <InputField
                fullWidth
                multiline
                minRows={4}
                type="text"
                showLabel
                label="Consultation Reasons/Note."
                data-variant="design_secondary"
                onChange={handleChange}
                name="note"
                value={values.note}
                placeholder="Describe why you want to see a doctor"
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button
                type="submit"
                size="large"
                fullWidth
                color="primary"
                variant="contained"
                rounded
                disabled={appointmentMutation.isPending}
              >
                {appointmentMutation.isPending ? (
                  <Spinner />
                ) : (
                  "Book Appointment"
                )}
              </Button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default withAuthModal(withSuspense(DoctorAppointmentForm))
