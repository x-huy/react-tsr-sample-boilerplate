import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router.ts";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
