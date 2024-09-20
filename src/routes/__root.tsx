import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: Root,
});

export function Root() {
  return (
    <>
      <div className="bg-black p-3 text-white flex gap-3">
        <Link to="/" className="text-white [&.active]:font-bold">
          Home
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
