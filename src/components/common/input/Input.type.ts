import { ChangeEvent, FocusEvent, MouseEvent, RefObject } from 'react';

export interface InputProps {
  type: string;
  value?: string | number | ReadonlyArray<string>;
  name?: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  InputRef?: RefObject<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  readOnly?: boolean;
  min?: number;
  maxLength?: number;
}
