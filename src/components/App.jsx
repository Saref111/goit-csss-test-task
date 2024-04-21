import Home from "../pages/HomePage/HomePage";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <div>Catalog page</div>,
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
