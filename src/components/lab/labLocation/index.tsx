import style from "./style.module.css";
import { LocationPin } from "@hexify/atoms";

const LabLocation = () => {
    return (
      <div className={style.bannerContainer}>
        <div className={style.bannerHeading}>
          Salem Specialist Hospital Laboratory
        </div>
        <span className={style.bannerLocation}>
          <span>
            <LocationPin />{" "}
          </span>
          <span>
            Plot 12, Adeola Odeku Street, Victoria Island, Lagos (1.5 km from you)
          </span>
        </span>
      </div>
    );
  };

  export default LabLocation;