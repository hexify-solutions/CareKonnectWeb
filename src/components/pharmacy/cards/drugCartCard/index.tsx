import Image from "next/image";
import styles from "./drugCartCard.module.css";
import { Button, Info, CartIconTwo, Star } from "@hexify/atoms";

const DrugCartCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.rightSection}>
        <aside className={styles.image}>
          <Image
            alt="drug"
            fill
            src="https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </aside>
        <div className={styles.drugDetails}>
          <h6 className={styles.drugName}>
            Red SealVitamin C-100ML- Natural Orange Original
          </h6>
          <span className={styles.drugDescription}>
            For oral administration, Gedeon Richter, Hungary
          </span>
          <button className={styles.drugInstruction}>
            <Info />
            <span>Instructions</span>
          </button>
        </div>
      </div>
      <div className={styles.actions}>
        <span className={styles.price}>NGN 2,599.00</span>
        <div className={styles.btnActions}>
          <Button className={styles.saveBtn} size="medium" variant="outlined" color="secondary" rounded>
            <Star fill="" stroke="currentColor" />
            <span>Save for later </span>
          </Button>
          <Button size="medium" variant="contained" rounded>
            <CartIconTwo /> <span>Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DrugCartCard;
