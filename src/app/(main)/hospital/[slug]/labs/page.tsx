"use client";
import React from "react";
import SignupBanner from "@/app/(main)/_components/signupBanner";
import { LabTestCard } from "@/components/lab/cards/labTestCard";
import LabDetails from "@/components/lab/labDetails";
// import { Pagination } from "@hexify/components";
import { Chip } from "@hexify/atoms";
import Link from "next/link";
import { Breadcrumb } from "@hexify/atoms";
import { ImageBackgroundBanner } from "@hexify/components";
import styles from "./page.module.css";

const Lab = () => {
  const testFilter = ["All", "Microbiology", "Heamatology", "Pathology"];

  // const [activeChip, setActiveChip] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 68; 

  return (
    <div>
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
      </div>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h6>Our Lab Services</h6>
          <div>Search bar</div>
        </div>
        <div className={styles.filterHeading}>
          <ul className={styles.filterList}>
            {testFilter?.map((filter) => {
              return <Chip designSize="large" key={filter} label={filter} />;
            })}
          </ul>
          <div>filter button</div>
        </div>
        <div className={styles["tests-wrapper"]}>
          <ul className={styles.testList}>
            {Array.from({ length: 5 })?.map((_, index) => {
              return (
                <li key={index} className={styles.testListItem}>
                  <Link href="?test=id">
                    <LabTestCard />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.pagination}>
        {/* <Pagination
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        /> */}
      </div>
        <SignupBanner />
    </div>
  );
};

export default Lab;
