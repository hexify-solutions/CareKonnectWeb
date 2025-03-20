import { Button, Info, CartIconTwo, Star } from "@hexify/atoms";
import style from "./style.module.css";

export const LabTestCard = ({ onAddToCart, testLink }) => {
    return (
        <div className={style.card}>
            <a href={testLink}>
                <div className={style.testInfo}>
                    <h6 className={style.testName}>Kidney Function Test</h6>
                    <span className={style.description}>Measures kidney performance and detects potential kidney diseases</span>
                    <button className={style.testInstruction}>
                        <Info />
                        <span>Test Instructions</span>
                    </button>
                </div>
                <div className={style.actions}>
                    <span className={style.price}>NGN 5,000.00</span>
                    <div className={style.btnContainer}>
                        <Button className={style.saveBtn} size="medium" variant="outlined" color="secondary" rounded>
                            <Star fill="" stroke="currentColor" />
                            <span>Save for later </span>
                        </Button>
                        <Button size="medium" variant="contained" onClick={onAddToCart} rounded>
                            <CartIconTwo /> <span>Add to cart</span>
                        </Button>
                    </div>
                </div>
            </a>        
        </div>
    );
};