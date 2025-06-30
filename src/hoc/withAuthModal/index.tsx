"use client"

import { useState } from "react"
import { useAuthContext } from "@/context/auth/index"
import { CancelIcon, Modal } from "@hexify/atoms"
import styles from "./withAuthModal.module.css"
import SignInForm from "@/components/auth/signInForm"

export const withAuthModal = (WrappedComponent) => {
  const Hoc = (props: any) => {
    const [showAuthModal, setShowAuthModal] = useState(false)
    const { isAuth } = useAuthContext()

    const triggerAuth = () => {
      setShowAuthModal(true)
    }

    const onCloseHandler = () => {
      setShowAuthModal(false)
    }

    return (
      <>
        <Modal open={showAuthModal} onClose={onCloseHandler}>
          <div className={styles.formWrapper}>
            <button onClick={onCloseHandler} className={styles.closeBtn}>
              <CancelIcon />
            </button>
            <SignInForm onClose={onCloseHandler} />
          </div>
        </Modal>
        <WrappedComponent
          triggerAuth={triggerAuth}
          isAuth={isAuth}
          {...props}
        />
      </>
    )
  }

  return Hoc
}
