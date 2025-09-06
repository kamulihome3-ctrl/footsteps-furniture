import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, BarChart3, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';
import { useQuote } from '../context/QuoteContext';
import { Card, Button, LazyImage } from './ui';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  const { addItem: addToCompare, removeItem: removeFromCompare, isInCompare } = useCompare();
  const { openQuoteModal } = useQuote();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInCompare(product.id)) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    openQuoteModal(product);
  };

  return (
    <Card className="group relative overflow-hidden" hover>
      <Link to={`/product/${product.id}`}>
        <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
          <LazyImage
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            fallbackSrc="https://via.placeholder.com/400x300?text=Furniture"
          />
          {product.discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
              -{product.discount}%
            </div>
          )}
          {product.isNew && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
              New
            </div>
          )}
          
          {/* Hover Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
              <button
                onClick={handleWishlistToggle}
                className={`p-2 rounded-full ${
                  isInWishlist(product.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-700'
                } hover:bg-red-500 hover:text-white transition-colors`}
              >
                <Heart className="w-4 h-4" />
              </button>
              <button
                onClick={handleCompareToggle}
                className={`p-2 rounded-full ${
                  isInCompare(product.id) ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                } hover:bg-blue-500 hover:text-white transition-colors`}
              >
                <BarChart3 className="w-4 h-4" />
              </button>
              <Link
                to={`/product/${product.id}`}
                className="p-2 bg-white text-gray-700 rounded-full hover:bg-amber-500 hover:text-white transition-colors"
              >
                <Eye className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">{product.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
          </div>
          <span className="text-lg font-bold text-amber-600">{product.rating}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={handleAddToCart}
            icon={ShoppingCart}
            iconPosition="left"
            size="sm"
            className="flex-1"
            fullWidth
          >
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </Button>
          <Button
            onClick={handleRequestQuote}
            variant="outline"
            size="sm"
            className="sm:w-auto"
          >
            Quote
          </Button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {product.inStock ? (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              In Stock
            </span>
          ) : (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Out of Stock
            </span>
          )}
          <div className="text-sm text-gray-500">
            {product.specifications.material}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;