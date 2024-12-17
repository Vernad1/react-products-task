import styles from "./productHeader.module.css";
import { useNavigate } from "react-router-dom";

export const ProductHeader = () => {
  const nav = useNavigate();
  return (
    <div className={styles.productHeader}>
      <button
        onClick={() => nav("/react-products-task/products")}
        className={styles.headerBackButton}
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          />
          <path
            fill="#000000"
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
          />
        </svg>
        Назад
      </button>
    </div>
  );
};
