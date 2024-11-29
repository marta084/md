import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useHydrated } from "remix-utils/use-hydrated";

interface CartItem {
  id: string;
  variantId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  selectedOptions?: Record<string, string>;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'selectedOptions'> & { selectedOptions?: Record<string, string> }) => void;
  removeItem: (id: string, selectedOptions?: Record<string, string>) => void;
  updateQuantity: (id: string, selectedOptions: Record<string, string> | undefined, quantity: number) => void;
  total: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  total: 0,
  isOpen: false,
  setIsOpen: () => {}
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const isHydrated = useHydrated();

  useEffect(() => {
    if (isHydrated) {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        try {
          setItems(JSON.parse(savedCart));
        } catch (error) {
          console.error("Error parsing saved cart:", error);
          setItems([]);
        }
      }
    }
  }, [isHydrated]);

  useEffect(() => {
    if (isHydrated && items.length > 0) {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addItem = useCallback((newItem: Omit<CartItem, 'selectedOptions'> & { selectedOptions?: Record<string, string> }) => {
    console.log("[CartContext] Adding item to cart:", newItem);
    if (!isHydrated) return;
    
    setItems(currentItems => {
      // Get stored options for this product
      const storedOptions = typeof window !== 'undefined' 
        ? localStorage.getItem(`product_${newItem.id}_selectedOptions`)
        : null;
      const selectedOptions = newItem.selectedOptions || (storedOptions ? JSON.parse(storedOptions) : {});

      const existingItemIndex = currentItems.findIndex(
        item => item.id === newItem.id && 
               JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions)
      );

      if (existingItemIndex > -1) {
        return currentItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + (newItem.quantity || 1) }
            : item
        );
      }

      return [...currentItems, { ...newItem, selectedOptions }];
    });
  }, [isHydrated]);

  const removeItem = useCallback((id: string, selectedOptions?: Record<string, string>) => {
    console.log("[CartContext] Removing item from cart:", id);
    if (!isHydrated) return;
    
    setItems(currentItems =>
      currentItems.filter(
        item =>
          !(
            item.id === id &&
            JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions)
          )
      )
    );
  }, [isHydrated]);

  const updateQuantity = useCallback((id: string, selectedOptions: Record<string, string> | undefined, quantity: number) => {
    console.log("[CartContext] Updating quantity for item:", id, "to:", quantity);
    if (!isHydrated) return;
    
    setItems(currentItems => {
      if (quantity === 0) {
        return currentItems.filter(
          item =>
            !(
              item.id === id &&
              JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions)
            )
        );
      }

      return currentItems.map(item =>
        item.id === id &&
        JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions)
          ? { ...item, quantity }
          : item
      );
    });
  }, [isHydrated]);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  console.log("[CartContext] Current cart state:", items);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        total,
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (typeof window === 'undefined') {
    // Return default values during server-side rendering
    return {
      items: [],
      addItem: () => {},
      removeItem: () => {},
      updateQuantity: () => {},
      total: 0,
      isOpen: false,
      setIsOpen: () => {}
    };
  }
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
