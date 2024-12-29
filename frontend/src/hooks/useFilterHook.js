import { useState, useCallback } from 'react';

export function useFilters() {
  const [filters, setFilters] = useState({
    languages: [],
    types: [],
    levels: []
  });

  const toggleFilter = useCallback((category, value) => {
    setFilters((prev) => {
      const currentFilters = prev[category];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter((item) => item !== value)
        : [...currentFilters, value];

      return {
        ...prev,
        [category]: newFilters
      };
    });
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      languages: [],
      types: [],
      levels: []
    });
  }, []);

  return { filters, toggleFilter, clearFilters };
}
