import { useState, useEffect } from "react";

// Define a type for a single calendar day
interface CalendarDay {
  date: number;
  dayOfWeek: string;
}

const useCalendarDates = (monthOffset: number = 0): (CalendarDay | null)[] => {
  const [dates, setDates] = useState<(CalendarDay | null)[]>([]);

  useEffect(() => {
    const currentDate = new Date();

    // Adjust the month
    currentDate.setMonth(currentDate.getMonth() + monthOffset);

    // Get the first and last days of the current month
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    // Get the day of the week for the first day of the month
    const firstDayOfWeek = firstDay.getDay();

    // Array of weekday names
    const weekdayNames: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Create an array of dates with the corresponding day of the week
    const daysInMonth: (CalendarDay | null)[] = [];

    // Add leading empty days for the first week
    for (let i = 0; i < firstDayOfWeek; i++) {
      daysInMonth.push(null); // To keep the layout consistent, empty cells will be `null`
    }

    // Add the actual days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      const dayOfWeek = weekdayNames[date.getDay()]; // Get the name of the day
      daysInMonth.push({ date: i, dayOfWeek: dayOfWeek || "" });
    }

    setDates(daysInMonth);
  }, [monthOffset]);

  return dates;
};

export default useCalendarDates;
