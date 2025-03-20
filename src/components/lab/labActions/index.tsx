import { Badge, Chip as Button, Camera, Delivery, Upload, } from "@hexify/atoms";
import style from "./style.module.css";


export const LabActions = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.item}>
                <Button
                    designVariant="secondary"
                    designGenre="flat"
                    fullWidth
                    label={
                        <span className={style.label}>
                            <span>
                                <Badge />
                            </span>
                            <span>Get 25% OFF</span>
                        </span>
                    } 
                />
            </div>
            <div className={style.item}>
                <Button
                    designVariant="grey"
                    designGenre="flat"
                    fullWidth
                    label={
                        <span className={style.label}>
                            <span>
                                <Delivery />
                            </span>
                            <span>Request an appointment</span>
                        </span>
                    } 
                />
            </div>
            <div className={style.item}>
                <Button
                    designVariant="primary_dark"
                    designGenre="flat"
                    fullWidth
                    label={
                        <span className={style.label}>
                            <span>
                                <Upload />
                            </span>
                            <span>Upload Prescription</span>
                        </span>
                    }
                />
            </div>
            <div className={style.item}>
                <Button 
                   designVariant="tertiary"
                   designGenre="flat"
                   fullWidth
                   label={
                        <span className={style.label}>
                            <span>
                                <Camera />
                            </span>
                            <span>Scan Prescription</span>
                        </span>
                   }
                />
            </div>
        </div>
    );
};