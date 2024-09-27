import { createFileRoute, Outlet } from "@tanstack/react-router";
import { getCategories } from "../api/products";

export const Route = createFileRoute("/products")({
  component: Products,
  loader: () => getCategories(),
});

export function Products() {
  const categories = Route.useLoaderData();

  return (
    <div className="mx-3 my-6 flex gap-32">
      <div>
        <h2 className="text-xl font-bold">Categories</h2>
        <ul className="list-disc m-3">
          {categories.map(({ slug, name }) => (
            <li key={slug}>{name}</li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
