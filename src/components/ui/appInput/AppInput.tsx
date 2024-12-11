import React, { FC } from "react";
import styles from "./appInput.module.css";

interface Props {
  title: string;
  inputState: {
    isError: boolean;
    errorMessage: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    isDirty: boolean;
  };
}

export const AppInput: FC<Props> = ({ inputState, title }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={title}>{title}:</label>
      <input
        className={styles.input}
        name={title}
        type="text"
        placeholder={title}
        id={title}
        value={inputState.value}
        onChange={(e) => inputState.onChange(e)}
        onBlur={inputState.onBlur}
      ></input>
      {inputState.isDirty && inputState.isError && (
        <div className={styles.inputError}>{inputState.errorMessage}</div>
      )}
    </div>
  );
};
