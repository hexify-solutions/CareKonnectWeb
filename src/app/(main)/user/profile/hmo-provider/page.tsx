import styles from '../page.module.css';
import HmoProviderForm from '@/components/profile/hmoProviderForm';


const HmoProvider = () => {
    return <div className={styles.formWrapper}>
        <HmoProviderForm />
    </div>
}

export default HmoProvider;
