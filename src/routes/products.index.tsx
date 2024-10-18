// File: src/routes/products.index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { getProducts } from "../api/products";

export const Route = createFileRoute("/products/")({
  component: ProductsIndex,
  loader: () => {
    return getProducts();
  },
});

export function ProductsIndex() {
  const { products } = Route.useLoaderData();

  return (
    <div>
      <div className="flex gap-3">
        <h2 className="text-xl font-bold">All Products</h2>
      </div>
      <ul className="m-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-6">
        {products.map(({ id, title, price, thumbnail }) => (
          <li key={id}>
            <img src={thumbnail} className="w-40 h-40 flex-shrink-0" />
            <span className="flex flex-col gap-1">
              <span>{title}</span>
              <span className="text-red-600 font-bold">${price}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
