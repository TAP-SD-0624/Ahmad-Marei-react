import React from "react";
import classNames from "classnames";
import classes from "./InputSearch.module.css";
import { searchOutline } from "ionicons/icons";

export default function InputSearch({ onChange, value }) {
  return (
    <div
      className={classNames(
        classes.search,
        "d-flex gap-1 d-flex align-items-center ps-3"
      )}
    >
      <ion-icon icon={searchOutline} className={classes.searchIcon}></ion-icon>
      <input
        type="text"
        id="search"
        placeholder="Search for a topic..."
        className={classes.searchInput}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
