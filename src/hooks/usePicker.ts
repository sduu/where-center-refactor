import { useReducer } from 'react';
import { PickerFormValue } from '../components/picker/PickerForm.type';

type ActionType =
  | {
      type: 'ADD';
      value: PickerFormValue<string>;
    }
  | { type: 'DELETE'; id: string };

const assertUnreachable = (param: never): never => {
  throw new Error(`알 수 없는 액션 타입입니다.`);
};

const pickerReducer = (state: PickerFormValue<string>[], action: ActionType): PickerFormValue<string>[] => {
  switch (action.type) {
    case 'ADD':
      const { value } = action;
      return [...state, value];

    case 'DELETE':
      const { id } = action;
      return state.filter(picker => picker.id !== id);

    default:
      return assertUnreachable(action);
  }
};

const usePicker = (initialState: PickerFormValue<string>[]) => {
  const [pickerList, dispatch] = useReducer(pickerReducer, initialState);

  const addPicker = (value: PickerFormValue<string>) => {
    dispatch({ type: 'ADD', value });
  };

  const deletePicker = (id: string) => {
    dispatch({ type: 'DELETE', id });
  };

  return { pickerList, addPicker, deletePicker };
};

export default usePicker;
