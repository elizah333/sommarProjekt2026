import { useState } from 'react';
import { FavoritesContext } from './favoritesContext';

// Ger favoritdata och funktioner till alla komponenter
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Lägger till en produkt i listan men bara om den inte redan finns där
  function addFavorite(product) {
    setFavorites((items) => {
      const alreadyExists = items.find((item) => item.id === product.id);

      if (alreadyExists) {
        return items;
      }

      // Annars lägg till i slutet av listan
      return [...items, product];
    });
  }

  // Tar bort en specifik produkt från listan baserat på id
  function removeFavorite(id) {
    setFavorites((items) => items.filter((item) => item.id !== id));
  }

  // Lägger till eller tar bort en produkt beroende på om den redan finns
  function toggleFavorite(product) {
    const alreadyExists = favorites.find((item) => item.id === product.id);

    if (alreadyExists) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  }

  // Kontrollerar om en specifik produkt finns i listan, returnerar true eller false
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
