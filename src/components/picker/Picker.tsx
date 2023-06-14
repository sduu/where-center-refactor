import React from 'react';
import { PickerWrapper } from './Picker.styled';
import PickerForm from './PickerForm';
import PickerList from './PickerList';

const Picker = () => {
  return (
    <PickerWrapper>
      <PickerForm />
      <PickerList />
    </PickerWrapper>
  );
};

export default Picker;
