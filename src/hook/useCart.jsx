import { useContext } from 'react';
import { CartContext } from '../components/cartContext';

// En hook som ger åtkomst till kundvagnsdata
export function useCart() {
  return useContext(CartContext);
}
