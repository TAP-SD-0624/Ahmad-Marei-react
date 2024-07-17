import React from "react";
import classes from "./SelectList.module.css";
export default function SelectList({ label, options, value, onChange }) {
  return (
    <div class={classes.container}>
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
