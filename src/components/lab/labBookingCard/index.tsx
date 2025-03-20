import Image from "next/image";
import style from "./style.module.css";
import { CalendarTwo, Clock, Directory, LocationPin, Star, } from "@hexify/atoms";

const LabBookingCard = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.imageWrapper}>
                    <Image
                        src="https://images.pexels.com/photos/5726850/pexels-photo-5726850.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="lab scientist"
                        className={style.image}
                        width={160}
                        height={160}
                        style={{ borderRadius: "50%" }}
                    />
                </div>
                <div className={style.location}>
                    <h6 className={style.name}>Salem Specialist <br />Hospital Laboratory</h6>
                    <span className={style.address}>13, Jacob Street, Fadeyi, Lagos, Nigeria</span>
                    <div className={style.flex}>
                        <div><Star /><span>4.5</span></div>
                        <div><LocationPin /><span>1.5km from you</span></div>
                    </div>
                </div>
            </div>
            <div className={style.details}>
                <h6>Booking Details</h6>
                <div className={style.flexb}>
                    <div className={style.flexContent}><CalendarTwo /><span className={style.booking}>Tue, Mar 12, 2025</span></div>
                    <div className={style.flexContent}><Clock /><span className={style.booking}>3:00 PM</span></div>
                    <div className={style.flexContent}><Directory /><span className={style.booking}>123-45678</span></div>
                </div>
                <span className={style.test}>Kidney Function Test x 1</span>
                <span className={style.description}>Measures kidney performance and detects potential kidney diseases</span>
                <div className={style.type}>
                    <span className={style.appointment}>Appointment Type</span>
                    <span className={style.visit}>: Lab Visit</span>
                </div>
                <div className={style.comments}>
                    <span className={style.title}>Comments:</span>
                    <span className={style.text}>Hi, I’m feeling a bit run-down lately and want to get a CBC test to<br/>
                    check if everything’s okay. Can you help me book it and let me know<br/>
                    if I need to do anything special beforehand? Thanks!</span>
                </div>
                <span className={style.total}>Sub Total</span>
                <span className={style.price}>NGN 4,500.99</span>
            </div>
        </div>
            
    );
};

export default LabBookingCard;