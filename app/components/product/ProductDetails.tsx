import { Star, Truck, Shield } from "lucide-react";

interface ProductDetailsProps {
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  sku: string;
  availability: "In Stock" | "Out of Stock" | "Low Stock";
}

export function ProductDetails({
  name,
  description,
  price,
  rating,
  reviewCount,
  sku,
  availability,
}: ProductDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Product Title and Rating */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
        <div className="mt-4 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`h-5 w-5 ${
                  index < rating
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-3 text-sm text-gray-500">
            {reviewCount} reviews
          </span>
        </div>
      </div>

      {/* Price and Availability */}
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold text-gray-900">${price}</p>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium
            ${
              availability === "In Stock"
                ? "bg-green-100 text-green-800"
                : availability === "Low Stock"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }
          `}
        >
          {availability}
        </span>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-sm font-medium text-gray-900">Description</h3>
        <div
          className="mt-2 prose prose-sm text-gray-500"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* Additional Information */}
      <div className="border-t border-gray-200 pt-6">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-500">SKU</dt>
            <dd className="mt-1 text-sm text-gray-900">{sku}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Shipping</dt>
            <dd className="mt-1 text-sm text-gray-900 flex items-center">
              <Truck className="h-4 w-4 mr-1" />
              Free shipping
            </dd>
          </div>
        </dl>
      </div>

      {/* Guarantees */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Shield className="h-4 w-4" />
          <span>30-day money-back guarantee</span>
        </div>
      </div>
    </div>
  );
}
