export interface ModalProps {
  isOpen: boolean;
  onClickToggle?: () => void;
  onClickConfirm?: () => void;
  children?: React.ReactNode;
}
