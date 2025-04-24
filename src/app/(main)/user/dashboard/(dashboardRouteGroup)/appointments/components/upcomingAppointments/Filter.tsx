"use client"

import AppointmentDetailCard from "@/components/userDashboard/appointmentDetailCard"
import useMonthYearOptions from "@/hooks/useMonthYearOptions"
import DateStripComponent from "@/components/appointment/dateStripComponent"
import { SelectField } from "@hexify/atoms"
import { Suspense, useState } from "react"
import styles from "./upcomingAppointments.module.css"

const UpcomingAppointmentFilter = () => {

      const { months, years, currentMonth, currentYear } = useMonthYearOptions(
    2000,
    2030
  )
  const [selectedMonth, setSelectedMonth] = useState(currentMonth)
  const [selectedYear, setSelectedYear] = useState(currentYear)


  return (
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
          options={[]}
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
          options={[]}
        />
      </div>
    </div>
  )
}

export default UpcomingAppointmentFilter
