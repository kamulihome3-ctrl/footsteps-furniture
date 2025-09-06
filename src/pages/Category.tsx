import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Filter, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory, getProductsBySubcategory } from '../data/products';
import { Product } from '../types';
import { LoadingSkeleton, Card, Button } from '../components/ui';
import { CATEGORIES } from '../constants';

const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchParams] = useSearchParams();
  const subcategory = searchParams.get('sub');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [filters, setFilters] = useState({
    material: '',
    color: '',
    style: '',
    inStock: false,
  });
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getCategoryName = (id: string) => {
    const category = CATEGORIES.find(cat => cat.id === id);
    return category ? category.name : id;
  };

  useEffect(() => {
    const loadProducts = async () => {
      if (categoryId) {
        setIsLoading(true);
        
        // Simulate loading delay for better UX demonstration
        await new Promise(resolve => setTimeout(resolve, 800));
        
        let categoryProducts;
        if (subcategory) {
          categoryProducts = getProductsBySubcategory(categoryId, subcategory.replace('-', ' '));
        } else {
          categoryProducts = getProductsByCategory(categoryId);
        }
        setProducts(categoryProducts);
        setFilteredProducts(categoryProducts);
        setIsLoading(false);
      }
    };
    
    loadProducts();
  }, [categoryId, subcategory]);

  useEffect(() => {
    let filtered = [...products];

    // Apply filters
    if (filters.material) {
      filtered = filtered.filter(p => 
        p.specifications.material.toLowerCase().includes(filters.material.toLowerCase())
      );
    }
    if (filters.color) {
      filtered = filtered.filter(p => 
        p.specifications.color.toLowerCase().includes(filters.color.toLowerCase())
      );
    }
    if (filters.style) {
      filtered = filtered.filter(p => 
        p.specifications.style.toLowerCase().includes(filters.style.toLowerCase())
      );
    }
    if (filters.inStock) {
      filtered = filtered.filter(p => p.inStock);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, filters, sortBy]);

  const handleFilterChange = (filterType: string, value: string | boolean) => {
    setFilters((prev: typeof filters) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      material: '',
      color: '',
      style: '',
      inStock: false,
    });
  };

  if (!categoryId) return <div>Category not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <span className="text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">
              {getCategoryName(categoryId)}
            </span>
            {subcategory && (
              <>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-900 font-medium">
                  {subcategory.replace('-', ' ')}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                  icon={Filter}
                  aria-label="Toggle filters"
                />
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Material Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Material
                  </label>
                  <select
                    value={filters.material}
                    onChange={(e) => handleFilterChange('material', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  >
                    <option value="">All Materials</option>
                    <option value="wood">Wood</option>
                    <option value="leather">Leather</option>
                    <option value="fabric">Fabric</option>
                    <option value="metal">Metal</option>
                    <option value="glass">Glass</option>
                  </select>
                </div>

                {/* Color Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color
                  </label>
                  <select
                    value={filters.color}
                    onChange={(e) => handleFilterChange('color', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  >
                    <option value="">All Colors</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="brown">Brown</option>
                    <option value="grey">Grey</option>
                    <option value="beige">Beige</option>
                  </select>
                </div>

                {/* Style Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Style
                  </label>
                  <select
                    value={filters.style}
                    onChange={(e) => handleFilterChange('style', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  >
                    <option value="">All Styles</option>
                    <option value="modern">Modern</option>
                    <option value="contemporary">Contemporary</option>
                    <option value="traditional">Traditional</option>
                    <option value="executive">Executive</option>
                  </select>
                </div>

                {/* In Stock Filter */}
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.inStock}
                      onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                      className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
                  </label>
                </div>

                <Button
                  onClick={clearFilters}
                  variant="secondary"
                  className="w-full"
                >
                  Clear Filters
                </Button>
              </div>
            </Card>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {getCategoryName(categoryId)}
                  {subcategory && ` - ${subcategory.replace('-', ' ')}`}
                </h1>
                {!isLoading && (
                  <p className="text-gray-600">
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                {/* Sort */}
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-700 whitespace-nowrap">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    disabled={isLoading}
                  >
                    <option value="name">Name</option>
                    <option value="rating">Rating</option>
                    <option value="reviews">Reviews</option>
                  </select>
                </div>

                {/* View Mode */}
                <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                    disabled={isLoading}
                    icon={Grid}
                    aria-label="Grid view"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                    disabled={isLoading}
                    icon={List}
                    aria-label="List view"
                  />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {isLoading ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                <LoadingSkeleton variant="product-card" count={viewMode === 'grid' ? 9 : 6} />
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products found matching your criteria.</p>
                <Button
                  onClick={clearFilters}
                  variant="primary"
                >
                  Clear Filters
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;