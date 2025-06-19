"use client"
import { Form, Formik } from "formik"
import styles from "./searchNotifications.module.css"
import { Chip, FilterIcon, InputField } from "@hexify/atoms"

const SearchNotificationsAndFilter = ({
  search,
  searchCategory,
  onSubmitSearchHandler,
  onSelectFilterHandler,
}) => {
  return (
    <div className={styles.wrapper}>
      <Formik
        enableReinitialize
        onSubmit={onSubmitSearchHandler}
        initialValues={initialValues(search)}
      >
        {({ values, handleChange, errors }) => {
          return (
            <Form className={styles.form}>
              <div className={styles.inputWrapper}>
                {/* @ts-ignore */}
                <InputField
                  placeholder="Search"
                  suffix={FilterIcon}
                  name="search"
                  onChange={handleChange}
                  value={values?.search}
                  suffixProps={{
                    onClick: () => {},
                  }}
                  rounded
                  type="text"
                  className={styles.input}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "3.4375rem",
                      border: "none",
                      paddingLeft: "0.75rem",
                      paddingRight: "2.25rem",
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                />
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

const initialValues = (search: string) => {
  return {
    search,
  }
}
export default SearchNotificationsAndFilter
