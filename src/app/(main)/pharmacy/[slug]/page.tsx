import PharmacyPage from "@/components/pharmacy/pharmacyPage"
import { getPharmacyById } from "@/http/pharmacy/serverActions"

const Pharmacy = async ({ params }) => {
  const parsedParams = await params

  const pharmacy = await getPharmacyById(parsedParams?.slug)

  return (
  <PharmacyPage slug={parsedParams?.slug} pharmacy={pharmacy} />
  )
}

export default Pharmacy
