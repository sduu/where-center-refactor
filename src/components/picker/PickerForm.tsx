import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { COLOR } from '../../constants/styles.constant';
import useInput from '../../hooks/useInput';
import { useModal } from '../../hooks/useModal';
import usePostCode from '../../hooks/usePostCode';
import Button from '../common/button/Button';
import InputGroup from '../common/inputGroup/InputGroup';
import Modal from '../common/modal/Modal';
import { PickerFormWrapper } from './PickerForm.styled';
import { PickerFormValue } from './PickerForm.type';

const PickerForm = () => {
  const { value: nameValue, updateValue: updateNameValue } = useInput('');
  const [isValid, setIsValid] = useState<PickerFormValue<boolean>>({ name: undefined, address: undefined });

  const { isModalOpen, onToggleModalHandler, toggleButtonRef } = useModal<HTMLInputElement>();
  const { addrValue, handleComplete } = usePostCode(onToggleModalHandler);

  const checkValid = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setIsValid(prev => ({ ...prev, [name]: value !== '' }));
  };

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateNameValue(e);
    checkValid(e);
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <PickerFormWrapper onSubmit={formSubmitHandler}>
        <InputGroup
          type='text'
          name='name'
          placeholder='이름을 입력해주세요.'
          labelText='이름'
          value={nameValue}
          onChange={nameChangeHandler}
          helpText='이름을 입력해주세요.'
          isValid={isValid.name}
          id='inpName'
        />
        <InputGroup
          type='text'
          name='address'
          value={addrValue}
          placeholder='주소를 검색하세요.'
          readOnly={true}
          onClick={onToggleModalHandler}
          InputRef={toggleButtonRef}
          labelText='주소'
          helpText='주소를 입력해주세요.'
          isValid={isValid.address}
          id='inpAddress'
        />

        <Button type='submit' size='base' borderColor={COLOR.primary}>
          추가하기
        </Button>
      </PickerFormWrapper>

      <Modal isOpen={isModalOpen} onClickToggle={onToggleModalHandler}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
    </>
  );
};

export default PickerForm;
