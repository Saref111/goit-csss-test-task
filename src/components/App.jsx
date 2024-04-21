import Home from "../pages/HomePage/HomePage";
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./Header/Header";
import { CatalogPage } from "pages/CatalogPage/CatalogPage";
import { getCampers } from "services/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
  {
    path: "/favorites",
    element: <div>Favorites page</div>,
  },
  {
    path: "*",
    element: <Home />,
  }
], {
  basename: "/goit-csss-test-task",

});

export const App = () => {
  return (

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
