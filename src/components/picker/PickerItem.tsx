import React from 'react';
import { COLOR } from '../../constants/styles.constant';
import { usePickerDispatchContext } from '../../context/pickerContext';
import Button from '../common/button/Button';
import { PickerFormValue } from './PickerForm.type';
import { PickerItemWrapper } from './PickerItem.styled';

const PickerItem = ({ picker }: { picker: PickerFormValue<string> }) => {
  const { deletePicker } = usePickerDispatchContext();

  const deleteClickHandler = () => {
    picker.id && deletePicker(picker.id);
  };

  return (
    <PickerItemWrapper>
      <dl className='user-data'>
        <div className='user-date-name'>
          <dt className='screen-out '>이름</dt>
          <dd>{picker.name}</dd>
        </div>
        <div className='user-data-address'>
          <dt className='screen-out '>주소</dt>
          <dd>{picker.address}</dd>
        </div>
      </dl>

      <div className='button-wrapper'>
        <Button type='button' onClick={deleteClickHandler} backgroundColor={COLOR.tertiary}>
          삭제
        </Button>
      </div>
    </PickerItemWrapper>
  );
};

export default PickerItem;
