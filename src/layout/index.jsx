import React, { Children, useContext } from "react";
import Header from "../components/header";
import { FavoriteItemsContext } from "../context/favoriteItems";
import Favorite from "../components/favorite";

export default function Layout({ children }) {
  const { showFavoriteItems } = useContext(FavoriteItemsContext);

  return (
    <>
      <Header />
      {children}
      {showFavoriteItems && <Favorite />}
    </>
  );
}
