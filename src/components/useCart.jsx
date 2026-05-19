import { useContext } from 'react';
import { CartContext } from './cartContent';

export function useCart() {
  return useContext(CartContext);
}
