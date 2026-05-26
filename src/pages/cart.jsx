import { Link } from 'react-router-dom';
import { useCart } from '../hook/useCart';

// Visar alla produkter i kundvagnen med möjlighet att ändra antal och ta bort produkter
export default function Cart() {
  // Här hämtar den all kundvagnsdata och funktioner från context
  const {
    cartItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  // Om kundvagnen är tom returnerar den ett tomt tillstånd med länk tillbaka till shoppen
  if (cartItems.length === 0) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center p-10 dark:text-white">
        <div className="text-center">
          <span className="material-symbols-outlined text-7xl mb-4 text-gray-400 dark:text-gray-500">
            shopping_bag
          </span>

          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>

          <p className="text-gray-500 dark:text-gray-400 mb-6">
            You haven't added anything yet.
          </p>

          <Link to="/" className="bg-black text-white px-6 py-3 rounded-full">
            Continue shopping
          </Link>
        </div>
      </main>
    );
  }
  // Om dett finns produkter visas antalet här med knapper för justeringar
  return (
    <main className="max-w-4xl mx-auto p-6 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>

      {/* Loopar igenom alla produkter i kundvagnen och renderar ett kort för varje */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border dark:border-zinc-700 p-4 rounded-xl bg-white dark:bg-zinc-900"
          >
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                ${item.price} each
              </p>

              {/* Knapparna för att öka, minska eller ta bort produkten */}
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-gray-200 dark:bg-zinc-800 dark:text-white px-3 py-1 rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-gray-200 dark:bg-zinc-800 dark:text-white px-3 py-1 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 dark:text-red-400 underline ml-4"
                >
                  Remove
                </button>
              </div>
            </div>

            {/* Visar total priset för hela kundvagnen och n länk till kassan */}
            <p className="font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <p className="text-2xl font-bold mb-4">
          Total: ${totalPrice.toFixed(2)}
        </p>

        <Link
          to="/checkout"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Go to checkout
        </Link>
      </div>
    </main>
  );
}
