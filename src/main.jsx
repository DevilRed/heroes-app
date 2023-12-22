import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { HeroesApp } from "./HeroesApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { MarvelPage } from "./heroes/pages/MarvelPage";
import { DcPage } from "./heroes/pages/DcPage";
import { LoginPage } from "./auth/pages/LoginPage";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRouter />,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
