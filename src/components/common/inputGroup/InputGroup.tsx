import React from 'react';
import Input from '../input/Input';
import Label from '../label/Label';
import { InputGroupWrapper } from './InputGroup.styled';
import { InputGroupProps } from './InputGroup.type';

const InputGroup = ({
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
  labelText,
  htmlFor,
  helpText,
  isValid,
  direction,
}: InputGroupProps) => {
  return (
    <InputGroupWrapper direction={direction} isValid={isValid}>
      <Label labelText={labelText} htmlFor={id} required={required} />
      <Input
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
        InputRef={InputRef}
        isValid={isValid}
      />
      <em className='text-help' aria-hidden={isValid}>
        {helpText}
      </em>
    </InputGroupWrapper>
  );
};

export default InputGroup;
