import clsx from "clsx"
import { Breadcrumb, LocationPin } from "@hexify/atoms"
import { getPharmacyById } from "@/http/pharmacy/serverActions"
import parseKeyValueArray from "@/lib/utils/parsedKeyValueArray"
import { ImageBackgroundBanner } from "@hexify/components"
import styles from "./drug.module.css"
import PharmacyBanner from "@/components/pharmacy/pharmacyBanner"
import DrugCard from "@/components/pharmacy/cards/drugCard"

const PharmacyDrugPage = async ({ params }) => {
  const parsedParams = await params
  const formattedParams = parseKeyValueArray(parsedParams?.drug)

  console.log(
    parsedParams,
    formattedParams,
    ">>>>>>>>>>>>>>>>>>>> tis is the pased params"
  )

  const pharmacy = await getPharmacyById(formattedParams?.p || "")

  console.log(pharmacy, ">>>>>>>>>>>>>>>> from drugs page")
  return (
    <div>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        <Breadcrumb
          excludePaths={[
            "pharmacy",
            ...(parsedParams?.drug || []),
            "drugdetails",
          ]}
          additionalPaths={{
            [pharmacy?.name]: `/pharmacy/${pharmacy?.id}`,
            "View all": `/pharmacy/${pharmacy?.id}`,
          }}
        />
        <PharmacyBanner pharmacy={pharmacy} />
        <div className={styles.drugCardWrapper}>
        <DrugCard />
        </div>
      </div>
    </div>
  )
}

export default PharmacyDrugPage
