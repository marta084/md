import type { MetaFunction } from "react-router";
import { data } from "react-router";
import { Link, useLoaderData } from "react-router";
import { Navigation } from "~/components/Navigation";
import {
  Armchair,
  Table2,
  CircleDot,
  BookmarkPlus,
  Sofa,
  Package,
} from "lucide-react";

const categories = [
  {
    name: "Stühle",
    icon: CircleDot,
    href: "/kategorien/stuehle",
    description: "Ergonomische und stilvolle Stühle",
  },
  {
    name: "Tische",
    icon: Table2,
    href: "/kategorien/tische",
    description: "Hochwertige Tische",
  },
  {
    name: "Sessel",
    icon: Armchair,
    href: "/kategorien/sessel",
    description: "Komfortable Sessel",
  },
  {
    name: "Schränke",
    icon: BookmarkPlus,
    href: "/kategorien/schraenke",
    description: "Stilvolle Aufbewahrung",
  },
  {
    name: "Akustik",
    icon: Sofa,
    href: "/kategorien/akustik",
    description: "Optimale Raumakustik",
  },
  {
    name: "Zubehör",
    icon: Package,
    href: "/kategorien/zubehoer",
    description: "Ergänzende Accessoires",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Premium Möbel Store" },
    {
      name: "description",
      content: "Willkommen in unserem Premium Möbel Store",
    },
  ];
};

interface CardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  size: "small" | "large";
}

interface LoaderData {
  leftColumn: CardItem[];
  middleColumn: CardItem[];
  rightColumn: CardItem[];
}

export const loader = async () => {
  const data: LoaderData = {
    leftColumn: [
      {
        id: "1",
        title: "Bürostühle",
        description: "Ab €199.99",
        image:
          "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400",
        link: "/kategorien/stuehle",
        size: "small",
      },
      {
        id: "2",
        title: "Designer Sessel",
        description: "Bis zu 40% Rabatt",
        image:
          "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800",
        link: "/kategorien/sessel",
        size: "large",
      },
      {
        id: "3",
        title: "Neuheiten",
        description: "Entdecken Sie mehr",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400",
        link: "/neuheiten",
        size: "small",
      },
    ],
    middleColumn: [
      {
        id: "4",
        title: "Sommerkollektion",
        description: "Bis zu 50% auf ausgewählte Artikel",
        image:
          "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=1200",
        link: "/sommerkollektion",
        size: "large",
      },
      {
        id: "5",
        title: "Akustiklösungen",
        description: "Ab €299.99",
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400",
        link: "/kategorien/akustik",
        size: "small",
      },
      {
        id: "6",
        title: "Home Office",
        description: "Professionelle Arbeitsplätze",
        image:
          "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400",
        link: "/home-office",
        size: "small",
      },
      {
        id: "7",
        title: "Schranksysteme",
        description: "Organisieren Sie Ihren Raum",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800",
        link: "/kategorien/schraenke",
        size: "large",
      },
    ],
    rightColumn: [
      {
        id: "8",
        title: "Zubehör",
        description: "Unverzichtbare Ergänzungen",
        image:
          "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
        link: "/kategorien/zubehoer",
        size: "small",
      },
      {
        id: "9",
        title: "Tische",
        description: "Für jeden Anlass",
        image:
          "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=400",
        link: "/kategorien/tische",
        size: "small",
      },
      {
        id: "10",
        title: "Sonderangebote",
        description: "Limitierte Angebote",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
        link: "/sonderangebote",
        size: "large",
      },
    ],
  };

  return data;
};

export default function Index() {
  const { leftColumn, middleColumn, rightColumn } =
    useLoaderData<typeof loader>();

  const renderCard = (item: CardItem) => (
    <Link
      key={item.id}
      to={item.link}
      className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full h-full block">
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
        <p className="text-sm text-white/90 line-clamp-2">{item.description}</p>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Mobile Categories Menu */}
      <div className="desktop:hidden">
        <div className="mx-auto max-w-2xl px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                <category.icon className="h-8 w-8 text-gray-900 mb-3" />
                <h3 className="text-sm font-medium text-gray-900 text-center">
                  {category.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500 text-center">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid - Hidden on Mobile */}
      <div className="hidden desktop:block">
        <main className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 h-auto lg:h-[800px]">
            {/* Left Column */}
            <div className="md:col-span-1 lg:col-span-3 grid grid-rows-1 md:grid-rows-4 gap-4 h-[400px] md:h-[600px] lg:h-full">
              {/* Top card */}
              <div className="row-span-1 h-full md:h-auto">
                {renderCard(leftColumn[0])}
              </div>
              {/* Middle card */}
              <div className="hidden md:block row-span-2">
                {renderCard(leftColumn[1])}
              </div>
              {/* Bottom card */}
              <div className="hidden md:block row-span-1">
                {renderCard(leftColumn[2])}
              </div>
            </div>

            {/* Middle Column */}
            <div className="md:col-span-1 lg:col-span-6 grid grid-rows-2 md:grid-rows-8 gap-4 h-[600px] md:h-[600px] lg:h-full">
              {/* Top card */}
              <div className="row-span-1 md:row-span-3">
                {renderCard(middleColumn[0])}
              </div>
              {/* Middle section */}
              <div className="row-span-1 md:row-span-3 grid grid-cols-2 gap-4">
                <div className="h-full">{renderCard(middleColumn[1])}</div>
                <div className="h-full">{renderCard(middleColumn[2])}</div>
              </div>
              {/* Bottom card - Only visible on larger screens */}
              <div className="hidden md:block md:row-span-2">
                {renderCard(middleColumn[3])}
              </div>
            </div>

            {/* Right Column - Rearranged for mobile */}
            <div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-rows-4 gap-4 h-auto lg:h-full">
              {/* Mobile: 2 columns grid, Tablet/Desktop: vertical stack */}
              <div className="col-span-1 md:col-span-2 md:row-span-1 h-[200px] md:h-auto">
                {renderCard(rightColumn[0])}
              </div>
              <div className="col-span-1 md:col-span-2 md:row-span-1 h-[200px] md:h-auto">
                {renderCard(rightColumn[1])}
              </div>
              <div className="col-span-2 md:row-span-2 h-[250px] md:h-auto">
                {renderCard(rightColumn[2])}
              </div>
            </div>

            {/* Mobile-only cards from other columns */}
            <div className="md:hidden space-y-4">
              <div className="h-[250px]">{renderCard(leftColumn[1])}</div>
              <div className="h-[200px]">{renderCard(leftColumn[2])}</div>
              <div className="h-[200px]">{renderCard(middleColumn[3])}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
