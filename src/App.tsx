import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Compare from './pages/Compare';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { CompareProvider } from './context/CompareContext';
import { QuoteProvider } from './context/QuoteContext';
import QuoteModal from './components/QuoteModal';
import NewsletterPopup from './components/NewsletterPopup';
import LiveChat from './components/LiveChat';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <CompareProvider>
          <QuoteProvider>
            <Router>
              <div className="min-h-screen bg-white">
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:categoryId" element={<Category />} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/compare" element={<Compare />} />
                  </Routes>
                </main>
                <Footer />
                <QuoteModal />
                <NewsletterPopup />
                <LiveChat />
              </div>
            </Router>
          </QuoteProvider>
        </CompareProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;