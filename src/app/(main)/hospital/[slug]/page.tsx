import { Breadcrumb } from "@hexify/atoms";
import { Gallery } from "@hexify/components";
import HospitalDetails from "../_component/hospitalDetails";
import styles from "./page.module.css";
import SpecialistList from "@/components/specialistList";
import SignupBanner from "../../_components/signupBanner";
import BookingCard from "../_component/hospitalBookingCard";
const Hospital = () => {
  return (
    <div>
      <div className="inner-wrapper">
        <div>
          <Breadcrumb excludePaths={["hospital"]} />
        </div>
        <div className={styles.galleryWrapper}>
          <Gallery images={images} />
        </div>
        <div className={styles.detailWrapper}>
          <div className={styles.detailSection}>
            <HospitalDetails />
          </div>
          <div className={styles.bookingSection}>
            <BookingCard />
          </div>
        </div>
        <div className={styles.specialistWrapper}>
          <h3
            className={styles.specialListHeading}
            arial-label="Top Specialist"
          >
            Doctors & Specialist
          </h3>
          <SpecialistList size={"small"} />
        </div>
      </div>
      <SignupBanner />
    </div>
  );
};

const images = [
  {
    alt: "screen one",
    src: "https://images.pexels.com/photos/28594392/pexels-photo-28594392/free-photo-of-artistic-flat-lay-of-coffee-essentials-on-dark-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    alt: "screen two",
    src: "https://images.pexels.com/photos/14526629/pexels-photo-14526629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    alt: "screen three",
    src: "https://images.pexels.com/photos/29487999/pexels-photo-29487999/free-photo-of-seagulls-flying-over-istanbul-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    alt: "screen four",
    src: "https://images.pexels.com/photos/28594392/pexels-photo-28594392/free-photo-of-artistic-flat-lay-of-coffee-essentials-on-dark-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    alt: "screen five",
    src: "https://images.pexels.com/photos/29846888/pexels-photo-29846888/free-photo-of-portrait-of-woman-by-water-in-denim-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
export default Hospital;
