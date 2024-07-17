import React from "react";
import { IonIcon } from "@ionic/react";
import { checkmarkCircleOutline } from "ionicons/icons";
import classes from "./SubTopics.module.css";
export default function SubTopics({ details }) {
  const { topic, subtopics } = details;

  return (
    <div className={classes.topicsContainer}>
      <div className={classes.subTopics}>
        <h3 className={classes.subTitle}>{topic} Sub Topics</h3>
        <ul className={classes.subList}>
          {subtopics?.map((item, index) => (
            <li className={classes.subItem} key={index}>
              <IonIcon
                icon={checkmarkCircleOutline}
                style={{ color: "green" }}
                className={classes.checkMarkIcon}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
