import { Breadcrumb } from "@hexify/atoms";
import { ImageBackgroundBanner } from "@hexify/components";
import PharmacyDetails from "@/components/pharmacy/pharmacyDetails";
import PharmacyActions from "@/components/pharmacy/pharmacyActions";
import PharmacyProductList from "@/components/pharmacy/pharmacyProductList";
import styles from "./pharmacy.module.css";
import SignupBanner from "@/app/(main)/_components/signupBanner";
import DrugCard from "@/components/pharmacy/cards/drugCard";

const Pharmacy = async ({ searchParams }) => {
  const params = await searchParams;


  return (
    <div>
      <div className="inner-wrapper">
        <Breadcrumb excludePaths={["hospital"]} />
        <div className={styles.banner}>
          <ImageBackgroundBanner
            style={{
              background: `url(https://s3-alpha-sig.figma.com/img/30d0/9cc1/1b8077a32b2db576066681082512ac87?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BpP4vcZ0WjmH~QuXGB5prSAICGgrGPyAdDjuxkvMTDRvISFVxLThFlAsBixXK-XsTnp-PvCAmfthcMVMJDHIzpyrEG47rTwp9TE1uwPrbE4pRJr9ju6MQ6TtGIBxdaKgwIwI73HscUUlDo12rL6j7jnNh-HDBjuHI0D0ta-wXthlGHeh9OErJzi-UNB-qYXj6jNj2TBVhXU20EWG5cZ5gZ7kCjuYyjkaw6YAmlaQWL9W0CjfRR8kOT9p7y8fwTMFU6WUE20z4HB0vIyb~tJ56somgTwWhIc87fQIRfaeNOgc58YHyD4m2A3VqZ9flmEI5xNQj4-DaJ6s-lmEl8DxVA__)`,
            }}
          >
            <PharmacyDetails />
          </ImageBackgroundBanner>
        </div>
        <div className={styles.actionsWrapper}>
          <PharmacyActions />
        </div>
          <div className={styles.productList}>
        {!params?.drug && (
            <PharmacyProductList />
          )}
        {!!params?.drug && (
            <DrugCard />
          )}
          </div>
 
      </div>
      <SignupBanner />
    </div>
  );
};

export default Pharmacy;
