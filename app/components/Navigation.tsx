import { Menu, ShoppingCart, X, Armchair, Table2, CircleDot, BookmarkPlus, Sofa, Package, Phone } from "lucide-react";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { CartSidebar } from "./CartSidebar";
import { useCart } from "~/context/CartContext";

const menuItems = [
  { name: "Stühle", icon: CircleDot, href: "/kategorien/stuehle" },
  { name: "Tische", icon: Table2, href: "/kategorien/tische" },
  { name: "Sessel", icon: Armchair, href: "/kategorien/sessel" },
  { name: "Schränke", icon: BookmarkPlus, href: "/kategorien/schraenke" },
  { name: "Akustik", icon: Sofa, href: "/kategorien/akustik" },
  { name: "Zubehör", icon: Package, href: "/kategorien/zubehoer" }
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
  }, [isMobileMenuOpen]);

  useEffect(() => {
  }, [isCartOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="w-full mx-auto px-4 sm:px-6 desktop:px-8">
        <div className="flex items-center justify-between h-16 desktop:grid desktop:grid-cols-3">
          {/* Left - Menu Button (mobile/tablet) / Logo (desktop) */}
          <div className="flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="desktop:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
            <Link to="/" className="hidden desktop:flex items-center">
              <img src="/images/logo.svg" alt="Logo" className="h-8" />
            </Link>
          </div>

          {/* Center - Logo (mobile/tablet) / Menu Items (desktop) */}
          <div className="flex items-center justify-center">
            <Link to="/" className="desktop:hidden flex items-center">
              <img src="/images/logo.svg" alt="Logo" className="h-8" />
            </Link>
            <div className="hidden desktop:flex items-center justify-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center text-gray-700 hover:text-gray-900 px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap"
                >
                  <item.icon className="h-5 w-5 mr-1.5 flex-shrink-0" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Cart (mobile/tablet) / Phone & Cart (desktop) */}
          <div className="flex items-center justify-end gap-6">
            <a 
              href="tel:+49-30-123456789" 
              className="hidden desktop:flex items-center text-gray-700 hover:text-gray-900 whitespace-nowrap"
            >
              <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="text-sm font-medium">+49 30 123456789</span>
            </a>
            <button
              onClick={toggleCart}
              className="flex items-center"
            >
              <ShoppingCart
                className="h-6 w-6 text-gray-700 hover:text-gray-900"
                aria-hidden="true"
              />
              {items && items.length > 0 && (
                <span className="ml-2 text-sm font-medium text-blue-600 group-hover:text-blue-800">
                  {items.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40">
          <div 
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={closeAll}
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-lg z-50">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between h-14 px-4 border-b border-gray-200">
                <span className="text-lg sm:text-xl font-bold text-gray-900">Kategorien</span>
                <button
                  onClick={closeAll}
                  className="inline-flex items-center justify-center p-1 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  <X className="block h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 pt-2 pb-4">
                <div className="px-4 space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center px-2 py-2 rounded-md text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-100"
                      onClick={closeAll}
                    >
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-4 px-2 py-2">
                    <a 
                      href="tel:+49-30-123456789" 
                      className="flex items-center text-gray-700 hover:text-gray-900"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      <span className="text-sm sm:text-base font-medium">+49 30 123456789</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={closeAll} />
    </nav>
  );
}
