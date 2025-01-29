import styles from "./drugCard.module.css";
import { Breadcrumb, ArrowLeft, Rating } from "@hexify/atoms";
import Image from "next/image";

const DrugCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.breadCrumbWrapper}>
        <ArrowLeft /> <Breadcrumb />
      </div>
      <div className={styles.drugDetails}>
        <aside className={styles.drugImage}>
          <Image
            fill
            src="https://s3-alpha-sig.figma.com/img/33ec/0ad1/d2cbf66fea204da46ca6f7c9c79fc067?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hYnTjyRRo2SCGd1WbKkOdWLalECWCJ9qXTujTFbr2~L6UTPTv13NkuWtodXBJljM1~KczrKvY-pDVFvXg6qwYYLBNlR-VmMiODxeMBVlGkeFNE3Mrm-ZA8RyQNAz-iH1ClGhfNBc87KGJue4URqsdMpM8fzW~UXDZvqUhGO7vYWxv~zmN7RnFQs9kDhnY8eSshc4jtxPKBFJFyLE866NDMRgE-AzddpcTvk9M8f38H7RJ8x4NDJsomhxZf5pbqLBeMHXKirLWPHK~-LjDujsUijC64MtKGPbt6pqgNpo47IN6jdaGT-5vapHAnOLuMu1J8CWuEVx~yZmNw0FoptQ9Q__"
            alt="drug picture"
          />
        </aside>
        <div className={styles.drugInfo}>
          <h6 className={styles.heading}>Vitamin C-100ML-Original</h6>
          <div className={styles.rating}>
            <div className={styles.star}>
              <Rating value={4.5} />
              <span>288 reviews</span>
            </div>
            <span>|</span>
            <span>100ml</span>
          </div>
          <div>
            <ul>
                <button>-</button>
                
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugCard;
