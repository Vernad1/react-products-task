import { FC } from "react";
import { IProduct } from "../../models/IProduct";
import styles from "./product.module.css";

interface Props {
  product: IProduct;
}

export const Product: FC<Props> = ({ product }) => {
  return (
    <div className={styles.product}>
      <img className={styles.productImage} src={product.images[0]}></img>
      <div className={styles.productInfo}>
        <div className={styles.productTitle}>{product.title}</div>
        <div className={styles.productDescription}>{product.description}</div>
      </div>
    </div>
  );
};
