import SupportCard from "@/components/userDashboard/supportCard";
import styles from "./page.module.css";
import FilterButton from "@/components/filterButton";
import { CreateSupportTicket } from "@/components/userDashboard/createSupportTicket";
import { Button } from "@hexify/atoms";

const Supports = () => {
  return (
    <div>
      <header className={styles.heading}>
        <h3>Support Tickets</h3>
        <div className={styles.action}>
          <div>
            <FilterButton label="Select priority" />
          </div>
          <div>
            <FilterButton label="Status" />
          </div>
          <CreateSupportTicket />
        </div>
      </header>
      <ul>
        {Array.from({ length: 10 })?.map(() => {
          return (
            <li className={styles.supportCardItem}>
              <SupportCard />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Supports;
