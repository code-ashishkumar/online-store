import { create } from 'zustand';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
}

interface AccountState {
  user: User;
  address: Address;
  orders: Order[];
  updateUser: (updatedUser: User) => void;
  updateAddress: (updatedAddress: Address) => void;
}

export const useAccountStore = create<AccountState>((set) => ({
  user: { name: 'John Doe', email: 'john@example.com', phone: '+1234567890' },
  address: {
    street: '123 Main St',
    city: 'Metropolis',
    state: 'NY',
    postalCode: '10001',
  },
  orders: [
    { id: '001', date: '2023-10-15', status: 'Shipped', total: 59.99 },
    { id: '002', date: '2023-09-10', status: 'Delivered', total: 39.99 },
  ],
  updateUser: (updatedUser: User) => set({ user: updatedUser }),
  updateAddress: (updatedAddress: Address) => set({ address: updatedAddress }),
}));
