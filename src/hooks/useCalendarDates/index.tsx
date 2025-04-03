import { useState, useEffect } from "react";

// Define a type for a single calendar day
interface CalendarDay {
  date: number;
  dayOfWeek: string;
}

const useCalendarDates = (month?: number, year?: number): (CalendarDay | null)[] => {
  const [dates, setDates] = useState<(CalendarDay | null)[]>([]);

  useEffect(() => {
    const currentDate = new Date();
    const targetMonth = month ?? currentDate.getMonth();
    const targetYear = year ?? currentDate.getFullYear();

    // Ensure valid month and year
    if (targetMonth < 0 || targetMonth > 11 || targetYear < 0) return;

    // Get the first and last days of the specified month
    const firstDay = new Date(targetYear, targetMonth, 1);
    const lastDay = new Date(targetYear, targetMonth + 1, 0);

    // Get the day of the week for the first day of the month
    const firstDayOfWeek = firstDay.getDay();

    // Array of weekday abbreviations
    const weekdayNames: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Create an array of dates with the corresponding day of the week
    const daysInMonth: (CalendarDay | null)[] = [];

    // Add leading empty days for the first week
    for (let i = 0; i < firstDayOfWeek; i++) {
      daysInMonth.push(null); // To keep the layout consistent, empty cells will be `null`
    }

    // Add the actual days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(targetYear, targetMonth, i);
      daysInMonth.push({ date: i, dayOfWeek: weekdayNames[date.getDay()] });
    }

    setDates(daysInMonth);
  }, [month, year]);

  return dates;
};

export default useCalendarDates;
