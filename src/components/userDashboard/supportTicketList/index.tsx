"use client"


import SupportCard from "../supportCard";
import styles from "./supportCardList.module.css"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const SupportTicketList = () => {

    const pathname = usePathname();
    const router = useRouter();


    const openTicketHandler = () => {
        router.push(`${pathname}/ticketno`)
    }
  return (
    <ul>
      {Array.from({ length: 10 })?.map(() => {
        return (
          <li className={styles.supportCardItem}>
            <SupportCard openTicketHandler={openTicketHandler} />
          </li>
        );
      })}
    </ul>
  );
};

export default SupportTicketList;
