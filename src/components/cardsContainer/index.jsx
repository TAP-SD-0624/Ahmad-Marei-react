import React from "react";
import Card from "../card";
import classes from "./styles.module.css";
export default function CardsContainer({ webTopics }) {
  return (
    <div class={classes.cardContainer}>
      {webTopics.map((topic) => (
        <Card key={topic.id} topic={topic} />
      ))}
    </div>
  );
}
