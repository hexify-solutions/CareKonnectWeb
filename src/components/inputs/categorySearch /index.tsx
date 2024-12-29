import { InputField, iconLoaderMap } from "@hexify/atoms";
import styles from "./categorySearch.module.css";

const CategorySearch = () => {
  return (
    <InputField
      type="text"
      suffix={iconLoaderMap.search}
      fullWidth
      placeholder="Search medical expert and resources"
      data-variant="design_primary"
    />
  );
};

export default CategorySearch;
