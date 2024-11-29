import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";

interface Product {
  Produkttitel: string;
  Preis: number;
  Slug: string;
  Medien: Array<{
    Medien_id: {
      Bild: {
        id: string;
      };
    };
  }>;
}

interface LoaderData {
  category: {
    Kategoriename: string;
    Kategoriebeschreibung: string;
  };
  products: Array<{
    Produkte_id: Product;
  }>;
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const query = `
    query Produkte_Kategorien($Slug: String) {
      Kategorien(filter: { slug: { _eq: $Slug } }) {
        Kategoriename
        Kategoriebeschreibung
      }
      Produkte_Kategorien(filter: { Kategorien_id: { slug: { _eq: $Slug } } }) {
        Produkte_id {
          Produkttitel
          Preis
          Slug
          Medien(filter: { Medien_id: { Ist_Hauptbild_ja_nein: { _eq: true } } }) {
            Medien_id {
              Bild {
                id
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://directus.meineapp.uk/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        Slug: params.slug,
      },
    }),
  });

  const { data } = await response.json();

  if (!data.Kategorien?.[0]) {
    throw new Response("Kategorie nicht gefunden", { status: 404 });
  }

  return json({
    category: data.Kategorien[0],
    products: data.Produkte_Kategorien,
  });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [
      { title: "Kategorie nicht gefunden | Möbel Store" },
      { name: "description", content: "Die gesuchte Kategorie wurde nicht gefunden." },
    ];
  }

  return [
    { title: `${data.category.Kategoriename} | Möbel Store` },
    { name: "description", content: data.category.Kategoriebeschreibung },
  ];
};

export default function CategoryPage() {
  const { category, products } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {category.Kategoriename}
          </h1>
          {category.Kategoriebeschreibung && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {category.Kategoriebeschreibung}
            </p>
          )}
          <div className="w-40 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products?.filter(item => item?.Produkte_id).map((item) => {
            if (!item?.Produkte_id) return null;
            
            return (
              <Link
                key={item.Produkte_id.Produkttitel || 'unnamed-product'}
                to={`/product/${item.Produkte_id.Slug || 'unnamed-product'}`}
                className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 relative">
                  {item.Produkte_id.Medien?.[0]?.Medien_id?.Bild?.id ? (
                    <img
                      src={`https://directus.meineapp.uk/assets/${item.Produkte_id.Medien[0].Medien_id.Bild.id}`}
                      alt={item.Produkte_id.Produkttitel || 'Produktbild'}
                      className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-100">
                      <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {item.Produkte_id.Produkttitel || 'Unbenanntes Produkt'}
                  </h3>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-bold text-blue-600">
                      {new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'EUR'
                      }).format(item.Produkte_id.Preis || 0)}
                    </p>
                    <span className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                      Details
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {(!products || products.length === 0) && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Keine Produkte gefunden</h3>
            <p className="mt-2 text-gray-600">
              In dieser Kategorie sind derzeit keine Produkte verfügbar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
