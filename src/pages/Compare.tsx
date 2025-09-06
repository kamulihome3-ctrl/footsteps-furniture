import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, X, ShoppingCart, Heart } from 'lucide-react';
import { useCompare } from '../context/CompareContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useQuote } from '../context/QuoteContext';

const Compare = () => {
  const { items, removeItem, clearCompare } = useCompare();
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist } = useWishlist();
  const { openQuoteModal } = useQuote();

  const handleAddToCart = (product: any) => {
    addItem(product);
  };

  const handleAddToWishlist = (product: any) => {
    if (!isInWishlist(product.id)) {
      addToWishlist(product);
    }
  };

  const handleRequestQuote = (product: any) => {
    openQuoteModal(product);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BarChart3 className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Products to Compare</h2>
            <p className="text-gray-600 mb-8">
              Add products to your comparison list to see how they stack up against each other.
            </p>
            <Link
              to="/"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Product Comparison</h1>
              <p className="text-gray-600">Compare {items.length} product{items.length !== 1 ? 's' : ''}</p>
            </div>
            {items.length > 0 && (
              <button
                onClick={clearCompare}
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="p-6 overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Product Image */}
                    <div className="relative">
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-full h-48 object-cover"
                        />
                      </Link>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-50"
                      >
                        <X className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-amber-600 transition-colors mb-2">
                          {item.name}
                        </h3>
                      </Link>

                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-sm text-gray-600 ml-1">({item.reviews})</span>
                        </div>
                      </div>

                      {/* Specifications */}
                      <div className="space-y-2 text-sm mb-4">
                        <div>
                          <span className="font-medium text-gray-700">Dimensions:</span>
                          <span className="text-gray-600 ml-1">{item.specifications.dimensions}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Material:</span>
                          <span className="text-gray-600 ml-1">{item.specifications.material}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Color:</span>
                          <span className="text-gray-600 ml-1">{item.specifications.color}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Style:</span>
                          <span className="text-gray-600 ml-1">{item.specifications.style}</span>
                        </div>
                        {item.specifications.weight && (
                          <div>
                            <span className="font-medium text-gray-700">Weight:</span>
                            <span className="text-gray-600 ml-1">{item.specifications.weight}</span>
                          </div>
                        )}
                      </div>

                      {/* Stock Status */}
                      <div className="mb-4">
                        {item.inStock ? (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            In Stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Out of Stock
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        <button
                          onClick={() => handleAddToCart(item)}
                          disabled={!item.inStock}
                          className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center"
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Add to Cart
                        </button>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleAddToWishlist(item)}
                            className={`flex-1 border px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center ${
                              isInWishlist(item.id)
                                ? 'border-red-500 text-red-500 bg-red-50'
                                : 'border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500'
                            }`}
                          >
                            <Heart className="w-4 h-4 mr-1" />
                            Wishlist
                          </button>
                          <button
                            onClick={() => handleRequestQuote(item)}
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded text-sm font-medium transition-colors"
                          >
                            Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Tips */}
        <div className="mt-8 bg-amber-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Comparison Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div>
              <h4 className="font-medium mb-1">Consider Your Space</h4>
              <p>Check dimensions to ensure the furniture fits your room perfectly.</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Material Quality</h4>
              <p>Compare materials for durability and maintenance requirements.</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Style Consistency</h4>
              <p>Choose pieces that complement your existing decor and style.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;