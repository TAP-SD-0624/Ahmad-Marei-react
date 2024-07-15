import React from "react";
import Button from "../button";
import { moonOutline, heartOutline } from "ionicons/icons";
import classes from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className="navbar container">
      <div className={classes.navLogo}>Web Topics</div>
      <div className="d-flex gap-2">
        <Button startIcon={moonOutline} onClick={() => {}}>
          Dark Mode
        </Button>
        <Button startIcon={heartOutline} onClick={() => {}}>
          Favorites
        </Button>
      </div>
    </nav>
  );
}
