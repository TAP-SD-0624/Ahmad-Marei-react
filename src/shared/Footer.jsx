import React from "react";
import { heart } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer class={classes.footer}>
      Developed with
      <IonIcon
        icon={heart}
        style={{ color: "rgb(167, 14, 14)", fontSize: "16px" }}
      />
      © 2023
    </footer>
  );
}
