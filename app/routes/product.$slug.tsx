import { data } from "react-router";
import { Link, useLoaderData } from "react-router";
import { ImageGallery } from "~/components/product/ImageGallery";
import { ProductTabs } from "~/components/product/ProductTabs";
import { useCart } from "~/context/CartContext";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { ProductConfigurator } from "~/components/product/ProductConfigurator";

export async function loader({
  params,
  request,
}: {
  params: { slug: string };
  request: Request;
}) {
  try {
    if (!params.slug) {
      throw new Response("Product slug is required", { status: 400 });
    }

    const response = await fetch("https://directus.meineapp.uk/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query Produkte($Slug: String!) {
            Produkte(filter: { Slug: { _eq: $Slug } }) {
              Produkttitel
              Kleine_produktbeschreibung
              Preis
              Produktbeschreibung
              Medien {
                Medien_id {
                  Bild {
                    id
                    title
                  }
                }
              }
              Varianten {
                id
                Varianten_id {
                  Preis
                  Attribute {
                    Attribute_id {
                      Ist_Hauptattribut
                      Attribut_wert {
                        Attribut_Werte_id {
                          Wert
                          Media {
                            Medien_id {
                              Bild {
                                id
                                title
                              }
                              Alttext
                            }
                          }
                          Farben {
                            Farben_id {
                              Farbname
                              Farbe
                            }
                          }
                        }
                      }
                      Attribut
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          Slug: params.slug,
        },
      }),
    });

    if (!response.ok) {
      console.error(
        "API Response not OK:",
        response.status,
        response.statusText
      );
      throw new Response(
        `API request failed: ${response.status} ${response.statusText}`,
        {
          status: response.status,
        }
      );
    }

    const jsonData = await response.json();

    if (jsonData.errors) {
      console.error("GraphQL Errors:", jsonData.errors);
      throw new Response(
        jsonData.errors.map((e: any) => e.message).join("\n"),
        { status: 400 }
      );
    }

    const products = jsonData.data?.Produkte;

    if (!Array.isArray(products) || products.length === 0) {
      console.error("No product found for slug:", params.slug);
      throw new Response("Product not found", { status: 404 });
    }

    const product = products[0];

    // Ensure product has all required fields
    if (!product.Produkttitel) {
      throw new Response("Invalid product data: Missing required fields", {
        status: 500,
      });
    }

    // Normalize variants to prevent null/undefined issues
    product.Varianten = product.Varianten || [];

    return data({
      product,
    });
  } catch (error) {
    console.error("Loader Error:", error);
    if (error instanceof Response) {
      throw error;
    }
    throw new Response("An unexpected error occurred", { status: 500 });
  }
}

export default function ProductRoute() {
  const { product } = useLoaderData<typeof loader>();
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const [quantity, setQuantity] = useState(1);
  const [configurationError, setConfigurationError] = useState<string | null>(
    null
  );

  const handleConfigurationChange = (configuration: {
    selectedOptions: Record<string, string>;
    selectedVariant: any;
  }) => {
    setSelectedVariant(configuration.selectedVariant);
    setSelectedOptions(configuration.selectedOptions);
    setConfigurationError(null);
  };

  const currentPrice = selectedVariant
    ? selectedVariant.Varianten_id.Preis
    : product.Preis;

  const handleAddToCart = () => {
    // If there are no variants at all, add the base product
    if (!product.Varianten || product.Varianten.length === 0) {
      const cartItem = {
        id: product.Produkttitel,
        name: product.Produkttitel,
        price: product.Preis,
        image: product.Medien[0]?.Medien_id.Bild.id
          ? `https://directus.meineapp.uk/assets/${product.Medien[0].Medien_id.Bild.id}`
          : undefined,
        selectedOptions: {},
        quantity,
      };

      addItem(cartItem);
      return;
    }

    // If there are variants but none is selected
    if (!selectedVariant) {
      window.dispatchEvent(new Event("addToCartAttempt"));
      setConfigurationError(
        "Um Ihnen das bestmögliche Produkt anbieten zu können, wählen Sie bitte zuerst Ihre gewünschte Konfiguration aus."
      );
      return;
    }

    // Get all required attributes
    const requiredAttributes = new Set<string>();
    selectedVariant.Varianten_id.Attribute.forEach((attr: any) => {
      const key = attr.Attribute_id.Attribut.toLowerCase();
      requiredAttributes.add(key);
    });

    // Check if all required attributes are selected
    const missingAttributes = Array.from(requiredAttributes)
      .filter((attr) => !selectedOptions[attr])
      .map((attr) => {
        // Map attribute keys to their display names
        switch (attr) {
          case "farbe":
            return "Farbe";
          case "tischhoehe":
            return "Tischhöhe";
          case "sitzhoehe":
            return "Sitzhöhe";
          case "tischplattengroesse":
            return "Tischplattengröße";
          default:
            return attr;
        }
      });

    if (missingAttributes.length > 0) {
      window.dispatchEvent(new Event("addToCartAttempt"));
      setConfigurationError(
        `Um Ihnen das bestmögliche Produkt anbieten zu können, wählen Sie bitte noch folgende Optionen aus: ${missingAttributes.join(
          ", "
        )}`
      );
      return;
    }

    const optionsString = Object.entries(selectedOptions)
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
      .map(([key, value]) => `${key}:${value}`)
      .join("|");

    const uniqueId = `${product.Produkttitel}${
      optionsString ? `|${optionsString}` : ""
    }`;

    const cartItem = {
      id: uniqueId,
      name: product.Produkttitel,
      price: selectedVariant.Varianten_id.Preis,
      image: product.Medien[0]?.Medien_id.Bild.id
        ? `https://directus.meineapp.uk/assets/${product.Medien[0].Medien_id.Bild.id}`
        : undefined,
      selectedOptions,
      quantity,
    };

    addItem(cartItem);
    setConfigurationError(null);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <Link to="/" className="text-gray-400 hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-1 sm:mx-2">/</span>
          </li>
          <li className="text-gray-900 font-medium">{product.Produkttitel}</li>
        </ol>
      </nav>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Left column - Image gallery */}
          <div className="lg:sticky lg:top-24" style={{ isolation: "isolate" }}>
            <ImageGallery
              images={product.Medien.map((media) => ({
                id: media.Medien_id.Bild.id,
                url: `https://directus.meineapp.uk/assets/${media.Medien_id.Bild.id}`,
                alt: media.Medien_id.Bild.title,
              }))}
            />
          </div>

          {/* Right column - Product info */}
          <div className="lg:max-w-xl">
            <div className="lg:col-start-2">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.Produkttitel}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  €{currentPrice}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="text-base text-gray-700 space-y-6">
                  {product.Kleine_produktbeschreibung}
                </div>
              </div>

              {/* Product options */}
              <div className="mt-8">
                {product.Varianten && product.Varianten.length > 0 && (
                  <ProductConfigurator
                    variants={product.Varianten}
                    onConfigurationChange={handleConfigurationChange}
                  />
                )}

                {/* Quantity selector */}
                <div className="mt-8">
                  <h3 className="text-sm font-medium text-gray-900">Menge</h3>
                  <div className="mt-2 flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={decrementQuantity}
                      className="p-2 border rounded-md hover:bg-gray-50">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-gray-900 text-lg font-medium">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={incrementQuantity}
                      className="p-2 border rounded-md hover:bg-gray-50">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {configurationError && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-200">
                    <p className="text-sm text-blue-800">
                      {configurationError}
                    </p>
                  </div>
                )}

                <button
                  onClick={handleAddToCart}
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  In den Warenkorb
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product tabs */}
        <div className="mt-16 border-t border-gray-200">
          <ProductTabs description={product.Produktbeschreibung} />
        </div>
      </div>
    </div>
  );
}
