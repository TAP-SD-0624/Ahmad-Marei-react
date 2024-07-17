import React from "react";
import Header from "../components/header";
import DetailsContent from "../components/details";
import classes from "./styles.module.css";

export default function Details() {
  return (
    <div className={classes.view}>
      <Header />
      <DetailsContent />
    </div>
  );
}
