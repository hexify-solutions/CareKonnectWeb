"use client";

import styles from "./doctorDetails.module.css";
import { Tabs } from "@hexify/atoms";
import Review from "./review";
import About from "./about";
import Patient from "./patients";



const DoctorDetails = ({ doctor }) => {

  const tabs = [
    {
      label: "About",
      Component: () =>  <About doctor={doctor} />,
    },
    {
      label: "Reviews",
      Component: Review,
    },
    // {
    //   label: "Patients",
    //   Component: Patient,
    // },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default DoctorDetails;
