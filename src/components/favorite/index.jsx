import React, { useContext } from "react";
import classNames from "classnames";
import classes from "./styles.module.css";
import { FavoriteItemsContext } from "../../context/favoriteItems";
import { Card } from "../../shared";
import { useNavigate } from "react-router-dom";
export default function Favorite() {
  const { favoriteItems } = useContext(FavoriteItemsContext);
  const navigate = useNavigate();
  const getToDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <article className={classNames(classes.favoriteItems)}>
      <div className="container">
        {favoriteItems.length === 0 ? (
          <h3>No Favorite Topics</h3>
        ) : (
          <h3>My Favorite Topics</h3>
        )}
        <div className={classNames(classes.itemsContainer)}>
          {favoriteItems.map((item) => (
            <Card
              key={item.id}
              topic={item}
              onClick={getToDetails.bind(null, item.id)}
              isFavorite
            />
          ))}
        </div>
      </div>
    </article>
  );
}
