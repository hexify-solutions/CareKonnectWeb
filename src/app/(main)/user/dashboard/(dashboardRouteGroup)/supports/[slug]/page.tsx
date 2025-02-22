import { CreateSupportTicket } from "@/components/userDashboard/createSupportTicket";
import routes from "@/lib/constants/routes";
import { ArrowLeft, InputField, Button } from "@hexify/atoms";
import Link from "next/link";
import styles from "./page.module.css";
import SupportCard from "@/components/userDashboard/supportCard";
import SupportMessageCard from "@/components/userDashboard/supportMessageCard";

const SupportTicket = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.ticketLabel}>
          <Link href={routes.userDashboardSupports} className={styles.link}>
            <ArrowLeft />
          </Link>
          <span>Ticket ID# 2023-CS123</span>
        </div>
        <CreateSupportTicket />
      </div>
      <div className={styles.messageWrapper}>
        <SupportCard />
        {Array.from({ length: 3 })?.map((_, index) => {
          return (
            <div key={index}>
              <SupportMessageCard />
            </div>
          );
        })}
      </div>
      <div className={styles.formWrapper}>
        <InputField
          fullWidth
          multiline
          minRows={5}
          placeholder="Type message here"
        />
        <div className={styles.replyBtn}>
          <Button variant="contained" rounded size="small">
            Send reply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SupportTicket;
