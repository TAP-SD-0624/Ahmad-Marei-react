import React, { createContext, useState } from "react";

export const FavoriteItemsContext = createContext();

export default function FavoriteItemsProvider({ children }) {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [showFavoriteItems, setShowFavoriteItems] = useState(false);

  const addOrDeleteFromFavorite = (item) => {
    const isItemInFavorite = favoriteItems.find(
      (favoriteItem) => favoriteItem.id === item.id
    );
    if (isItemInFavorite) {
      const newFavoriteItems = favoriteItems.filter(
        (favoriteItem) => favoriteItem.id !== item.id
      );
      setFavoriteItems(newFavoriteItems);
    } else {
      setFavoriteItems([...favoriteItems, item]);
    }
  };
  const toggleFavoriteItems = () => {
    setShowFavoriteItems(!showFavoriteItems);
  };
  const value = {
    favoriteItems,
    addOrDeleteFromFavorite,
    showFavoriteItems,
    toggleFavoriteItems,
  };

  return (
    <FavoriteItemsContext.Provider value={value}>
      {children}
    </FavoriteItemsContext.Provider>
  );
}
