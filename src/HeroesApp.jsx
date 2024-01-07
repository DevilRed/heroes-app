import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "./heroes";
import AppLayout from "./layouts/AppLayout";
import { AuthProvider, LoginPage } from "./auth";
import { PrivateRoute } from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "marvel",
        element: (
          <PrivateRoute>
            <MarvelPage />
          </PrivateRoute>
        ),
      },
      {
        path: "dc",
        element: (
          <PrivateRoute>
            <DcPage />
          </PrivateRoute>
        ),
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "hero/:id",
        element: (
          <PrivateRoute>
            <HeroPage />
          </PrivateRoute>
        ),
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
    <AuthProvider>
      <RouterProvider router={router}>
        <div>HeroesApp</div>
      </RouterProvider>
    </AuthProvider>
  );
};
