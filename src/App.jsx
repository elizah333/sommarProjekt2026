import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Popups from './components/popup';
import Home from './pages/home';
import ProductDetails from './pages/productDetails';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Header from './pages/header';
import DealWidget from './components/dealWidget';
import FloatingTools from './components/floatingTools';
import Favorites from './pages/favorites';
import Profile from './pages/profile';
import Footer from './pages/footer';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Header
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Popups />
      <DealWidget />
      <FloatingTools />

      <div className="min-h-[75vh]">
        <Routes>
          <Route
            path="/"
            element={
              <Home search={search} selectedCategory={selectedCategory} />
            }
          />

          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
