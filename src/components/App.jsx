import Home from "../pages/HomePage/HomePage";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CatalogPage } from "pages/CatalogPage/CatalogPage";
import { Provider } from 'react-redux';
import store from "store/store";

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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
};
