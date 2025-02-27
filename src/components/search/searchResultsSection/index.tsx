import styles from './searchResultsSection.module.css';
import { DoctorCard } from '@hexify/components';

const SearchResultSection = () => {
    return <div className={styles.wrapper}>
       <h4 className={styles.sectionHeading}>Doctors</h4>
       <div className={styles.list}>
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
       </div>
    </div>
}

export default SearchResultSection;

