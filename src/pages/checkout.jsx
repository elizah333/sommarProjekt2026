import { useState } from 'react';
import { useCart } from '../hook/useCart';

// Kassa sidan där användaren fyller i sina uppgifter och bekräftar beställningen
export default function Checkout() {
  const { cartItems, totalPrice } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);

  // Förhindrar sidladdning och markerar ordern som genomförd
  function handleSubmit(event) {
    event.preventDefault();
    setOrderComplete(true);
  }

  // Om ordern är genomförd visas en bekgräftelse kort
  if (orderComplete) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center p-10 dark:text-white">
        <div className="text-center">
          <span className="material-symbols-outlined text-7xl text-green-500 mb-4">
            check_circle
          </span>

          <h1 className="text-3xl font-bold mb-4">Order confirmed!</h1>

          <p className="text-gray-500 dark:text-gray-400">
            Thank you for your order.
          </p>
        </div>
      </main>
    );
  }

  // Formulär som man måste fylla i
  return (
    <main className="min-h-[70vh] flex items-center justify-center p-6 dark:text-white">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 bg-white dark:bg-zinc-900 dark:border-zinc-700 border p-6 rounded-xl shadow"
        >
          <input
            required
            placeholder="Name"
            className="border dark:border-zinc-700 dark:bg-zinc-800 dark:text-white p-3 rounded"
          />

          <input
            required
            type="email"
            placeholder="Email"
            className="border dark:border-zinc-700 dark:bg-zinc-800 dark:text-white p-3 rounded"
          />

          <input
            required
            placeholder="Address"
            className="border dark:border-zinc-700 dark:bg-zinc-800 dark:text-white p-3 rounded"
          />

          <input
            required
            placeholder="City"
            className="border dark:border-zinc-700 dark:bg-zinc-800 dark:text-white p-3 rounded"
          />

{/* Orderöversikt som visar alla produkter och priset */}
          <div className="border-t dark:border-zinc-700 pt-4">
            <h2 className="text-xl font-semibold mb-3">Order summary</h2>

{/* Loopar igenom kundvagnen och visar varje produkt med pris */}
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.title} × {item.quantity}
                  </span>

                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-5 pt-4 border-t dark:border-zinc-700">
              <span className="font-bold text-lg">Total</span>

              <span className="font-bold text-lg">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Place order
          </button>
        </form>
      </div>
    </main>
  );
}
