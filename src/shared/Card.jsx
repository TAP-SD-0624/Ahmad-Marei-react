import React from "react";
import Rating from "./Rating";
import classes from "./Card.module.css";
import classNames from "classnames";

export default function Card({ topic, onClick, isFavorite, key }) {
  return (
    <div
      className={classNames(
        "card shadow-sm",
        classes.noBorder,
        classes.cardCustom,
        { [classes.isFavorite]: isFavorite }
      )}
      onClick={onClick}
      key={key}
    >
      <img
        src={`/images/${topic.image}`}
        alt={topic.topic}
        className={classNames("card-img-top", classes.image)}
      />
      <div className="card-body">
        {isFavorite || (
          <h3 className={classNames(classes.cardSubtitle, classes.truncate)}>
            {topic.category}
          </h3>
        )}

        <p className={classNames(classes.cardTitle, classes.truncate)}>
          {topic.topic}
        </p>
        <div
          className={classNames(
            classes.cardRating,
            "mt-4 d-flex align-item-center "
          )}
        >
          <Rating rating={topic.rating} c />
        </div>
        {isFavorite || (
          <p className={classNames(classes.cardAuthor, "mb-0 mt-2 ")}>
            Author: {topic.name}
          </p>
        )}
      </div>
    </div>
  );
}
