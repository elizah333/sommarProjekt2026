import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/useCart';
import { useFavorites } from '../components/useFavorites';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
          throw new Error('Could not fetch product');
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  function handleAddToCart() {
    addToCart(product, quantity);
    setAddedMessage(`${quantity} item(s) added to cart`);

    setTimeout(() => {
      setAddedMessage('');
    }, 2000);
  }

  if (loading) {
    return <p className="p-10 dark:text-white">Loading product...</p>;
  }

  if (error) {
    return <p className="p-10 text-red-500">{error}</p>;
  }

  if (!product) {
    return <p className="p-10 dark:text-white">Product not found.</p>;
  }

  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-6 dark:text-white">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10 bg-white dark:bg-zinc-900 dark:border-zinc-700 border rounded-2xl p-4 sm:p-6">
        <div className=" dark:bg-white rounded-2xl p-4 flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-72 sm:h-80 object-contain"
          />
        </div>

        <section className="flex flex-col">
          <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-4 text-sm">
            {product.rating && (
              <span className="bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                Rating: {product.rating}
              </span>
            )}

            {product.stock && (
              <span className="bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                Stock: {product.stock}
              </span>
            )}
          </div>

          <p className="text-3xl font-semibold mb-6">${product.price}</p>

          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="border dark:border-zinc-700 dark:bg-zinc-800 px-4 py-2 rounded-lg"
            >
              -
            </button>

            <span className="text-xl min-w-8 text-center">{quantity}</span>

            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="border dark:border-zinc-700 dark:bg-zinc-800 px-4 py-2 rounded-lg"
            >
              +
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-6 py-3 rounded-lg"
            >
              Add to cart
            </button>

            <button
              onClick={() => toggleFavorite(product)}
              className="border dark:border-zinc-700 px-6 py-3 rounded-lg"
            >
              {isFavorite(product.id) ? '♥ Remove favorite' : '♡ Add favorite'}
            </button>
          </div>

          {addedMessage && (
            <p className="mt-4 text-green-600 dark:text-green-400">
              {addedMessage}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
