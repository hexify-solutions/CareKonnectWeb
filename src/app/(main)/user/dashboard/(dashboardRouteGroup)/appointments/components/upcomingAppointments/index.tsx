"use client"

import styles from "./upcomingAppointments.module.css"
import { useState } from "react"
import AppointmentDetailCard from "@/components/userDashboard/appointmentDetailCard"
import useMonthYearOptions from "@/hooks/useMonthYearOptions"
import DateStripComponent from "@/components/appointment/dateStripComponent"
import { SelectField } from "@hexify/atoms"

const UpcomingAppointments = () => {

  const { months, years, currentMonth, currentYear } = useMonthYearOptions(2000, 2030)
  const [selectedMonth, setSelectedMonth ] = useState(currentMonth)
  const [selectedYear, setSelectedYear] = useState(currentYear)

  console.log(selectedMonth)

  return (
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
        <h3 className={styles.heading}>Upcoming Appointments</h3>
        <div className={styles.selectFieldWrapper}>
          <div className={styles.field}>
            <SelectField
              placeholder="Month"
              label="Month"
              type="month"
              name="month"
              onChange={(e) => {
                setSelectedMonth(e?.target?.value)
              }}
              value={selectedMonth}
              options={months}
            />
          </div>
          <div className={styles.field}>
            <SelectField
              placeholder="Year"
              onChange={(e) => {
                setSelectedYear(e?.target?.value)
              }}
              label="Year"
              name="year"
              value={selectedYear}
              options={years}
            />
          </div>
        </div>
      </div>
      <div className={styles.dateStripWrapper}>
      <DateStripComponent />
      </div>
      <AppointmentDetailCard />
    </div>
  )
}

export default UpcomingAppointments
