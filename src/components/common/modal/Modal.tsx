import React, { useEffect, useRef } from 'react';
import { ANIMATION_DURATION } from '../../../constants/styles.constant';
import { useOpenState } from '../../../hooks/useOpenState';
import Button from '../button/Button';
import Portal from '../portal/Portal';
import { ModalWrapper } from './Modal.styled';
import { ModalProps } from './Modal.type';

const Modal = ({ isOpen, onClickToggle, onClickConfirm, children }: ModalProps) => {
  const { isOpenState } = useOpenState(isOpen, ANIMATION_DURATION.modal);
  const modalRef = useRef<HTMLDivElement>(null);

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  const onClickConfirmHandle = () => {
    onClickToggle && onClickToggle();
    if (onClickConfirm) onClickConfirm();
  };

  const onKeyDownToggleHandle = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      modalRef?.current?.focus();
    }
  };

  useEffect(() => {
    if (!isOpenState) return;
    modalRef?.current?.focus();
  }, [isOpenState]);

  return isOpenState ? (
    <Portal>
      <ModalWrapper onClick={onClickToggle}>
        <div
          className={`modal ${isOpen ? 'is-open' : 'is-close'}`}
          onClick={stopPropagation}
          ref={modalRef}
          tabIndex={0}
        >
          <div className='modal-content-container'> {children}</div>
          <div className='modal-button-container'>
            {onClickConfirm ? (
              <>
                <Button type='button' onClick={onClickToggle}>
                  취소
                </Button>
                <Button type='button' onClick={onClickConfirmHandle} onKeyDown={onKeyDownToggleHandle}>
                  확인
                </Button>
              </>
            ) : (
              <Button type='button' onClick={onClickToggle} onKeyDown={onKeyDownToggleHandle}>
                취소
              </Button>
            )}
          </div>
        </div>
      </ModalWrapper>
    </Portal>
  ) : null;
};
export default Modal;
