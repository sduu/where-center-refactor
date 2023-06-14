import { ReactNode, createContext, useContext } from 'react';
import { PickerFormValue } from '../components/picker/PickerForm.type';
import usePicker from '../hooks/usePicker';

interface PickerProviderProps {
  children: ReactNode;
}

interface ContextStateType {
  pickerList: PickerFormValue<string>[];
}

interface ContextDispatchType {
  addPicker: (value: PickerFormValue<string>) => void;
  deletePicker: (id: string) => void;
}

const PickerStateContext = createContext<ContextStateType>({} as ContextStateType);
const PickerDispatchContext = createContext<ContextDispatchType>({} as ContextDispatchType);

export const PickerProvider = ({ children }: PickerProviderProps) => {
  const { pickerList, addPicker, deletePicker } = usePicker([]);

  return (
    <PickerStateContext.Provider value={{ pickerList }}>
      <PickerDispatchContext.Provider value={{ addPicker, deletePicker }}>{children}</PickerDispatchContext.Provider>
    </PickerStateContext.Provider>
  );
};

export const usePickerStateContext = () => useContext(PickerStateContext);
export const usePickerDispatchContext = () => useContext(PickerDispatchContext);
