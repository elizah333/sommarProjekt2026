import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useCart } from '../hook/useCart';

// Huvudnavigering med sökfält, kategorier, kundvagn, favoriter och tema byte
export default function Header({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}) {
  // Hämtar antalet produkter man har i kundvagn för att visa i ikonen
  const { totalItems } = useCart();

  // Används för att byta sida utan att ladda om webbläsaren
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  // Tillgången till DOM elementet i webbläsaren som används för att scrolla kategori listan
  const categoriesRef = useRef(null);

    // Navigerar till routen och filtrerar produkter på vald kategori
  function handleCategoryClick(category) {
    setSelectedCategory(category);
    navigate('/');
  }

  // Scrollar katagori listan till vänster eller höger
  function scrollCategories(direction) {
    if (!categoriesRef.current) return;

    categoriesRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  }

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  // Togglar mellan ljust och mörkt tema, den sparar valet också
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Fetching API med async
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          'https://dummyjson.com/products/categories'
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black text-white dark:bg-zinc-900 border-b dark:border-zinc-700">
      <div className="w-full px-8 py-4 flex items-center justify-between gap-8">
        <Link to="/" className="text-4xl font-bold">
          Phake™
        </Link>

        {/* Sökfältet */}
        <div className="flex-1 max-w-2xl flex ">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full border text-black dark:border-zinc-700 px-5 py-2 bg-white dark:bg-zinc-900 dark:text-white outline-none"
          />

          <button className="bg-black text-white px-5 flex items-center justify-center border border-white dark:border-none">
            <span className="material-symbols-outlined ">search</span>
          </button>
        </div>

        {/* Ikoner för profil, favoriter, kundvagn, info och temabyte */}
        <div className="flex md:justify-end items-center gap-5 text-2xl dark:text-white">
          <Link to="/profile" title="Profile">
            <span className="material-symbols-outlined">person</span>
          </Link>

          <Link
            to="/favorites"
            title="Favorites"
            className=" relative inline-flex"
          >
            <span className="material-symbols-outlined p-1">favorite</span>
          </Link>

          <Link to="/cart" title="Cart" className=" relative inline-flex p-1">
            <span className="material-symbols-outlined">shopping_bag</span>
            {/* Till kundvagn ikonen har den en nummer räknare över sig */}
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4 h-4 text-[10px] bg-black text-white rounded-full flex items-center justify-center leading-none">
                {totalItems}
              </span>
            )}
          </Link>

          <Link to="/profile" title="Info">
            <span className="material-symbols-outlined">info</span>
          </Link>

          {/* Byter ikon beroende på vilket tema är på */}
          <button type="button" title="Theme" onClick={toggleTheme}>
            <span className="material-symbols-outlined">
              {darkMode ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
        </div>
      </div>

      <nav className=" dark:border-zinc-700 overflow-hidden">
        <div className="w-full px-6 flex items-center gap-3">
          <div
            ref={categoriesRef}
            className="flex gap-4 overflow-x-hidden whitespace-nowrap flex-1 scroll-smooth"
          >
            {/* Kategori knapp för att visa alla produkter på en gång */}
            <button
              onClick={() => handleCategoryClick('all')}
              className={`px-5 py-3 border-b-2 flex-shrink-0 ${
                selectedCategory === 'all'
                  ? ' dark:border-white text-black dark:text-white bg-white dark:bg-zinc-900'
                  : 'border-transparent bg-black text-white dark:bg-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-800  '
              }`}
            >
              All
            </button>
            {error && (
              <span className="text-red-400 text-sm px-5 py-3">{error}</span>
            )}

            {loading && (
              <span className="text-white/50 text-sm px-5 py-3">
                Loading...
              </span>
            )}

{/* Renderar en knapp för varje kategori från API */}
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleCategoryClick(category.slug)}
                className={`px-5 py-3  border-b-2 flex-shrink-0 ${
                  selectedCategory === category.slug
                    ? ' dark:border-white text-black dark:text-white bg-white dark:bg-zinc-900'
                    : 'border-transparent bg-black text-white dark:bg-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-800  '
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          {/* Knapparna för att scrolla kategorierna till vänster eller höger*/}
          <button
            onClick={() => scrollCategories('left')}
            className="flex-shrink-0 w-10 h-10 bg-black dark:bg-zinc-900 flex items-center justify-center"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => scrollCategories('right')}
            className="flex-shrink-0 w-10 h-10 bg-black dark:bg-zinc-900 flex items-center justify-center"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
