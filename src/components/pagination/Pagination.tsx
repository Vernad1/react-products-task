import React from "react";
import styles from "./pagination.module.css";
import { pagination } from "../../utils/pagination";

interface Props {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers: (number | string)[] = [];

  const createPageNumbers = () => {
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) {
        pageNumbers.push("...");
      }
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 2) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);
    }
  };

  createPageNumbers();

  const pageNumber = pagination(currentPage, totalItems, itemsPerPage);

  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);

    console.log(pageNumber);
  };

  return (
    <div className={styles.pagination}>
      {pageNumber.map((num) => {
        console.log(pageNumber);
        return (
          <button
            onClick={() =>
              num.is_interactive ? handlePageClick(Number(num.item)) : null
            }
            key={num.id}
            className={`${styles.paginationButton} ${
              currentPage === num.item ? styles.active : ""
            }`}
            disabled={num.item == "..."}
          >
            {num.item}
          </button>
        );
      })}
    </div>
  );
};
