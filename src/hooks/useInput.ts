import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

const useInput = <T>(
  initialState: T,
): {
  value: T;
  updateValue: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setValue: Dispatch<SetStateAction<T>>;
} => {
  const [value, setValue] = useState<T>(initialState);

  const updateValue = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      if (typeof initialState === 'boolean') {
        setValue(prev => !prev as T);
      } else if (typeof initialState === 'object') {
        setValue(prev => ({ ...(prev as T), [name]: value }));
      } else {
        setValue(value as T);
      }
    },
    [initialState],
  );

  return { value, updateValue, setValue };
};

export default useInput;
