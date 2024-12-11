import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import IProductResponse from "../../../models/IProductResponse";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get<IProductResponse>(
      "https://dummyjson.com/products?limit=0"
    );
    return response.data;
  }
);
