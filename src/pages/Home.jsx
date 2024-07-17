import React from "react";
import Header from "../components/header";
import MainContent from "../components/home";
import classes from "./styles.module.css";
export default function Home() {
  return (
    <div className={classes.view}>
      <Header />
      <MainContent />
    </div>
  );
}
