import React from "react";
import { IonIcon } from "@ionic/react";
import classes from "./Button.module.css";
export default function Button({ onClick, startIcon, endIcon, children }) {
  return (
    <button className={classes.button} onClick={onClick}>
      {startIcon && <IonIcon icon={startIcon} />}
      <span className="textButton">{children}</span>
      {endIcon && <IonIcon icon={endIcon} />}
    </button>
  );
}
