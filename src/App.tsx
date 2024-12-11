import { useEffect } from "react";
import { fetchProducts } from "./store/reducers/product/ActionsCreators";
import { useAppDispatch } from "./hooks/redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { CreateProductPage } from "./pages/CreateProductPage";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <ProductsPage></ProductsPage>,
  },
  {
    path: "/products/:id",
    element: <ProductPage></ProductPage>,
  },
  {
    path: "/create-product",
    element: <CreateProductPage></CreateProductPage>,
  },
  {
    path: "*",
    element: <ProductsPage></ProductsPage>,
  },
]);

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};