import styled from 'styled-components';
import { BORDER_RADIUS, BREAKPOINT, COLOR, FONTSIZE, GAP } from '../../../constants/styles.constant';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    width: calc(100% - ${GAP.lg});
    max-width: calc(${BREAKPOINT.sm} - ${GAP.sm});
    max-height: calc(100vh - ${GAP.lg});
    padding: ${GAP.lg};
    border-radius: ${BORDER_RADIUS.md};
    font-size: ${FONTSIZE.base};
    background-color: #fff;
    transform: translateY(calc(100% + 30px));
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35);

    &.is-open {
      animation: slideIn 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35) 0s 1 normal forwards;
    }

    &.is-close {
      animation: slideOut 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35) 0s 1 normal forwards;
    }
  }

  .modal-content-container {
    max-height: 80vh;
    padding: ${GAP.sm};
    overflow-y: auto;
  }

  .modal-button-container {
    display: flex;
    margin-top: ${GAP.lg};
    border-top: 1px solid ${COLOR.border};

    button {
      margin-top: ${GAP.sm};
    }

    button + button {
      border-left: 1px solid ${COLOR.border};
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0%);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`;
