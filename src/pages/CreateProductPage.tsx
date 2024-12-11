import React, { useState } from "react";
import { AppLayout } from "../components/appLayout/AppLayout";
import { useInput } from "../hooks/useInput";
import { IProduct } from "../models/IProduct";
import { useAppDispatch } from "../hooks/redux";
import { addProduct } from "../store/reducers/product/ProductSlice";
import { useNavigate } from "react-router-dom";
import { AppInput } from "../components/ui/appInput/AppInput";
import { FileInput } from "../components/ui/appFileInput/FileInput";
import { AppButton } from "../components/ui/appButton/AppButton";

export const CreateProductPage = () => {
  const productName = useInput("", { minLength: 3, maxLength: 250 });
  const productPrice = useInput("", { minLength: 2, maxLength: 6 });
  const productDescription = useInput("", { minLength: 2, maxLength: 250 });

  const [image, setImage] = useState({});
  console.log(image);

  const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setImage(e.target.files[0]);
  };

  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const handleAddProduct = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (
      !productName.value ||
      !productPrice.value ||
      !productDescription.value
    ) {
      alert("Заполните все поля!");
      return;
    }
    const newProduct: IProduct = {
      description: productDescription.value,
      id: Date.now(),
      images: [],
      isLike: false,
      price: Number(productPrice.value),
      title: productName.value,
    };
    dispatch(addProduct(newProduct));
    nav("/products");
  };

  return (
    <AppLayout title={"Create product"}>
      <form>
        <AppInput inputState={productName} title="Название"></AppInput>
        <AppInput inputState={productPrice} title="Цена"></AppInput>
        <AppInput inputState={productDescription} title="Описание"></AppInput>
        <FileInput changeFunction={selectImage} title="Изображение"></FileInput>
        <AppButton
          handleClick={handleAddProduct}
          title={"Доавить товар"}
        ></AppButton>
      </form>
    </AppLayout>
  );
};
