import { useRef, useState } from 'react';

export const useModal = <T extends HTMLElement>() => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleButtonRef = useRef<T>(null);

  const onToggleModalHandler = () => {
    setIsModalOpen(prev => !prev);

    if (isModalOpen) {
      toggleButtonRef?.current?.focus();
    }
  };

  return { isModalOpen, onToggleModalHandler, toggleButtonRef };
};
