import React from "react";
import { IonIcon } from "@ionic/react";
import { star, starHalf, starOutline } from "ionicons/icons";

export default function Rating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <>
      {Array(fullStars).fill(<IonIcon icon={star} />)}
      {Array(halfStars).fill(<IonIcon icon={starHalf} />)}
      {Array(emptyStars).fill(<IonIcon icon={starOutline} />)}
    </>
  );
}
