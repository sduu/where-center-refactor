import { useEffect, useState } from 'react';

export const useOpenState = (isOpen: boolean, time: number) => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(isOpen);

    if (isVisible && !isOpen) {
      setIsAnimate(true);
      setTimeout(() => setIsAnimate(false), time);
    }
    return () => {
      setIsVisible(false);
    };
  }, [isVisible, isOpen, time]);

  return { isOpenState: isAnimate || isVisible };
};
