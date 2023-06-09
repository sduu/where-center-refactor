import styled, { css } from 'styled-components';
import { BORDER_RADIUS, COLOR, FONTSIZE } from '../../../constants/styles.constant';
import { GAP } from '../../../constants/styles.constant';
import { InputStyle } from './Input.type';

export const InputWrapper = styled.div<InputStyle>`
  display: flex;
  position: relative;
  border: 1px solid ${COLOR.border};
  border-radius: ${BORDER_RADIUS.md};
  overflow: hidden;

  ${({ isFocused }) =>
    isFocused &&
    css`
      outline: 1px solid ${COLOR.primary};
      border-color: transparent;
    `}

  input {
    width: 100%;
    height: 5.4rem;
    padding: 0 ${GAP.sm};
    border: none;
    outline: none;
    color: ${COLOR.textMain};
    font-size: ${FONTSIZE.sm};

    ::placeholder {
      color: ${COLOR.placeholder};
    }

    :read-only {
      cursor: pointer;
    }
  }

  .side-unit-wrapper {
    display: flex;
    align-items: center;
    gap: ${GAP.sm};

    svg {
      display: block;
    }

    & > :last-child {
      margin-right: ${GAP.sm};
    }

    .unit {
      color: ${COLOR.textMain};
      font-size: ${FONTSIZE.sm};
    }
  }
`;
