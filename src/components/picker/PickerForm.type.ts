export interface PickerFormValue<T> {
  id?: string;
  name: T | undefined;
  address: T | undefined;
}

export interface PickerFormDynamicObject {
  [key: string]: HTMLInputElement | null;
}
