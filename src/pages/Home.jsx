import React from "react";
import MainContent from "../components/home";
import classes from "./styles.module.css";

export default function Home() {
  return (
    <div className={classes.view}>
      <MainContent />
    </div>
  );
}
