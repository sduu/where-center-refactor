import React from 'react';
import { ButtonWrapper } from './Button.styled';
import { ButtonProps } from './Button.type';

const Button = ({
  type,
  children,
  onClick,
  onKeyDown,
  disabled,
  btnRef,
  size,
  textColor,
  borderColor,
  backgroundColor,
  isLoading,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      type={type}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled || isLoading}
      ref={btnRef}
      size={size}
      textColor={textColor}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
