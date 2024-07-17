import React from "react";
import { IonIcon } from "@ionic/react";
import classes from "./Button.module.css";
import classNames from "classnames";

export default function Button({
  onClick,
  startIcon,
  endIcon,
  children,
  style = {},
  iconStyle = {},
  textStyle = {},
}) {
  return (
    <button
      className={classNames(classes.button)}
      onClick={onClick}
      style={style}
    >
      {startIcon && <IonIcon icon={startIcon} style={iconStyle} />}
      <span style={textStyle}>{children}</span>
      {endIcon && <IonIcon icon={endIcon} style={iconStyle} />}
    </button>
  );
}
