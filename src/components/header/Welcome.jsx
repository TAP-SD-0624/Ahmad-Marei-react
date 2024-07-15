import React from "react";
import classes from "./Welcome.module.css";
import classNames from "classnames";
export default function Welcome() {
  return (
    <div className={classes.background}>
      <div className={classNames(classes.section, "container")}>
        <div className={classes.content}>
          <h3>Welcome to our website!</h3>
          <p>We have a new design that’s fresh, modern, and easy to use.</p>
        </div>
      </div>
    </div>
  );
}
