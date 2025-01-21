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
            src="https://s3-alpha-sig.figma.com/img/33ec/0ad1/d2cbf66fea204da46ca6f7c9c79fc067?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hYnTjyRRo2SCGd1WbKkOdWLalECWCJ9qXTujTFbr2~L6UTPTv13NkuWtodXBJljM1~KczrKvY-pDVFvXg6qwYYLBNlR-VmMiODxeMBVlGkeFNE3Mrm-ZA8RyQNAz-iH1ClGhfNBc87KGJue4URqsdMpM8fzW~UXDZvqUhGO7vYWxv~zmN7RnFQs9kDhnY8eSshc4jtxPKBFJFyLE866NDMRgE-AzddpcTvk9M8f38H7RJ8x4NDJsomhxZf5pbqLBeMHXKirLWPHK~-LjDujsUijC64MtKGPbt6pqgNpo47IN6jdaGT-5vapHAnOLuMu1J8CWuEVx~yZmNw0FoptQ9Q__"
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
