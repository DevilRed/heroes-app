import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "./heroes";
import AppLayout from "./layouts/AppLayout";
import { AuthProvider, LoginPage } from "./auth";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";

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
        element: (
          <PublicRoute>
            <SearchPage />
          </PublicRoute>
        ),
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
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
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
