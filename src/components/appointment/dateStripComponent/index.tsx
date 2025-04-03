import styles from "./dateStrip.module.css";
import useCalendarDates from "@/hooks/useCalendarDates";

const DateStripComponent = () => {
    const dates = useCalendarDates();
    console.log(dates, "this is the dates here")
    return <div>this is the date strip component</div>
}

export default DateStripComponent;
