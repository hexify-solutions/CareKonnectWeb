import { useMemo } from "react";

const useMonthYearOptions = (startYear: number, endYear: number) => {
  const currentDate = new Date();
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Zero-padded
  const currentYear = currentDate.getFullYear().toString();

  const months = useMemo(
    () =>
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ].map((month, index) => ({
        label: month,
        value: (index + 1).toString().padStart(2, "0"), // Ensures two-digit format
      })),
    []
  );

  const years = useMemo(() => {
    const yearArray = [];
    for (let year = startYear; year <= endYear; year++) {
      yearArray.push({ label: year.toString(), value: year.toString() });
    }
    return yearArray;
  }, [startYear, endYear]);

  return { months, years, currentMonth, currentYear };
};

export default useMonthYearOptions;