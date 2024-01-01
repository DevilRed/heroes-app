import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "./heroes";
import AppLayout from "./layouts/AppLayout";
import { LoginPage } from "./auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DcPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "hero/:id",
        element: <HeroPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export const HeroesApp = () => {
  return (
    <RouterProvider router={router}>
      <div>HeroesApp</div>
    </RouterProvider>
  );
};
