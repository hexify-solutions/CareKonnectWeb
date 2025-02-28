import SearchFormAndFilter from "@/components/search/searchFormAndFilter";
import styles from "./page.module.css";
import SignupBanner from "../_components/signupBanner";
import clsx from 'clsx';
import SearchResultSection from "@/components/search/searchResultsSection";

const Search = () => {
  return (
    <>
    
    <div className={clsx("inner-wrapper", styles.wrapper)}>
      <SearchFormAndFilter />
      <div>
      <SearchResultSection />
      <SearchResultSection />
      </div>
    </div>
      <SignupBanner />
    </>
  );
};

export default Search;
