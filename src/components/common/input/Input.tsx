import React from 'react';
import { InputWrapper } from './Input.styled';
import { InputProps } from './Input.type';

const Input = ({
  type,
  name,
  id,
  value,
  onChange,
  onClick,
  placeholder,
  required,
  disabled,
  isLoading,
  min,
  maxLength,
  readOnly,
  onFocus,
  onBlur,
  InputRef,
}: InputProps) => {
  return (
    <InputWrapper
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      required={required}
      disabled={disabled || isLoading}
      min={min}
      maxLength={maxLength}
      readOnly={readOnly}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={InputRef}
    />
  );
};

export default Input;
