import { create } from 'zustand';
import { useAuthStore } from './authStore';

export const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => {
    const { isAuthenticated } = useAuthStore.getState();
    if (isAuthenticated) {
      set((state) => ({ items: [...state.items, item] }));
    } else {
      alert('Please log in to add items to the cart.');
      console.warn('Unauthorized: Cannot add item to the cart.');
    }
  },
  removeItem: (itemId) => {
    const { isAuthenticated } = useAuthStore.getState();
    if (isAuthenticated) {
      set((state) => ({ items: state.items.filter((item) => item._id !== itemId) }));
    } else {
      alert('Please log in to remove items from the cart.');
      console.warn('Unauthorized: Cannot remove item from the cart.');
    }
  },
  clearCart: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (isAuthenticated) {
      set({ items: [] });
    } else {
      alert('Please log in to clear the cart.');
      console.warn('Unauthorized: Cannot clear the cart.');
    }
  },
}));
