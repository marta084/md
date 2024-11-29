import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import tailwindcss from "./tailwind.css?url";
import { CartProvider } from "./context/CartContext";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Route } from "./+types/root";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: tailwindcss },
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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let title =
    error instanceof Error ? error.message : "Oops, something went wrong!";

  return (
    <main className="min-h-dvh w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-y-6 max-w-lg">
        <h1 className="text-4xl/none font-semibold text-center text-balance">
          {title}
        </h1>

        <p className="text-lg/normal text-center text-balance">
          We're sorry, but an unexpected error has occurred. Please try again
          later or contact support if the issue persists.
        </p>

        <Link to="/">Go to Homepage</Link>

        {error instanceof Error && error.stack ? (
          <pre className="bg-black text-white p-3 rounded-xl w-full overflow-x-auto mt-4">
            <code>{JSON.stringify(error.stack, null, "\t")}</code>
          </pre>
        ) : null}
      </div>
    </main>
  );
}
