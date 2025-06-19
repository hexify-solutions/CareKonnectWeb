import React, { useRef, useState, useEffect } from "react"
import styles from "./SpecializationCarousel.module.css"
import { useSpecializationListQuery } from "@/http/appointment/query"
import { ArrowCurvedRight } from "@hexify/atoms"
import { ArrowRight, ArrowLeft } from "lucide-react"

interface SpecializationCarouselProps {
  onSelect: (specializationId: string, specialization?: any) => void
}
export default function SpecializationCarousel(
  props: SpecializationCarouselProps
): JSX.Element {
  const scrollRef = useRef(null)
  const { data: { data: specializations = [] } = {}, isLoading } =
    useSpecializationListQuery()
  const [selected, setSelected] = useState(null)
  const [colorsMap, setColorsMap] = useState({})

  console.log({ specializations })
  useEffect(() => {
    if (isLoading || !specializations) return
    const newMap = {}
    specializations?.forEach?.((item) => {
      newMap[item.specialization.name] = getRandomColor()
    })
    setColorsMap(newMap)
  }, [isLoading])

  const scrollBy = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
    }
  }

  const handleSelect = async (item) => {
    setSelected(item?.name)
    props.onSelect?.(item.name, item)
  }

  if (isLoading || !specializations) return null
  return (
    <div className={styles.carouselContainer}>
      <button className={styles.navButton} onClick={() => scrollBy(-200)}>
        <ArrowLeft />
      </button>
      <div className={styles.pillContainer} ref={scrollRef}>
        {specializations?.map?.((data) => {
          const item = data.specialization.name
          const style = colorsMap[item] || {}
          const isSelected = selected === item
          return (
            <button
              key={item}
              onClick={() => handleSelect(data.specialization)}
              className={`${styles.pill} ${isSelected ? styles.selected : ""}`}
              style={!isSelected ? style : {}}
            >
              {item}
            </button>
          )
        })}
      </div>
      <button className={styles.navButton} onClick={() => scrollBy(200)}>
        <ArrowRight />
      </button>
    </div>
  )
}

function getRandomColor() {
  const bgColors = ["#e0f7fa", "#ffe0b2", "#f8bbd0", "#d1c4e9", "#c8e6c9"]
  const textColors = ["#006064", "#e65100", "#880e4f", "#4a148c", "#1b5e20"]
  const i = Math.floor(Math.random() * bgColors.length)
  return { backgroundColor: bgColors[i], color: textColors[i] }
}
