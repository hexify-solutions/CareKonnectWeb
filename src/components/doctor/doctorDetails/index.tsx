"use client";

import styles from "./doctorDetails.module.css";
import { Tabs } from "@hexify/atoms";
import Review from "./review";
import About from "./about";
import Patient from "./patients";

const tabs = [
  {
    label: "About",
    Component: About,
  },
  {
    label: "Reviews",
    Component: Review,
  },
  {
    label: "Patients",
    Component: Patient,
  },
];

const DoctorDetails = () => {
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

const Test = () => <div>dfdfdf</div>;
export default DoctorDetails;
