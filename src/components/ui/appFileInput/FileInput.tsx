import React, { FC } from "react";
import styles from "./fileInput.module.css";

interface Props {
  title: string;
  changeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput: FC<Props> = ({ title, changeFunction }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={title}>{title}</label>
      <input
        className={styles.input}
        name={title}
        type="file"
        placeholder={title}
        id={title}
        onChange={changeFunction}
      ></input>
    </div>
  );
};
