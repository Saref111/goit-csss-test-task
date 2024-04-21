import Home from "../pages/HomePage/HomePage";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CatalogPage } from "pages/CatalogPage/CatalogPage";
import { Provider } from 'react-redux';
import { persistor, store } from "store/store";
import { PersistGate } from "redux-persist/integration/react";

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
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};
