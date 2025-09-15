import { useState, useEffect } from 'react';
import { fetchProductsFromSheets, Product } from '../services/sheetsService';

export interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProductsFromSheets();
      setProducts(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error loading products';
      setError(errorMessage);
      console.error('Error in useProducts hook:', err);
    } finally {
      setLoading(false);
    }
  };

  const refetch = async () => {
    await fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    refetch
  };
}