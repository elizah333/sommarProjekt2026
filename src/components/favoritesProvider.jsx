import { useState } from 'react';
import { FavoritesContext } from './favoritesContent';

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(product) {
    setFavorites((items) => {
      const alreadyExists = items.find((item) => item.id === product.id);

      if (alreadyExists) {
        return items;
      }

      return [...items, product];
    });
  }

  function removeFavorite(id) {
    setFavorites((items) => items.filter((item) => item.id !== id));
  }

  function toggleFavorite(product) {
    const alreadyExists = favorites.find((item) => item.id === product.id);

    if (alreadyExists) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  }

  function isFavorite(id) {
    return favorites.some((item) => item.id === id);
  }

  const totalFavorites = favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        totalFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
