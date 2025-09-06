import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, BarChart3, Menu, Phone, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';
import SearchBar from './SearchBar';
import MobileDrawer from './layout/MobileDrawer';
import { Button } from './ui';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const { items: cartItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { items: compareItems } = useCompare();

  const categories = [
    { id: 'home-office', name: 'Home Office', subcategories: ['Office Chairs', 'Desks', 'Storage'] },
    { id: 'kitchen', name: 'Kitchen', subcategories: ['Cabinets', 'Stools', 'Dining Sets'] },
    { id: 'sitting-room', name: 'Sitting Room', subcategories: ['Sofas', 'Recliners', 'Coffee Tables'] },
    { id: 'dining-room', name: 'Dining Room', subcategories: ['Dining Tables', 'Chairs', 'Sideboards'] },
    { id: 'bedroom', name: 'Bedroom', subcategories: ['Beds', 'Wardrobes', 'Dressers'] },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-amber-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+256 123 456 789</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 hover:text-amber-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="font-medium">sales@footstepsfurniture.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="font-semibold">🎯 Free Consultation & Quote Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 bg-white border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'shadow-xl border-gray-300' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/WhatsApp Image 2025-09-06 at 06.15.50.jpeg" 
                  alt="Footsteps Furniture" 
                  className="h-12 w-12 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-200"
                />
                <div className="absolute inset-0 bg-amber-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-200">Footsteps Furniture</h1>
                <p className="text-sm text-gray-600 font-medium tracking-wide">COMPANY LIMITED</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link 
                to="/" 
                className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-semibold transition-all duration-200"
              >
                Home
              </Link>
              {categories.map((category) => (
                <div key={category.id} className="relative group">
                  <Link 
                    to={`/category/${category.id}`}
                    className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-1"
                  >
                    <span>{category.name}</span>
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1">
                    <div className="py-3">
                      <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                        {category.name} Categories
                      </div>
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          to={`/category/${category.id}?sub=${sub.toLowerCase().replace(' ', '-')}`}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-150 font-medium"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <Link 
                to="/about" 
                className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-semibold transition-all duration-200"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-semibold transition-all duration-200"
              >
                Contact
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-3 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all duration-200 group"
                aria-label="Search"
              >
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              
              <Link 
                to="/compare" 
                className="relative p-3 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all duration-200 hidden sm:block group"
                aria-label="Compare products"
              >
                <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {compareItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
                    {compareItems.length}
                  </span>
                )}
              </Link>

              <Link 
                to="/wishlist" 
                className="relative p-3 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all duration-200 group"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              <Link 
                to="/cart" 
                className="relative p-3 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all duration-200 group"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                icon={Menu}
                onClick={() => setIsMobileDrawerOpen(true)}
                className="lg:hidden p-3 hover:bg-amber-50 rounded-xl"
                aria-label="Open menu"
              />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="border-t bg-gradient-to-r from-gray-50 to-amber-50/30 py-6 shadow-inner">
            <div className="max-w-7xl mx-auto px-4">
              <SearchBar onClose={() => setShowSearch(false)} />
            </div>
          </div>
        )}

        {/* Mobile Drawer */}
        <MobileDrawer 
          isOpen={isMobileDrawerOpen} 
          onClose={() => setIsMobileDrawerOpen(false)} 
        />
      </header>
    </>
  );
};

export default Header;