import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';

interface QuoteContextType {
  isQuoteModalOpen: boolean;
  selectedProduct: Product | null;
  openQuoteModal: (product: Product) => void;
  closeQuoteModal: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openQuoteModal = (product: Product) => {
    setSelectedProduct(product);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <QuoteContext.Provider value={{
      isQuoteModalOpen,
      selectedProduct,
      openQuoteModal,
      closeQuoteModal,
    }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};