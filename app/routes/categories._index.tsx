import { json } from "@remix-run/node";
import { Link } from "@remix-run/react";

export async function loader() {
  return json({ message: "Categories index" });
}

export default function CategoriesIndex() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Categories</h1>
      <p className="text-gray-600 mb-8">Browse our audio equipment categories</p>
    </div>
  );
}
