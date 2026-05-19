import { useContext } from 'react';
import { FavoritesContext } from './favoritesContent';

export function useFavorites() {
  return useContext(FavoritesContext);
}
