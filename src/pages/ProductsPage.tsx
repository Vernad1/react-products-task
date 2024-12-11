import { FC, useState } from "react";
import { useAppSelector } from "../hooks/redux.ts";
import { RootState } from "../store/store.ts";
import { ProductsList } from "../components/productsList/ProductsList.tsx";
import { AppLayout } from "../components/appLayout/AppLayout.tsx";
import { ProductsFilters } from "../components/productsHeader/ProductsFilters.tsx";
import {
  FilterOptions,
  SortOptions,
} from "../store/reducers/product/ProductSlice.ts";
import { Pagination } from "../components/pagination/Pagination.tsx";

export const ProductsPage: FC = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const products = useAppSelector((state: RootState) => state.products);

  const filter = useAppSelector((state: RootState) => state.products.filterBy);
  const sort = useAppSelector((state: RootState) => state.products.sortBy);

  const filteredProduct = () => {
    let filteredProducts = products.products;

    if (filter === FilterOptions.SAVED) {
      filteredProducts = filteredProducts.filter((product) => product.isLike);
    } else if (filter === FilterOptions.NOT_SAVED) {
      filteredProducts = filteredProducts.filter((product) => !product.isLike);
    }

    if (search.trim() !== "") {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filteredProducts;
  };
  const filteredAndSortedProduct = () => {
    let newProducts = filteredProduct();

    if (sort === SortOptions.ASC) {
      newProducts = [...newProducts].sort((a, b) => a.price - b.price);
      return newProducts;
    }

    if (sort === SortOptions.DESC) {
      return [...newProducts].sort((a, b) => b.price - a.price);
    }

    return newProducts;
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <AppLayout title={"Products"}>
      <ProductsFilters
        search={search}
        changeSearch={setSearch}
      ></ProductsFilters>
      {products.status === "failed" ? (
        "Что то пошло не так"
      ) : products.status === "loading" ? (
        "Загрузка"
      ) : (
        <>
          <ProductsList
            products={filteredAndSortedProduct().slice(
              (page - 1) * products.limit,
              page * products.limit
            )}
          />
          <Pagination
            currentPage={page}
            totalItems={filteredAndSortedProduct().length}
            itemsPerPage={products.limit}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </AppLayout>
  );
};
