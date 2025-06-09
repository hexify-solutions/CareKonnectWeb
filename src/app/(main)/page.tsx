import Categories from "./_components/categories"
import SpecialistList from "@/components/specialistList"
import SignupBanner from "./_components/signupBanner"
import Hero from "@/components/hero"
import ScrollableBanner from "./_components/scrollableBanner"
import InnovationBanner from "@/components/innovationBanner"
import styles from "./page.module.css"
import clsx from "clsx"
import { Suspense } from "react"
import SpecialistListLoader from "@/components/specialistList/specialistLoader"
import HomePage from "@/app/(main)/home/page"

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  )
}
