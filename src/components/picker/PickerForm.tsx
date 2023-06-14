import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { COLOR } from '../../constants/styles.constant';
import { usePickerDispatchContext } from '../../context/pickerContext';
import useInput from '../../hooks/useInput';
import { useInputValidation } from '../../hooks/useInputValidation';
import { useModal } from '../../hooks/useModal';
import usePostCode from '../../hooks/usePostCode';
import Button from '../common/button/Button';
import InputGroup from '../common/inputGroup/InputGroup';
import Modal from '../common/modal/Modal';
import { PickerFormWrapper } from './PickerForm.styled';
import { PickerFormDynamicObject, PickerFormValue } from './PickerForm.type';

const PickerForm = () => {
  const { addPicker } = usePickerDispatchContext();

  const InputRefs = useRef<PickerFormDynamicObject>({});

  const { value: nameValue, updateValue: updateNameValue, setValue: setNameValue } = useInput('');
  const { valid, checkValidation, setValidation, resetValidation } = useInputValidation(['name', 'address']);
  const { isModalOpen, onToggleModalHandler, toggleButtonRef } = useModal<HTMLInputElement>();
  const { addrValue, handleComplete, setAddrValue } = usePostCode((addrValue: string) => {
    onToggleModalHandler();
    checkValidation('address', addrValue, true);
  });

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isRequired = e.target.getAttribute('required') !== null;

    updateNameValue(e);
    checkValidation(name, value, isRequired);
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newId = crypto.randomUUID() as string;
    const newPicker: PickerFormValue<string> = { id: newId, name: nameValue, address: addrValue };
    const _valid = Object.entries(valid);

    for (let i = 0; i < _valid.length; i++) {
      const [name] = _valid[i];

      if (valid[name].isValid === undefined) {
        setValidation(name, false);
      }

      if (!valid[name].isValid) {
        alert(valid[name].errorMessage);
        InputRefs?.current[name]?.focus();
        return;
      }
    }

    addPicker(newPicker);
    setNameValue('');
    setAddrValue('');
    resetValidation();

    alert('추가완료');
  };

  const onInvalidHandler = (e: FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    const isRequired = (e.target as HTMLInputElement).getAttribute('required') !== null;

    checkValidation(name, value, isRequired);
  };

  useEffect(() => {
    InputRefs.current.address = toggleButtonRef.current;
  }, [toggleButtonRef]);

  return (
    <>
      <PickerFormWrapper onSubmit={formSubmitHandler} onInvalid={onInvalidHandler}>
        <InputGroup
          type='text'
          name='name'
          placeholder='이름을 입력해주세요.'
          labelText='이름'
          value={nameValue}
          onChange={nameChangeHandler}
          helpText={valid?.name?.errorMessage}
          isValid={valid?.name?.isValid}
          id='inpName'
          InputRef={el => (InputRefs.current.name = el)}
          required={true}
        />
        <InputGroup
          type='text'
          name='address'
          value={addrValue}
          placeholder='주소를 검색하세요.'
          readOnly={true}
          onClick={onToggleModalHandler}
          labelText='주소'
          helpText={valid?.address?.errorMessage}
          isValid={valid?.address?.isValid}
          id='inpAddress'
          InputRef={toggleButtonRef}
          required={true}
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
