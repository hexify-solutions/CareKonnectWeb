import Categories from "./_components/categories";
import SpecialistList from "@/components/specialistList";
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <div>
        <Categories />
      </div>
      <div className={styles.specialistWrapper}>
        <SpecialistList />
      </div>
    </>
  );
}
