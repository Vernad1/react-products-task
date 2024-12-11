import React, { FC } from "react";
import styles from "./appButton.module.css";

interface Props {
  title: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

export const AppButton: FC<Props> = ({ title, handleClick, disabled }) => {
  return (
    <button className={styles.button} onClick={handleClick} disabled={disabled}>
      {title}
    </button>
  );
};
