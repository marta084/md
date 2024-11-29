import { Link } from "@remix-run/react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
}

export function ProductCard({ id, name, price, imageUrl, category, rating }: ProductCardProps) {
  return (
    <Link
      to={`/product/${id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
    >
      <div className="aspect-square overflow-hidden bg-gray-100 group-hover:opacity-75">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <div className="flex flex-1 justify-between items-end">
          <p className="text-sm font-medium text-gray-900">${price}</p>
          <div className="flex items-center">
            <svg
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 15.934l-6.18 3.254 1.18-6.883L.083 7.571l6.9-1.002L10 .333l3.017 6.236 6.9 1.002-4.917 4.734 1.18 6.883z"
              />
            </svg>
            <span className="ml-1 text-sm text-gray-500">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
