import { create } from 'zustand';
import { CartItem, useCartStore } from './cartStore'; // Ensure this path is correct based on your project structure

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
}

interface WishlistState {
  wishlistItems: WishlistItem[];
  addItemToWishlist: (item: WishlistItem) => void;
  removeItemFromWishlist: (id: number) => void;
  clearWishlist: () => void;
  moveItemToCart: (item: WishlistItem) => void;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  wishlistItems: [],

  addItemToWishlist: (newItem) =>
    set((state) => {
      const exists = state.wishlistItems.some((item) => item.id === newItem.id);
      if (exists) return state; // Avoid duplicates
      return { wishlistItems: [...state.wishlistItems, newItem] };
    }),

  removeItemFromWishlist: (id) =>
    set((state) => ({
      wishlistItems: state.wishlistItems.filter((item) => item.id !== id),
    })),

  clearWishlist: () => set({ wishlistItems: [] }),

  moveItemToCart: (item: CartItem) => {
    useCartStore.getState().addItem(item);
    set((state) => ({
      wishlistItems: state.wishlistItems.filter(
        (wishlistItem) => wishlistItem.id !== item.id,
      ),
    }));
  },
}));
