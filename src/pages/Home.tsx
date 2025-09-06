import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';
import { LoadingSkeleton, Card, Button } from '../components/ui';
import { CATEGORIES, FEATURES } from '../constants';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for better UX demonstration
    const loadData = async () => {
      setIsLoading(true);
      setCategoriesLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const products = getFeaturedProducts();
      setFeaturedProducts(products);
      setIsLoading(false);
      
      // Categories load slightly after
      await new Promise(resolve => setTimeout(resolve, 300));
      setCategoriesLoading(false);
    };
    
    loadData();
  }, []);

  const categoryImages = {
    'home-office': 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=500',
    'kitchen': 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=500',
    'sitting-room': 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
    'dining-room': 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    'bedroom': 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=500',
  };

  const getFeatureIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8 text-amber-600" };
    switch (iconName) {
      case 'Award': return <Award {...iconProps} />;
      case 'Users': return <Users {...iconProps} />;
      case 'Truck': return <Truck {...iconProps} />;
      case 'Star': return <Star {...iconProps} />;
      default: return <Star {...iconProps} />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Premium Furniture for <span className="text-amber-400">Modern Living</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Transform your space with our carefully curated collection of high-quality furniture
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
              <Button
                as={Link}
                to="/category/home-office"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 min-w-[160px]"
              >
                Shop Now
              </Button>
              <Button
                as={Link}
                to="/about"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 min-w-[160px]"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Shop by Category</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">Find the perfect furniture for every room in your home</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {categoriesLoading ? (
              Array.from({ length: 6 }, (_, index) => (
                <Card key={index} className="overflow-hidden">
                  <LoadingSkeleton variant="rectangular" className="h-48 sm:h-56 lg:h-64 w-full" />
                  <div className="p-3 sm:p-4 space-y-2">
                    <LoadingSkeleton variant="text" className="h-5 sm:h-6 w-3/4" />
                    <LoadingSkeleton variant="text" className="h-3 sm:h-4 w-full" />
                  </div>
                </Card>
              ))
            ) : (
              CATEGORIES.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  aria-label={`Browse ${category.name} furniture`}
                >
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={categoryImages[category.id as keyof typeof categoryImages]}
                      alt={category.name}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{category.name}</h3>
                    <p className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed">{category.description}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Featured Products</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">Handpicked favorites from our collection</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {isLoading ? (
              <LoadingSkeleton variant="product-card" count={8} />
            ) : (
              featuredProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Footsteps Furniture?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">We're committed to providing exceptional furniture and service</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {FEATURES.map((feature, index) => (
              <Card key={index} className="text-center p-4 sm:p-6" hover>
                <div className="flex justify-center mb-3 sm:mb-4">
                  {getFeatureIcon(feature.icon)}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Ready to Transform Your Space?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-amber-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Get a free consultation and quote for your furniture needs
          </p>
          <Button
            as={Link}
            to="/contact"
            variant="secondary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            className="bg-white text-amber-600 hover:bg-gray-100 border-2 border-white w-full sm:w-auto min-w-[200px]"
          >
            Get Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;