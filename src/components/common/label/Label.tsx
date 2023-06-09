import React from 'react';
import { LabelWrapper } from './Label.styled';
import { LabelProps } from './Label.type';

const Label = ({ labelText, htmlFor, required }: LabelProps) => {
  return (
    <LabelWrapper htmlFor={htmlFor}>
      {labelText}
      {required && <span className='mark-required'>(필수 항목)</span>}
    </LabelWrapper>
  );
};

export default Label;
