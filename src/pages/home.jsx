import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from '../hook/useDebounce';
import { useFavorites } from '../hook/useFavorites';
import { useCart } from '../hook/useCart';

// Startsidan som visar alla produkter, sökfält, lägga till produkter i kundvagn eller favoriter 
export default function Home({ search, selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();

  const debouncedSearch = useDebounce(search, 400);

  // Filtrerar produkt söket beroende på vald kategori och sökord, samt jämnför den ändast med lowercase
  const filteredProducts = products.filter((product) => {
    const activeCatagory = selectedCategory || 'all';
    const matchesSearch = product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || product.category === activeCatagory;

    return matchesSearch && matchesCategory;
  });

    // Fetching API med async
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=0');

        if (!response.ok) {
          throw new Error('Could not fetch products');
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading)
    return <p className="p-10 dark:text-white">Loading products...</p>;

  if (error) return <p className="p-10 text-red-500">{error}</p>;

  return (
    <main className="max-w-7xl mx-auto p-6 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

{/* Visar meddelande om ingen produkt matchar */}
      {filteredProducts.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">No products found.</p>
      )}

{/* Visar rutnät för alla produkt kort */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative group bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-2xl p-4 shadow-sm flex flex-col"
          >

            {/* Favorit knappen */}
            <button
              onClick={() => toggleFavorite(product)}
              className="absolute top-3 right-3 bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-full w-9 h-9 flex items-center justify-center shadow z-10"
              title="Add to favorites"
            >
              {isFavorite(product.id) ? '♥' : '♡'}
            </button>

            <Link
              to={`/product/${product.id}`}
              className="flex flex-col flex-1"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-44 w-full bg-white object-contain mb-4 group"
              />

              <h2 className="font-semibold line-clamp-2 min-h-12 dark:text-white">
                {product.title}
              </h2>

              <p className="text-lg font-bold mt-auto dark:text-white">
                ${product.price}
              </p>
            </Link>

{/* Knappen för att lägga till produkten i kundvagnen */}
            <button
              onClick={() => addToCart(product, 1)}
              className="mt-4 bg-black text-white w-11 h-11 rounded-full flex items-center justify-center self-end"
              title="Add to cart"
            >
              <span className="material-symbols-outlined">
                add_shopping_cart
              </span>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
