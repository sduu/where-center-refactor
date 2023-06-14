import React from 'react';
import { usePickerStateContext } from '../../context/pickerContext';
import PickerItem from './PickerItem';
import { PickerListWrapper } from './PickerList.styled';

const PickerList = () => {
  const { pickerList } = usePickerStateContext();

  return (
    <PickerListWrapper>
      {pickerList.map(picker => (
        <PickerItem key={picker.id} picker={picker} />
      ))}
    </PickerListWrapper>
  );
};

export default PickerList;
