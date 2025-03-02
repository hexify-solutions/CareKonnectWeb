import CBC_ICON from "../assets/cbc_icon.png";
import Image from "next/image";
import { Button, CartIconTwo, Rating, Heart, CircleCheckFilled } from "@hexify/atoms";
import CounterButton from "../../counterButton";
import style from "./completeBloodCount.module.css";

const CompleteBloodCount = () => {
    return (
        <div className={style.cbcContainer}>
            <div className={style.dropWrap}>
                <Image
                    src={CBC_ICON}
                    alt="complete blood count"
                    className={style.droplet}
                />
            </div>
            <div className={style.details}>
                <h6>Complete Blood Count (CBC)</h6>
                <div className={style.rating}>
                    <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        sx={{
                            "& .MuiRating-iconFilled": { color: "#A9D292" }
                        }}
                        readOnly
                    />
                    <span className={style.review}>288 reviews</span>
                </div>
                <span className={style.price}>NGN 4500.99</span>
                <p>A CBC is a vital test that evaluates red and white blood cells, platelets,<br />
                hemoglobin, and hematocrit levels. It helps detect anemia, infections, and <br />
                blood disorders, providing key insights into your overall health.</p>
                <div className={style.actions}>
                    <CounterButton />
                    <Button sx={{ width: "258px", height: "44px" }} size="medium" variant="contained" rounded>
                        <CartIconTwo /> <span>Add to cart</span>
                    </Button>
                </div>
                <div className={style.like}>
                    <Button variant="text">
                        <Heart /> <span className={style.wishlist}>Add to wishlist</span>
                    </Button>
                    <div className={style.pledge}>
                        <CircleCheckFilled />
                        <span className={style.vow}>30 days money back guarantee</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompleteBloodCount;