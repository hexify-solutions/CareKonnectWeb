import LabBookingCard from "@/components/lab/labBookingCard";
import { PaymentSelection } from "@hexify/components";
import style from "./page.module.css";
import SignupBanner from "@/app/(main)/_components/signupBanner";

const TestPayment = () => {
    return (
        <div>
            <div className="inner-wrapper">
                <div className={style.flex}>
                    <LabBookingCard />
                    <div className={style.payment}>
                        <h6>Payment Method</h6>
                        <PaymentSelection />
                    </div>
                </div>
            </div>
            <SignupBanner />
        </div>
    )
}

export default TestPayment;