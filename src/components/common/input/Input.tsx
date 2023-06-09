import React, { FocusEvent, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
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
  unit,
  isValid,
}: InputProps) => {
  const [isPasswordHide, setIsPasswordHide] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const onClickPasswordBtn = () => {
    setIsPasswordHide(prev => !prev);
  };

  const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(prev => !prev);
    onFocus && onFocus(e);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(prev => !prev);
    onBlur && onBlur(e);
  };

  return (
    <InputWrapper isFocused={isFocused}>
      <input
        type={type === 'password' && isPasswordHide ? 'text' : type}
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
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        ref={InputRef}
      />

      <div className='side-unit-wrapper'>
        {unit && <span className='unit'>{unit}</span>}

        {!isValid && isValid !== undefined && <RiErrorWarningLine size='17' color='#ff1111' />}

        {type === 'password' && (
          <button type='button' onClick={onClickPasswordBtn}>
            {isPasswordHide ? (
              <AiOutlineEye size='21' color='#999' />
            ) : (
              <AiOutlineEyeInvisible size='21' color='#999' />
            )}
          </button>
        )}
      </div>
    </InputWrapper>
  );
};

export default Input;
