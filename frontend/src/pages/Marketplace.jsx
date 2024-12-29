import React, { useState } from 'react';
import { Filter, ShoppingCart } from 'lucide-react';
import { ProductCard } from '../components/marketplace/ProductCard';
import { ProductSearch } from '../components/marketplace/ProductSearch';
import { AddProductForm } from '../components/marketplace/AddProductForm';
import { CartDrawer } from '../components/marketplace/CartDrawer';
import { ProductFilters } from '../components/marketplace/ProductFilters';
import { useAuthStore } from '../store/authStore';
import { useCartStore } from '../store/cartStore';
import { useProducts } from '../hooks/useProductHook';

const DEFAULT_FILTERS = {
  category: 'All',
  priceRange: { min: 0, max: 10000000000 },
  sortBy: 'price-asc',
  searchQuery: ''
};

export function Marketplace() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState(DEFAULT_FILTERS.searchQuery);
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_FILTERS.category);
  const [priceRange, setPriceRange] = useState(DEFAULT_FILTERS.priceRange);
  const [sortBy, setSortBy] = useState(DEFAULT_FILTERS.sortBy);

  const { user } = useAuthStore();
  const cartItems = useCartStore(state => state.items);
  const { productList, isLoading, error, addProduct, deleteProduct, filterProducts, setProductList } = useProducts();

  const handleAddProductSuccess = (newProduct) => {
    setProductList((prevList) => [...prevList, newProduct]);
    setShowAddProduct(false);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId); 
      const updatedProductList = productList.filter((product) => product._id !== productId);
      setProductList(updatedProductList); 
    } catch (err) {
      console.error('Failed to delete product:', err);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery(DEFAULT_FILTERS.searchQuery);
    setSelectedCategory(DEFAULT_FILTERS.category);
    setPriceRange(DEFAULT_FILTERS.priceRange);
    setSortBy(DEFAULT_FILTERS.sortBy);
  };

  const filteredProducts = filterProducts(productList, {
    category: selectedCategory,
    priceRange,
    searchQuery
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price; 
      default:
        return 0;
    }
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-lg text-teal-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-4 lg:space-y-0">
        <h1 className="text-3xl font-bold text-teal-700">Marketplace</h1>
        
        {/* Search, Cart, and Filters */}
        <div className="flex space-x-4 items-center w-full lg:w-auto">
          <ProductSearch onSearch={setSearchQuery} />
          
          <button 
            onClick={() => setShowCart(true)}
            className="relative flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            <ShoppingCart size={20} className="mr-2" />
            Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onPriceRangeChange={setPriceRange}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onReset={handleResetFilters}
          />
        </div>
      </div>

      {/* Add Product Button */}
      {user?.role === 'entrepreneur' && (
        <div className="mb-8 flex justify-end">
          <button
            onClick={() => setShowAddProduct(!showAddProduct)}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
          >
            {showAddProduct ? 'Cancel' : 'Add New Product'}
          </button>

          {/* Add Product Form */}
          {showAddProduct && (
            <div className="mt-4 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-teal-700 mb-4">Add New Product</h2>
              <AddProductForm onSuccess={handleAddProductSuccess} />
            </div>
          )}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedProducts.map((product) => (
          <ProductCard 
            key={product._id} 
            product={product} 
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)} />
    </div>
  );
}
