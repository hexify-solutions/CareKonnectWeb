import styles from "./emergencyForm.module.css";
import { Button, ChevronLeft, InputField } from "@hexify/atoms";
import { Formik, Form } from "formik";

const EmergencyForm = ({ cancelHandler }) => {
  return (
    <Formik onSubmit={() => {}} initialValues={{}} enableReinitialize>
      {() => {
        return (
          <Form className={styles.form}>
            <div className={styles.header}>
              <button onClick={cancelHandler} className={styles.backBtn}>
                {" "}
                <ChevronLeft />
              </button>
              <span> Emergency Service</span>
            </div>
            <div className={styles.inputSection}>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  defaultValue="Select an option"
                  label="Emergency Type"
                  variant="filled"
                  data-variant="design_primary"
                  type="text"
                  name="type"
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  defaultValue="Enter your location"
                  label="Current Location"
                  variant="filled"
                  data-variant="design_primary"
                  type="text"
                  name="type"
                />
              </div>
              <div className={styles.inputWrapper}>
                <InputField
                  fullWidth
                  defaultValue="Give more details about the emergency"
                  label="Description (optional)"
                  variant="filled"
                  data-variant="design_primary"
                  type="text"
                  name="type"
                  multiline={true}
                  rows={5}
                />
              </div>
              <div className={styles.btnWrapper}>
                <Button
                onClick={cancelHandler}
                  rounded
                  design-variant="secondary"
                  size="large"
                  variant="contained"
                  className={styles.cancelBtn}
                >
                  Cancel
                </Button>
                <Button
                  size="large"
                  rounded
                  variant="contained"
                  design-variant="primary"
                  color="primary"
                >
                  Submit Emergency
                </Button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EmergencyForm;
