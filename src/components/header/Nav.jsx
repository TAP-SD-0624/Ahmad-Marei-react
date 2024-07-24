import React, { useContext } from "react";
import { Button } from "../../shared";
import { moonOutline, heartOutline } from "ionicons/icons";
import classes from "./Nav.module.css";
import { useNavigate } from "react-router-dom";
import { FavoriteItemsContext } from "../../context/favoriteItems";
import classNames from "classnames";

export default function Nav() {
  const navigate = useNavigate();
  const { toggleFavoriteItems } = useContext(FavoriteItemsContext);

  const navigateToHome = () => {
    navigate("/");
  };
  const changeTheme = () => {
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    localStorage.setItem("dark-mode", !isDarkMode);

    if (!isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  };

  return (
    <nav className={classNames(classes.nav, "navbar")}>
      <div className="container">
        <div className={classes.navLogo} onClick={navigateToHome}>
          Web Topics
        </div>
        <div className="d-flex gap-2">
          <Button startIcon={moonOutline} onClick={changeTheme}>
            <span className={classes.textButton}>Dark Mode</span>
          </Button>
          <Button startIcon={heartOutline} onClick={toggleFavoriteItems}>
            <span className={classes.textButton}>Favorite </span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
