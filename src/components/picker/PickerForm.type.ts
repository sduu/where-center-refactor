import { Coordinate } from '../../utils/getAddress';

export interface PickerFormValue<T> {
  id?: string;
  name: T | undefined;
  address: T | undefined;
  coordinate: Coordinate;
}

export interface PickerFormDynamicObject {
  [key: string]: HTMLInputElement | null;
}
