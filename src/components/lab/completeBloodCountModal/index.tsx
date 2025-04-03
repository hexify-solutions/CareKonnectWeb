import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CompleteBloodCount from "@/app/(main)/_components/testsModal/completeBloodCount";
import { CancelIcon, Modal } from "@hexify/atoms";
import style from "./cbcModal.module.css";


export const cbcQuery = "action=cbc";

const CBCModal = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [openCBCModal, setOpenCBCModal] = useState<boolean>(false);

    const handleClose = () => {
        setOpenCBCModal(false);
        router.push(window?.location?.pathname, { scroll: false }); 
    };

    useEffect(() => {
        const action = searchParams.get("action");
        if (action === "cbc") {
            setOpenCBCModal(true);
        }
    }, [searchParams]);


    return (
        <Modal open={openCBCModal} onClose={handleClose}>
            <div className={style.cbcWrapper}>
                <button className={style.closeButton} onClick={handleClose}>
                    <CancelIcon />
                </button>
                <CompleteBloodCount />
            </div>
        </Modal>
    );
};

export default CBCModal;