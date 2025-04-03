"use client";
import { useState } from "react";
import { Button, Breadcrumb, CommentBox, ToggleInput } from "@hexify/atoms";
import { DatePicker, ImageBackgroundBanner } from "@hexify/components";
import LabDetails from "@/components/lab/labLocation";
import { LabActions } from "@/components/lab/labActions";
import { CompleteBloodCountDetails } from "@/components/lab/testDetails/cbcDetails/cbcDetails";
import style from "./page.module.css";
import LabInstructions from "@/components/lab/labTab";
import SignupBanner from "@/app/(main)/_components/signupBanner";
import { useRouter } from "next/navigation";

const BloodCountBooking = () => {
    const [appointmentType, setAppointmentType] = useState<string | number>("Lab Visit");

    const router = useRouter();

    const handlePayment = () => {
        router.push("/hospital/salem/labs/testPayment");
    }

    return (
        <>
            <div className="inner-wrapper">
                <Breadcrumb excludePaths={["hospital"]} />
                <div>
                    <ImageBackgroundBanner
                        style={{
                            background: `url('https://images.pexels.com/photos/6129879/pexels-photo-6129879.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                        }}
                    >
                        <LabDetails />
                    </ImageBackgroundBanner>
                </div>
                <div className={style.actionsWrapper}>
                    <LabActions />
                </div>
                <div className={style.appointment}>
                    <Breadcrumb excludePaths={["Home"]} />
                    <div className={style.cbcDetails}>
                        <CompleteBloodCountDetails />
                    </div>
                    <h6 className={style.title}>Schedule Appointment</h6>
                    <div className={style.flex}>
                        <div>
                            <LabInstructions />
                        </div>
                        <div>
                            <DatePicker />
                            <div className={style.timePicker}>
                                {/* <TimePicker /> */}
                            </div>
                            <div>
                                <h6 className={style.toggle}>Appointment Type</h6>
                                <ToggleInput
                                    options={[
                                    { label: "Lab Visit", value: "Lab Visit" },
                                    { label: "Home Collection", value: "Home Collection" },
                                    ]}
                                    value={appointmentType}
                                    onChange={setAppointmentType}
                                />
                            </div>
                            <div>
                                <h6 className={style.comment}>Comments</h6>
                                <CommentBox />
                            </div>
                            <div className={style.buttonWrapper}>
                                <Button sx={{ width: "26.3125rem", height: "3.5rem" }} size="medium" variant="contained" onClick={handlePayment} rounded>
                                    <span>Book Appointment</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SignupBanner />
        </>
    );
};

export default BloodCountBooking;