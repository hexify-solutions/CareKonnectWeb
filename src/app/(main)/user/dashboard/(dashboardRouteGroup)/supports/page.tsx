import styles from "./page.module.css";
import FilterButton from "@/components/filterButton";
import { CreateSupportTicket } from "@/components/userDashboard/createSupportTicket";
import SupportTicketList from "@/components/userDashboard/supportTicketList";
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
      <SupportTicketList />
    </div>
  );
};

export default Supports;
