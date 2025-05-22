"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import styles from "./drugCard.module.css"



const Details = ({ product, selectedDose  }: any) => {


  const [expandedSection, setExpandedSection] = useState("how-to-use")

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section)
  }

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordionItem}>
        <button
          className={styles.accordionHeader}
          onClick={() => toggleSection("key-features")}
        >
          KEY FEATURES
            {expandedSection === "key-features" ? (
              <div data-expanded="true" className={styles.accordionIconCircle}>
                <Minus size={16} className={styles.accordionIcon} />
              </div>
            ) : (
            <span className={styles.accordionIconCircle}>

                <Plus size={16} className={styles.accordionIcon} />
            </span>
            )}
        </button>
        {expandedSection === "key-features" && (
          <div className={styles.accordionContent}>{product?.keyFeatures}</div>
        )}
      </div>

      <div className={styles.accordionItem}>
        <button
          className={styles.accordionHeader}
          onClick={() => toggleSection("ingredients")}
        >
          INGREDIENTS
          {expandedSection === "ingredients" ? (
              <div data-expanded="true" className={styles.accordionIconCircle}>
                <Minus size={16} className={styles.accordionIcon} />
              </div>
            ) : (
            <span className={styles.accordionIconCircle}>

                <Plus size={16} className={styles.accordionIcon} />
            </span>
            )}
        </button>
        {expandedSection === "ingredients" && (
          <div className={styles.accordionContent}>{product?.ingredients}</div>
        )}
      </div>

      <div className={styles.accordionItem}>
        <button
          className={styles.accordionHeader}
          onClick={() => toggleSection("how-to-use")}
        >
          HOW TO USE
          {expandedSection === "how-to-use" ? (
              <div data-expanded="true" className={styles.accordionIconCircle}>
                <Minus size={16} className={styles.accordionIcon} />
              </div>
            ) : (
            <span className={styles.accordionIconCircle}>

                <Plus size={16} className={styles.accordionIcon} />
            </span>
            )}
        </button>
        {expandedSection === "how-to-use" && (
          <div className={styles.accordionContent}>
            <p>{product?.howToUse}</p>
          </div>
        )}
      </div>

      <div className={styles.accordionItem}>
        <button
          className={styles.accordionHeader}
          onClick={() => toggleSection("quality")}
        >
          QUALITY
          {expandedSection === "quality" ? (
              <div data-expanded="true" className={styles.accordionIconCircle}>
                <Minus size={16} className={styles.accordionIcon} />
              </div>
            ) : (
            <span className={styles.accordionIconCircle}>

                <Plus size={16} className={styles.accordionIcon} />
            </span>
            )}
        </button>
        {expandedSection === "quality" && (
          <div className={styles.accordionContent}>{selectedDose?.quantity}</div>
        )}
      </div>
    </div>
  )
}

export default Details
