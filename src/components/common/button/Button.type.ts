import { KeyboardEvent, MouseEvent, ReactNode, RefObject } from 'react';

export interface ButtonProps extends ButtonStyle, Button {}

export interface ButtonStyle {
  size?: 'lg' | 'md' | 'base' | 'sm';
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
}

interface Button {
  type: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  btnRef?: RefObject<HTMLButtonElement>;
  isLoading?: boolean;
}
