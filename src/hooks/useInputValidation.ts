import { ChangeEvent, useState } from 'react';
import { validations } from '../constants/validations';

interface ValidationState {
  isValid: boolean;
  errorMessage: string;
}

export const useInputValidation = (inputs: Record<string, string>) => {
  const [valid, setValid] = useState({});

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const isValid = validations[name].condition(value);
    const errorMessage = validations[name].message;

    setValid(prev => ({ ...prev, [name]: { isValid, errorMessage } }));
  };

  return { valid, onChangeHandler };
};
