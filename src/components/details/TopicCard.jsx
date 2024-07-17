import React from "react";
import { Button } from "../../shared";
import classes from "./TopicCard.module.css";
import classNames from "classnames";
import { heartOutline } from "ionicons/icons";

export default function TopicCard({ details }) {
  const { image, topic, name } = details;

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
    fontSize: "20px",
    fontWeight: "var(--font-weight-regular)",
  };

  return (
    <div class={classNames(classes.card, "shadow-sm")}>
      <img class={classes.image} src={`/images/${image}`} alt="" />
      <p class={classes.author}>
        <strong>{topic}</strong> by{" "}
        <a href="#" class={classes.link}>
          {name}
        </a>
      </p>
      <div class={classes.buttonContainer}>
        <p class={classes.topic}>Interested about this topic?</p>
        <Button
          endIcon={heartOutline}
          style={buttonStyle}
          iconStyle={iconStyle}
          textStyle={textStyle}
        >
          Add to Favorites
        </Button>
        <p class={classes.credits}>Unlimited Credits</p>
      </div>
    </div>
  );
}
