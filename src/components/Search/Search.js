import React from 'react';
import styles from './Search.module.css';

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-2 mb-5 mt-5 fs-4">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters"
        type="text"
        className={styles.input}
      />
    </form>
  );
};

export default Search;

//<button className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
