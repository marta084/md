import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import "./tailwind.css";
import { CartProvider } from "./context/CartContext";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

function App() {
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <html lang="en" className="h-full bg-gray-50">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full flex flex-col">
        {!isCheckoutPage && <Navigation />}
        <main className={`flex-1 ${!isCheckoutPage ? "pt-16" : ""}`}>
          <Outlet />
        </main>
        {!isCheckoutPage && <Footer />}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
}
