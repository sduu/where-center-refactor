import { useRef, useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleButtonRef = useRef<HTMLElement | null>(null);

  const onToggleModalHandler = () => {
    setIsModalOpen(prev => !prev);

    if (isModalOpen) {
      toggleButtonRef?.current?.focus();
    }
  };

  return { isModalOpen, onToggleModalHandler, toggleButtonRef };
};
