import { X, Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "~/context/CartContext";
import formatPrice from "~/utils/formatPrice";
import { Fragment, useEffect } from "react";
import { Link } from "react-router";
import { Transition, Dialog } from "@headlessui/react";
import { useHydrated } from "remix-utils/use-hydrated";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
    selectedOptions?: Record<string, string>;
  };
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

function formatOptionName(key: string): string {
  // Map of option names to their display values
  const optionDisplayNames: Record<string, string> = {
    'farbe': 'Farbe',
    'tischhoehe': 'Tischhöhe',
    'tischplattengröße': 'Tischplattengröße',
    'tischplattengroesse': 'Tischplattengröße',
    'sitzhoehe': 'Sitzhöhe'
  };

  // Return the mapped name or capitalize the first letter
  return optionDisplayNames[key.toLowerCase()] || 
    key.charAt(0).toUpperCase() + key.slice(1);
}

function formatOptionValue(key: string, value: string): string {
  // Add units based on the option type
  if (key.toLowerCase().includes('hoehe') || 
      key.toLowerCase().includes('groesse') || 
      key.toLowerCase().includes('größe')) {
    // Check if the value already contains 'cm'
    if (!value.toLowerCase().includes('cm')) {
      return `${value} cm`;
    }
  }
  return value;
}

function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <li className="flex py-6" key={item.id}>
      {item.image && (
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
      )}

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{item.name}</h3>
            <p className="ml-4">{formatPrice(item.price)}</p>
          </div>
          
          {/* Options Display */}
          {item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && (
            <dl className="mt-2 space-y-1 text-sm text-gray-500">
              {Object.entries(item.selectedOptions).map(([key, value]) => (
                <div key={key} className="flex">
                  <dt className="font-medium text-gray-700">{formatOptionName(key)}:</dt>
                  <dd className="ml-2">{formatOptionValue(key, value)}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="rounded-md bg-white p-1 text-gray-400 hover:text-gray-500"
              onClick={() => onUpdateQuantity(Math.max(1, item.quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="text-gray-500">{item.quantity}</span>
            <button
              type="button"
              className="rounded-md bg-white p-1 text-gray-400 hover:text-gray-500"
              onClick={() => onUpdateQuantity(item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={onRemove}
          >
            Entfernen
          </button>
        </div>
      </div>
    </li>
  );
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, updateQuantity, removeItem, total } = useCart();
  const isHydrated = useHydrated();

  // Handle server-side rendering
  if (typeof window === 'undefined') {
    return null;
  }

  useEffect(() => {
    console.log("[CartSidebar] Component mounted");
    return () => console.log("[CartSidebar] Component unmounted");
  }, []);

  useEffect(() => {
    console.log("[CartSidebar] Cart items:", items);
  }, [items]);

  const handleQuantityChange = (id: string, selectedOptions: Record<string, string> | undefined, quantity: number) => {
    if (!isHydrated) return;
    console.log("[CartSidebar] Updating quantity:", { id, selectedOptions, quantity });
    updateQuantity(id, selectedOptions, quantity);
  };

  const handleRemoveItem = (id: string, selectedOptions: Record<string, string> | undefined) => {
    if (!isHydrated) return;
    console.log("[CartSidebar] Removing item:", { id, selectedOptions });
    removeItem(id, selectedOptions);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={onClose}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        {!items || items.length === 0 ? (
                          <div className="flex flex-col items-center justify-center text-center">
                            <ShoppingCart className="h-12 w-12 text-gray-400 mb-4" />
                            <p className="text-lg font-medium text-gray-900">
                              Your cart is empty
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Start adding some items to your cart!
                            </p>
                          </div>
                        ) : (
                          <ul className="divide-y divide-gray-200">
                            {items.map((item) => (
                              <CartItem
                                key={`${item.id}-${JSON.stringify(item.selectedOptions)}`}
                                item={item}
                                onUpdateQuantity={(newQuantity) => handleQuantityChange(item.id, item.selectedOptions, newQuantity)}
                                onRemove={() => handleRemoveItem(item.id, item.selectedOptions)}
                              />
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {items && items.length > 0 && (
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>{formatPrice(total)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <Link
                            to="/checkout"
                            onClick={onClose}
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{" "}
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={onClose}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
