import style from "./cbcDetails.module.css";

export const CompleteBloodCountDetails = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.detailHeader}>
                <span className={style.title}>Complete Blood Count (CBC)</span>
                <span className={style.price}>NGN 4500.99</span>
            </div>
            <p className={style.desription}>
                A CBC is a vital test that evaluates red and white blood cells, platelets, hemoglobin, and hematocrit levels. It helps detect <br />
                anemia, infections, and blood disorders, providing key insights into your overall health.
            </p>
        </div>
    );
};