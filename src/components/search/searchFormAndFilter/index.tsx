"use client";
import { Form, Formik } from "formik";
import styles from "./searchFormAndFilter.module.css";
import { Chip, FilterIcon, InputField, SearchIcon } from "@hexify/atoms";

const SearchFormAndFilter = ({
  search,
  searchCategory,
  onSubmitSearchHandler,
  onSelectFilterHandler,
}) => {




  return (
    <div className={styles.wrapper}>
      <Formik enableReinitialize onSubmit={onSubmitSearchHandler} initialValues={initialValues(search)}>
        {({ values, handleChange, errors, submitForm }) => {
          return (
            <Form className={styles.form}>
              <div className={styles.inputWrapper}>
                {/* @ts-ignore */}
                <InputField
                  placeholder="Search input"
                  prefix={FilterIcon}
                  suffix={SearchIcon}
                  name="search"
                  onChange={handleChange}
                  value={values?.search}
                  suffixProps={{
                    onClick: () => submitForm(),
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
            <li key={option?.value}>
              <Chip
                designSize="xlarge"
                designVariant={searchCategory?.includes(option?.value?.toLowerCase()) ? "primary_dark" :  "ghost"}
                variant="outlined"
                label={option?.label}
                className={styles.filter}
                onClick={() => onSelectFilterHandler(option?.label?.toLowerCase())}
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


const initialValues = (search: string) => {
  return {
    search,

  }
}
export default SearchFormAndFilter;
