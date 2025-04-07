import VitalsForm from "@/components/profile/vitalsForm"
import styles from '../page.module.css';
import { getUserVitals } from "@/http/user/serverAction";

const Vitals = async () => {

    const vitals = await getUserVitals();


    return <div className={styles.formWrapper}>
        <VitalsForm vitals={vitals} />
    </div>
}

export default Vitals;
