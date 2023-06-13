import { ReactNode, createContext, useContext } from 'react';
import { PickerFormValue } from '../components/picker/PickerForm.type';
import usePicker from '../hooks/usePicker';

interface PickerProviderProps {
  children: ReactNode;
}

interface ContextType {
  pickerList: PickerFormValue<string>[];
  addPicker: (value: PickerFormValue<string>) => void;
  deleteTodo: (id: string) => void;
}

const PickerContext = createContext<ContextType>({} as ContextType);

export const PickerProvider = ({ children }: PickerProviderProps) => {
  const { pickerList, addPicker, deleteTodo } = usePicker([]);

  const value = { pickerList, addPicker, deleteTodo };

  return <PickerContext.Provider value={value}>{children}</PickerContext.Provider>;
};

export const usePickerContext = () => useContext(PickerContext);
