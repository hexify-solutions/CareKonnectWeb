"use client";

import { Modal, CancelIcon, Button } from "@hexify/atoms";
import styles from "./logoutModal.module.css";
import { useAuthContext } from "@/context/auth";
import useQueryParams from "@/hooks/useQueryParams";

const LogoutModal = () => {
const { getAllQueryParams, removeQueryParams } = useQueryParams();
const { useraction: userAction } = getAllQueryParams();
const { onLogOut } = useAuthContext();



const handleLogout = () => {
  onLogOut?.();
}


const cancelHandler = () => {
    removeQueryParams(['useraction'])
}

  return (
    <div>
      <Modal open={userAction === 'logout'} onClose={cancelHandler}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h6 className={styles.heading}>Log out from your Account</h6>
            <span className={styles.subHeading}>
              Are you sure you want to logout?
            </span>
            <div className={styles.btnWrapper}>
              <Button variant="contained" rounded size="large" onClick={cancelHandler}>
                No. Keep me signed in
              </Button>
              <Button onClick={handleLogout} variant="outlined" rounded size="large">
                Yes, Log out
              </Button>
            </div>
          </div>
          <button onClick={cancelHandler} className={styles.cancelBtn}>
            <CancelIcon />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default LogoutModal;
