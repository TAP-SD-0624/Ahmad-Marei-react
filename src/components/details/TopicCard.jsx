import React, { useContext } from "react";
import { Button } from "../../shared";
import classes from "./TopicCard.module.css";
import classNames from "classnames";
import { heartOutline } from "ionicons/icons";
import { FavoriteItemsContext } from "../../context/favoriteItems";

export default function TopicCard({ details }) {
  const { addOrDeleteFromFavorite, favoriteItems } =
    useContext(FavoriteItemsContext);
  const { image, topic, name } = details;
  const isItemInFavorite = favoriteItems.find((item) => item.id === details.id);

  const buttonStyle = {
    backgroundColor: "var(--brand-secondary)",
    width: "100%",
    color: "var(--detail-text-white)",
    border: "none",
    padding: "8px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    zIndex: 20,
  };
  const iconStyle = {
    fontSize: "24px",
  };
  const textStyle = {
    fontSize: "16px",
    fontWeight: "var(--font-weight-regular)",
  };

  return (
    <div className={classNames(classes.card, "shadow-sm")}>
      <img className={classes.image} src={`/images/${image}`} alt="" />
      <p className={classes.author}>
        <strong>{topic}</strong> by{" "}
        <a href="#" className={classes.link}>
          {name}
        </a>
      </p>
      <div className={classes.buttonContainer}>
        <p className={classes.topic}>Interested about this topic?</p>
        <Button
          endIcon={heartOutline}
          style={buttonStyle}
          iconStyle={iconStyle}
          textStyle={textStyle}
          onClick={() => addOrDeleteFromFavorite(details)}
        >
          {isItemInFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
        <p className={classes.credits}>Unlimited Credits</p>
      </div>
    </div>
  );
}
