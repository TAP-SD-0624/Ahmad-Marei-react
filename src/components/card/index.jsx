import React from "react";
import Rating from "../rating";
import classes from "./styles.module.css";
import classNames from "classnames";

export default function Card({ topic }) {
  return (
    <div
      class={classNames("card shadow-sm", classes.noBorder, classes.cardCustom)}
    >
      <img
        src={`/images/${topic.image}`}
        alt={topic.topic}
        class={classNames("card-img-top", classes.image)}
      />
      <div class="card-body">
        <h3 class={classNames(classes.cardSubtitle, classes.truncate)}>
          {topic.category}
        </h3>
        <p class={classNames(classes.cardTitle, classes.truncate)}>
          {topic.topic}
        </p>
        <div
          class={classNames(
            classes.cardRating,
            "mt-4 d-flex align-item-center "
          )}
        >
          <Rating rating={topic.rating} c />
        </div>
        <p class={classNames(classes.cardAuthor, "mb-0 mt-2 ")}>
          Author: {topic.name}
        </p>
      </div>
    </div>
  );
}
