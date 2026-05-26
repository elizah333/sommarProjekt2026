import { useState } from 'react';
import { CartContext } from './cartContext';

// Ger kundvagnsdata och funktioner till alla komponenter
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product, quantity = 1) {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id);

      // Om produkten redan finns, öka kvantiteten istället för att lägga till en ny
      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...items, { ...product, quantity }];
    });
  }

  function increaseQuantity(id) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )

        // Ta bort produkten automatiskt när kvaliteten når noll
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  // Beräkna totalpris och antal artiklar från kundvagnens innehåll
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
