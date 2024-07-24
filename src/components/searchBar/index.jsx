import React from "react";
import { InputSearch, SelectList } from "../../shared";
import classNames from "classnames";
import classes from "./styles.module.css";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  selectedSortOption,
  setSelectedSortOption,
  selectedFilterOption,
  setSelectedFilterOption,
  filterOptions,
}) => {
  const sortOptions = [
    {
      value: "default",
      label: "Default",
    },
    {
      value: "title",
      label: "Topic Title",
    },
    {
      value: "author",
      label: "Author Name",
    },
  ];

  return (
    <div
      className={classNames(
        classes.searchBar,
        "shadow-sm d-flex justify-content-between align-items-center rounded-2 mt-4 mb-3 p-0 bg-white"
      )}
    >
      <InputSearch
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div
        className={classNames(
          classes.lists,
          "d-flex align-items-center gap-2 justify-content-between flex-grow-1"
        )}
      >
        <SelectList
          label="Sort By"
          options={sortOptions}
          value={selectedSortOption}
          onChange={(e) => setSelectedSortOption(e.target.value)}
          noBorderLeft
        />
        <SelectList
          label="Filter By"
          options={filterOptions}
          value={selectedFilterOption}
          onChange={(e) => setSelectedFilterOption(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
