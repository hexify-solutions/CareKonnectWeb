"use client";
import { Form, Formik } from "formik";
import styles from "./searchFormAndFilter.module.css";
import { Chip, FilterIcon, InputField, SearchIcon } from "@hexify/atoms";

const SearchFormAndFilter = () => {
  return (
    <div className={styles.wrapper}>
      <Formik onSubmit={() => {}} initialValues={{}}>
        {() => {
          return (
            <Form className={styles.form}>
              <div className={styles.inputWrapper}>
                {/* @ts-ignore */}
                <InputField
                  placeholder="Search input"
                  prefix={FilterIcon}
                  suffix={SearchIcon}
                  suffixProps={{
                    onClick: () => console.log("i am clicked"),
                  }}
                  rounded
                  type="text"
                  className={styles.input}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
      <ul className={styles.filterList}>
        {filterOptions?.map((option) => {
          return (
            <li>
              <Chip
                designSize="xlarge"
                designVariant="ghost"
                variant="outlined"
                label={option?.label}
                className={styles.filter}
                rounded
              />
            </li>
          );
        })}
        <li className={styles.filterBtnWrapper}>
          <button className={styles.filterBtn}>
            <FilterIcon />
            <span>Filter more</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

const filterOptions = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Doctors",
    value: "Doctors",
  },
  { label: "Hospitals", value: "Hospitals" },
  {
    label: "Pharmacies",
    value: "Pharmacies",
  },
  {
    label: "Laboratories",
    value: "Laboratories",
  },
];
export default SearchFormAndFilter;
