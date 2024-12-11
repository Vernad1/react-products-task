import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../models/IProduct";
import { fetchProducts } from "./ActionsCreators";
import IProductResponse from "../../../models/IProductResponse";

export enum FilterOptions {
  ALL = "ALL",
  SAVED = "SAVED",
  NOT_SAVED = "NOT_SAVED",
}

export enum SortOptions {
  ASC = "ASC",
  DESC = "DESC",
  NONE = "NONE",
}

interface ProductState {
  status: "no-load" | "loading" | "succeeded" | "failed";
  limit: number;
  total: number;
  products: IProduct[];
  filterBy: FilterOptions;
  sortBy: SortOptions;
}

const initialState: ProductState = {
  status: "no-load",
  limit: 24,
  total: 0,
  products: [],
  filterBy: FilterOptions.ALL,
  sortBy: SortOptions.NONE,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      const newProduct: IProduct = action.payload;
      state.products.unshift(newProduct);
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    toggleProductLike(state, action: PayloadAction<number>) {
      state.products = state.products.map((product) => {
        if (action.payload === product.id) {
          product.isLike = !product.isLike;
          return product;
        }
        return product;
      });
    },
    filterBy(state, action: PayloadAction<FilterOptions>) {
      state.filterBy = action.payload;
    },
    sortBy(state, action: PayloadAction<SortOptions>) {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IProductResponse>) => {
          state.status = "succeeded";
          state.products = action.payload.products.map((product) => {
            product.isLike = false;
            return product;
          });

          state.total = action.payload.total;
        }
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  addProduct,
  removeProduct,
  toggleProductLike,
  filterBy,
  sortBy,
} = productSlice.actions;

export default productSlice.reducer;
