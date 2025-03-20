"use client";

import { Tabs } from "@hexify/atoms";
import { CBCInstructions } from "./labInstructions/cbcInstructions";


const LabInstructions = () => {
    const tabs = [{
        label: "Instructions",
        Component: CBCInstructions,
    }];

    return (
        <div>
            <Tabs tabs={tabs} />
        </div>
    );
};

export default LabInstructions;