import { useEffect, useState } from "react";

export interface IValidations {
  maxLength: number;
  minLength: number;
}

export const useValidation = (value: string, validations: IValidations) => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (value) {
      setIsError(false);

      if (value.length > validations.maxLength) {
        setIsError(true);
        setErrorMessage("Слишком много символов");
        return;
      } else {
        setIsError(false);
      }

      if (value.length < validations.minLength) {
        setIsError(true);
        setErrorMessage("Слишком мало символов");
        return;
      } else {
        setIsError(false);
      }
    } else {
      setIsError(true);
      setErrorMessage("Поле не может быть пустым");
    }
  }, [validations.maxLength, validations.minLength, value]);

  return {
    isError,
    errorMessage,
  };
};
