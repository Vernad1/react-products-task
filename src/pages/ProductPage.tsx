import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../models/IProduct";
import { AppLayout } from "../components/appLayout/AppLayout";
import { Product } from "../components/product/Product";
import { ProductHeader } from "../components/productHeader/ProductHeader";
import { useAppSelector } from "../hooks/redux";

export const ProductPage: FC = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const id = useParams().id;
  const state = useAppSelector((state) => state.products.products);

  useEffect(() => {
    const currentProduct = state.find((product) => product.id == Number(id));
    if (currentProduct) {
      setProduct(currentProduct);
    } else {
      setProduct(null);
    }
  }, [id, state]);

  return (
    <AppLayout title="Product">
      <>
        <ProductHeader></ProductHeader>
        {product == null ? (
          "Что то пошло не так"
        ) : (
          <Product product={product}></Product>
        )}
      </>
    </AppLayout>
  );
};
