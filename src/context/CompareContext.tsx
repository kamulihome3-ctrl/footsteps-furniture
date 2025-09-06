import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../types';

interface CompareState {
  items: Product[];
}

type CompareAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_COMPARE' };

const compareReducer = (state: CompareState, action: CompareAction): CompareState => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      }
      // Limit to 4 items for comparison
      if (state.items.length >= 4) {
        return {
          ...state,
          items: [...state.items.slice(1), action.payload],
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_COMPARE':
      return { items: [] };
    default:
      return state;
  }
};

interface CompareContextType {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clearCompare: () => void;
  isInCompare: (id: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(compareReducer, { items: [] });

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCompare = () => {
    dispatch({ type: 'CLEAR_COMPARE' });
  };

  const isInCompare = (id: string) => {
    return state.items.some(item => item.id === id);
  };

  return (
    <CompareContext.Provider value={{
      items: state.items,
      addItem,
      removeItem,
      clearCompare,
      isInCompare,
    }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};