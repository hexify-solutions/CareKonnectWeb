import styles from "./pharmacyPage.module.css"
import { Breadcrumb } from "@hexify/atoms"
import { ImageBackgroundBanner } from "@hexify/components"
import clsx from "clsx"

const PharmacyPage = ({ slug, pharmacy  }) => {

    console.log(pharmacy, ">>>>>>>>>>>>>>>>>>> checking")
  return (

    <div>
      <div className={clsx("inner-wrapper", styles.wrapper)}>
        <Breadcrumb
          excludePaths={["pharmacy"]}
          renamePaths={{ [slug]: "pharmacys" }}
        />
        <div className={styles.banner}>
          <ImageBackgroundBanner
            style={{
              background: `url(${pharmacy?.avatarUrl || "https://s3-alpha-sig.figma.com/img/30d0/9cc1/1b8077a32b2db576066681082512ac87?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BpP4vcZ0WjmH~QuXGB5prSAICGgrGPyAdDjuxkvMTDRvISFVxLThFlAsBixXK-XsTnp-PvCAmfthcMVMJDHIzpyrEG47rTwp9TE1uwPrbE4pRJr9ju6MQ6TtGIBxdaKgwIwI73HscUUlDo12rL6j7jnNh-HDBjuHI0D0ta-wXthlGHeh9OErJzi-UNB-qYXj6jNj2TBVhXU20EWG5cZ5gZ7kCjuYyjkaw6YAmlaQWL9W0CjfRR8kOT9p7y8fwTMFU6WUE20z4HB0vIyb~tJ56somgTwWhIc87fQIRfaeNOgc58YHyD4m2A3VqZ9flmEI5xNQj4-DaJ6s-lmEl8DxVA__"})`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PharmacyPage
