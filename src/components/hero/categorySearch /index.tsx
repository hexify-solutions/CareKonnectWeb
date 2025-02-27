import { ChevronDown, FilterIcon, InputField, iconLoaderMap } from "@hexify/atoms";
import styles from "./categorySearch.module.css";

const CategorySearch = () => {
  const CategoryDropdown = () => {
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropdownToggle}>
          <FilterIcon />
          <span>Categories</span>
          <span className={styles.icon}>
          <ChevronDown />
          </span>
        </button>
      </div>
    );
  };

  return (
    <InputField
      type="text"
      suffix={iconLoaderMap.search}
      fullWidth
      prefix={CategoryDropdown}
      placeholder="Search medical expert and resources"
      style={{borderRadius: "24px"}}
      data-variant="design_primary"
    />
  );
};

export default CategorySearch;
