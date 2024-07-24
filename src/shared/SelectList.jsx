import React from "react";
import classes from "./SelectList.module.css";
import classNames from "classnames";
import { ClassNames } from "@emotion/react";
export default function SelectList({
  label,
  options,
  value,
  onChange,
  noBorderLeft,
}) {
  return (
    <div
      className={classNames(classes.container, {
        [classes.noBorderLeft]: noBorderLeft,
      })}
    >
      <label htmlFor="sort-by" className={classes.label}>
        {label}
      </label>
      <select
        name="sort-by"
        id="sort-by"
        className={classes.select}
        value={value}
        onChange={onChange}
      >
        {options?.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
