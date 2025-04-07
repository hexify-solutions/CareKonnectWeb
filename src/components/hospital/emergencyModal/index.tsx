"use client"
import { useEffect, useState } from "react";
import { Modal } from "@hexify/atoms";
import { useSearchParams } from "next/navigation";
import EmergencyForm from "@/app/(main)/_components/emergencyForm";
import styles from "./emergencyModal.module.css";
import { withSuspense } from '@/hoc';

export const emergencyQuery = "action=emergency";

const EmergencyModal = () => {
  const searchParams = useSearchParams();
  const [openEmergencyModal, setOpenEmergencyModal] = useState<boolean>(false);

  const handleClose = () => {
    setOpenEmergencyModal(false);
    const currentPath = window?.location?.pathname;
    window.history.replaceState(null, "", currentPath);
  };

  useEffect(() => {
    const action = searchParams.get("action");
    if (action === "emergency") {
      setOpenEmergencyModal(true);
    }
  }, [searchParams]);

  return (
    <Modal open={openEmergencyModal} onClose={handleClose}>
      <div className={styles.formWrapper}>
        <EmergencyForm cancelHandler={handleClose} />
      </div>
    </Modal>
  );
};

export default withSuspense(EmergencyModal);
