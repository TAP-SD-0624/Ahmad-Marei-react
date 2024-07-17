import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import classes from "./LoadingSpinner.module.css";

export default function LoadingSpinner({ open }) {
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
