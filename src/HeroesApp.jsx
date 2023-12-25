import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MarvelPage, DcPage } from "./heroes";
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
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export const HeroesApp = () => {
  return (
    <RouterProvider router={router}>
      <div>HeroesApp</div>
    </RouterProvider>
  );
};
