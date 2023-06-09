import { InputProps } from '../input/Input.type';
import { LabelProps } from '../label/Label.type';

export interface InputGroupProps extends InputGroup, InputGroupStyle, InputProps, LabelProps {}

interface InputGroup {
  helpText?: string;
}

export interface InputGroupStyle {
  direction?: 'row' | 'col';
  isValid?: boolean | undefined;
}
