import styled from 'styled-components';
import { BORDER_RADIUS } from '../../../constants/styles.constant';
import { ButtonStyle } from './Button.type';

export const ButtonWrapper = styled.button<ButtonStyle>`
  display: block;
  width: 100%;
  height: 5.6rem;
  border: 1px solid transparent;
  border-radius: ${BORDER_RADIUS.lg};

  ${({ size }) => size && `width: ${size};`}
  ${({ textColor }) => textColor && `textColor: ${textColor};`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
`;
