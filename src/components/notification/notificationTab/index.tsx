"use client";

import { Tabs } from "@hexify/atoms";


const NotificationTab = () => {
    const tabs = [
        {
            label: "Urgent",
        },
        {
            label: "General",
        },
        {
            label: "Informational",
        }
];

    return (
        <div>
            <Tabs 
            designVariant="secondary"
            tabs={tabs} />
        </div>
    );
};

export default NotificationTab;