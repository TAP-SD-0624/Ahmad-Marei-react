import React from "react";
import { Button } from "../../shared";
import { moonOutline, heartOutline } from "ionicons/icons";
import classes from "./Nav.module.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <nav className="navbar container">
      <div className={classes.navLogo} onClick={navigateToHome}>
        Web Topics
      </div>
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
