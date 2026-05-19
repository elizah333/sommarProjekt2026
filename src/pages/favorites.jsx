import { Link } from 'react-router-dom';
import { useFavorites } from '../components/useFavorites.js';

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <main className="max-w-6xl mx-auto p-6 dark:text-white">
        <h1 className="text-3xl font-bold mb-4">Favorites</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          You have no favorites yet.
        </p>{' '}
        <Link to="/" className="underline">
          Go back to products
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto p-6 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Favorites</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-zinc-900 dark:border-zinc-700 border rounded-2xl p-4"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-44 w-full object-contain mb-4"
              />

              <h2 className="font-semibold line-clamp-2 min-h-12 dark:text-white">
                {product.title}
              </h2>

              <p className="text-lg font-bold mt-3 dark:text-white">
                ${product.price}
              </p>
            </Link>

            <button
              onClick={() => removeFavorite(product.id)}
              className="mt-4 w-full border border-red-400 text-red-500 dark:text-red-400 py-2 rounded-full hover:bg-red-500 hover:text-white"
            >
              Remove favorite
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
