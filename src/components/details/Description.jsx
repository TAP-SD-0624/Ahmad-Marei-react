import React from "react";
import classes from "./Description.module.css";
import classNames from "classnames";
import { Rating } from "../../shared";

export default function Description({ details }) {
  const { category, description, rating, topic } = details;
  return (
    <div className="details__header">
      <h4 className={classes.subtitle}>{category}</h4>
      <h2 className={classes.title}>{topic}</h2>
      <div className={classNames(classes.rating, "d-flex mb-3")}>
        <Rating rating={rating} />
      </div>
      <p className={classes.description}>{description}</p>
    </div>
  );
}
