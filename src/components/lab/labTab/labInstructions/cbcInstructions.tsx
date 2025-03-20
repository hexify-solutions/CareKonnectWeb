import { Bullet } from "@hexify/atoms";
import style from "./cbcInstructions.module.css";

export const CBCInstructions = () => {
    return (
        <div className={style.container}>
            <h6 className={style.heading}>Instructions To Patients</h6>
            <p className={style.headParagraph}>Tests Fasting:</p>
            <div className={style.flex}>
                <div className={style.bullet}><Bullet /></div>
                <p className={style.subParagraph}>
                    Fasting is usually not required for a CBC unless instructed by<br />
                    your doctor.
                </p>  
            </div>
            <p className={style.headParagraph}>Medication:</p>
            <div className={style.flex}>
                <div className={style.bullet}><Bullet /></div>
                <p className={style.subParagraph}>
                    Inform your healthcare provider about any medications,<br />
                    supplements, or treatments you are taking, as some may affect<br />
                    the test results.
                </p>  
            </div>       
            <p className={style.headParagraph}>Hydration:</p>
            <div className={style.flex}>
                <div className={style.bullet}><Bullet /></div>
                <p className={style.subParagraph}>
                    Drink plenty of water before the test to make the blood draw<br />
                    easier.
                </p>
            </div>
            <p className={style.headParagraph}>Medical History:</p>
            <div className={style.flex}>
                <div className={style.bullet}><Bullet /></div>
                <p className={style.subParagraph}>
                    Share any history of bleeding disorders or recent illnesses with<br />
                    your healthcare provider.
                </p>
            </div>        
            <p className={style.headParagraph}>Comfort:</p>
            <div className={style.flex}>
                <div className={style.bullet}><Bullet /></div>
                <p className={style.subParagraph}>
                    Wear clothing that allows easy access to your arm for the<br />
                    blood draw (e.g., a short-sleeved shirt).
                </p> 
            </div>       
            <p className={style.headParagraph}>Arrival Time:</p>
            <div className={style.flex}>
                <div className={style.bullet}><Bullet /></div>
                <p className={style.subParagraph}>
                    Arrive on time for your appointment to ensure a smooth<br />
                    process.
                </p>
            </div>    
            <p className={style.headParagraph}>Post-Test:</p>
            <div className={style.flex}>
                <div className={style.bullet}><Bullet /></div>
                <p className={style.subParagraph}>
                    After the test, apply pressure to the puncture site to minimize<br />
                    bruising and resume normal activities unless otherwise<br />
                    advised.
                </p>
            </div>        
            <p className={style.headParagraph}>
                Always follow any additional instructions provided by your doctor<br />
                or the lab attendant.
            </p>
            <p className={style.note}>
                Please note that you are not to eat anything before coming for<br />
                this test. You are only permitted to take water before test
            </p>
        </div>
    );
};