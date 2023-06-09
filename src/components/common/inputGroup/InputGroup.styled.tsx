import styled from 'styled-components';
import { COLOR, FONTSIZE, GAP } from '../../../constants/styles.constant';
import { InputGroupStyle } from './InputGroup.type';

export const InputGroupWrapper = styled.div<InputGroupStyle>`
  display: flex;
  justify-content: center;
  gap: 8px;

  ${({ direction }) => direction !== 'row' && `flex-direction: column;`}

  .text-help {
    color: ${COLOR.textError};
    font-size: ${FONTSIZE.sm};

    ${({ isValid }) => (isValid || isValid === undefined) && `opacity: 0;`}
  }
`;
