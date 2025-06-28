"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import CategorySearch from "./categorySearch"
import styles from "./hero.module.css"
import clsx from "clsx"
import SpecializationCarousel from "@/app/(main)/_components/specializationCarousel"
import textData from "../../../test-data.json"

const backgrounds = [
  "https://images.pexels.com/photos/5452290/pexels-photo-5452290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/25568827/pexels-photo-25568827/free-photo-of-smiling-couple-with-vintage-album.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
]

const duration = 10000

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length)
    }, duration)
    return () => clearInterval(interval)
  }, [backgrounds.length])

  return (
    <div className={styles.wrapper}>
      {JSON.stringify(textData)}
      <motion.div
        key={currentIndex}
        className={styles.reel}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ backgroundImage: `url(${backgrounds[currentIndex]})` }}
      ></motion.div>
      <div className={styles.content}>
        <div className={clsx("inner-wrapper", styles.container)}>
          <h2 className={styles.heading}>Because Your Health Matters</h2>
          <span className={styles.lead}>
            Everyone deserves access to quality care and wellness resources, to
            live their best life.
          </span>
          <CategorySearch className={styles.inputField} />
        </div>
      </div>
    </div>
  )
}

export default Hero
