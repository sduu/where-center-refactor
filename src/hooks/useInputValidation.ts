import { useState } from 'react';
import { validations } from '../constants/validations';

interface ValidationState {
  isValid?: boolean | undefined;
  errorMessage: string;
}

export const useInputValidation = (inputNames: string[]) => {
  const initialState = inputNames.reduce((ac, cr) => {
    ac[cr] = {
      isValid: undefined,
      errorMessage:
        (validations[cr]?.required ? validations[cr]?.required.message : validations[cr].pattern?.message) || '',
    };
    return ac;
  }, {} as Record<string, ValidationState>);

  const [valid, setValid] = useState<Record<string, ValidationState>>(initialState);

  const checkValidation = (name: string, value: string, isRequired: boolean, confirm?: string) => {
    if (!validations[name]) {
      throw new Error('해당 name에 해당하는 유효성 검사 패턴이 존재하지 않습니다.');
    }

    if (name === 'password') {
      setValid(prev => ({
        ...prev,
        [name + 2]: {
          isValid: !!validations[name + 2].pattern?.condition(value, confirm),
          errorMessage: validations[name + 2].pattern?.message || '',
        },
      }));
    }

    if (!validations[name].required?.condition(value) && isRequired) {
      setValid(prev => ({ ...prev, [name]: { isValid: false, errorMessage: validations[name]?.required?.message } }));

      return;
    }

    if (validations[name].pattern) {
      setValid(prev => ({
        ...prev,
        [name]: {
          isValid: !!validations[name].pattern?.condition(value, confirm),
          errorMessage: validations[name].pattern?.message || '',
        },
      }));

      return;
    }

    setValid(prev => ({
      ...prev,
      [name]: {
        isValid: true,
        errorMessage: prev[name].errorMessage,
      },
    }));
  };

  const setValidation = (name: string, isValid: boolean) => {
    setValid(prev => ({
      ...prev,
      [name]: {
        isValid: isValid,
        errorMessage: prev[name].errorMessage,
      },
    }));
  };

  const resetValidation = () => {
    setValid(initialState);
  };

  return { valid, checkValidation, setValidation, resetValidation };
};
