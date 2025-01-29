"use client";

import { Modal, Button } from "@hexify/atoms";
import styles from "./deleteModal.module.css";
import useQueryParams from "@/hooks/useQueryParams";
const ProfileDeleteModal = () => {
  const { getAllQueryParams, removeQueryParams } = useQueryParams();
  const { useraction: userAction } = getAllQueryParams();

  const cancelHandler = () => {
    removeQueryParams(["useraction"]);
  };

  return (
    <div>
      <Modal open={userAction === "delete"} onClose={cancelHandler}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h6 className={styles.heading}>Delete your Account</h6>
            <span className={styles.subHeading}>
              Are you sure you want to delete your account?
            </span>
            <div className={styles.btnWrapper}>
              <Button
                variant="contained"
                rounded
                size="large"
                onClick={cancelHandler}
              >
                No. Do not delete
              </Button>
              <Button variant="outlined" rounded size="large" color="warning">
                Yes, Delete
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileDeleteModal;
