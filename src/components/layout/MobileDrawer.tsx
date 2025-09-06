import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronRight, Home, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = [
    { 
      id: 'home-office', 
      name: 'Home Office', 
      subcategories: ['Office Chairs', 'Desks', 'Storage'] 
    },
    { 
      id: 'kitchen', 
      name: 'Kitchen', 
      subcategories: ['Cabinets', 'Stools', 'Dining Sets'] 
    },
    { 
      id: 'sitting-room', 
      name: 'Sitting Room', 
      subcategories: ['Sofas', 'Recliners', 'Coffee Tables'] 
    },
    { 
      id: 'dining-room', 
      name: 'Dining Room', 
      subcategories: ['Dining Tables', 'Chairs', 'Sideboards'] 
    },
    { 
      id: 'bedroom', 
      name: 'Bedroom', 
      subcategories: ['Beds', 'Wardrobes', 'Dressers'] 
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedCategory(null);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-amber-600 text-white">
          <div className="flex items-center space-x-2">
            <img 
              src="/public/WhatsApp Image 2025-09-06 at 06.15.50.jpeg" 
              alt="Footsteps Furniture" 
              className="h-8 w-auto"
            />
            <div>
              <h2 className="font-bold text-lg">Footsteps</h2>
              <p className="text-xs text-amber-100">Furniture Co. Ltd</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-amber-700 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4 space-y-2">
            {/* Home */}
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Home className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">Home</span>
            </Link>

            {/* Categories */}
            {categories.map((category) => (
              <div key={category.id}>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-900">{category.name}</span>
                  {expandedCategory === category.id ? (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                
                {/* Subcategories */}
                {expandedCategory === category.id && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      to={`/category/${category.id}`}
                      onClick={handleLinkClick}
                      className="block p-2 text-sm text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded transition-colors"
                    >
                      All {category.name}
                    </Link>
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        to={`/category/${category.id}?sub=${sub.toLowerCase().replace(' ', '-')}`}
                        onClick={handleLinkClick}
                        className="block p-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Other Pages */}
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium text-gray-900">About Us</span>
            </Link>

            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">Contact</span>
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="border-t border-gray-200 p-4 mt-4">
            <h3 className="font-semibold text-gray-900 mb-3">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-600" />
                <span className="text-gray-600">+256 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-600" />
                <span className="text-gray-600">sales@footstepsfurniture.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-600 mt-0.5" />
                <div className="text-gray-600">
                  <p>123 Furniture Street</p>
                  <p>Kampala, Uganda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
