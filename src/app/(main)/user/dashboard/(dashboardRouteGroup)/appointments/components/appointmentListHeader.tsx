"use client";
import { Button, CalendarIcon, InputField, SearchIcon} from "@hexify/atoms";
import { useState } from "react";
import FilterButton from "@/components/filterButton";
import styles from "./component.module.css";
import BookNewAppointmentModal from "@/components/appointment/bookNewAppointmentModal";

const AppointmentListHeader = () => {
  return (
    <div className={styles.appointmentListWrapper}>
      <h6 className={styles.listHeading}>Appointment History</h6>
      <div className={styles.listActionsWrapper}>
      <InputField
            type="text"
            name="search"
            onChange={() => {}}
            placeholder="Search benefits"
            suffix={SearchIcon}
            className={styles.searchInput}
            rounded
            data-variant="design_primary"
            hasSuffix
          />
        <div className={styles.listBtnWrapper}>
          <FilterButton label="Appointments" />
          <BookAppointment />
        </div>
      </div>
    </div>
  );
};

const BookAppointment = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        size="large"
        variant="contained"
        rounded
      >
        <CalendarIcon type="two" /> Book new Appointment
      </Button>
      <BookNewAppointmentModal
        cancelHandler={() => setOpenModal(false)}
        open={openModal}
      />
    </>
  );
};
export default AppointmentListHeader;
