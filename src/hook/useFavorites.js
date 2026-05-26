import { useContext } from 'react';
import { FavoritesContext } from '../components/favoritesContext';

// En hook som ger åtkomst till favoritdata
export function useFavorites() {
  return useContext(FavoritesContext);
}
