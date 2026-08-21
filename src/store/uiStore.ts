import { create } from 'zustand';

export interface ToastNotification {
  id: number;
  message: string;
  type?: 'success' | 'info' | 'error';
}

interface UIState {
  isCartDrawerOpen: boolean;
  isMobileNavOpen: boolean;
  toasts: ToastNotification[];
  
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  toggleCartDrawer: () => void;

  openMobileNav: () => void;
  closeMobileNav: () => void;

  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: number) => void;
}

export const useUIStore = create<UIState>((set, get) => ({
  isCartDrawerOpen: false,
  isMobileNavOpen: false,
  toasts: [],

  openCartDrawer: () => set({ isCartDrawerOpen: true }),
  closeCartDrawer: () => set({ isCartDrawerOpen: false }),
  toggleCartDrawer: () => set(state => ({ isCartDrawerOpen: !state.isCartDrawerOpen })),

  openMobileNav: () => set({ isMobileNavOpen: true }),
  closeMobileNav: () => set({ isMobileNavOpen: false }),

  showToast: (message: string, type = 'success') => {
    const id = Date.now() + Math.random();
    set(state => ({
      toasts: [...state.toasts, { id, message, type }]
    }));

    setTimeout(() => {
      get().removeToast(id);
    }, 3500);
  },

  removeToast: (id: number) => {
    set(state => ({
      toasts: state.toasts.filter(t => t.id !== id)
    }));
  }
}));
