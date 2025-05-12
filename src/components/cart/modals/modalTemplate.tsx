"use client"
import styles from './modalTemplate.module.css';
import {
    CancelIcon,
    Logo,
    Modal,

    FacebookIcon,
    Instagram,
    Twitter,
    Linkedin,
  } from "@hexify/atoms"

const ModalTemplate = ({ cancelHandler, showHeader  = true, children, open, showFooter = true }: any) =>  {

    return (
        <Modal open={open}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
         {showHeader &&   <header className={styles.header}>
              <aside className={styles.logoWrapper}>
                <Logo variant="dark" />
              </aside>
              <button className={styles.cancelBtn} onClick={cancelHandler}>
                <CancelIcon />
              </button>
            </header>}
          <div className={styles.detailsWrapper}>
  
             {children}
{showFooter &&            <footer className={styles.footer}>
              <div>
                Need help?{" "}
                <span className={styles.emp}>Contact our support team</span>or no
                longer interested in the booking? Talk to the{" "}
                <span className={styles.emp}>Help Center.</span> Want to give us
                feedback? Let us know what you think on our{" "}
                <span className={styles.emp}> feedback page</span>.
              </div>
              <ul className={styles.iconWrapper}>
                <li>
                  <a href="https://www.facebook.com">
                    <FacebookIcon variant="boarded" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com">
                    <Linkedin variant="boarded" />
                  </a>
                </li>
                <li>
                  <a href="https://www.x.com">
                    <Twitter variant="boarded" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <Instagram variant="boarded" />
                  </a>
                </li>
              </ul>
            </footer>}
          </div>
          </div>
        </div>
      </Modal>
    )
}

export default ModalTemplate;
