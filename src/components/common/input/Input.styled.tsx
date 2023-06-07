import styled from 'styled-components';
import { BORDER_RADIUS, COLOR, FONTSIZE } from '../../../constants/styles.constant';
import { GAP } from '../../../constants/styles.constant';

export const InputWrapper = styled.input`
  width: 100%;
  height: 5.4rem;
  border: 1px solid ${COLOR.border};
  padding: 0 ${GAP.sm};
  border-radius: ${BORDER_RADIUS.md};
  color: ${COLOR.textMain};
  font-size: ${FONTSIZE.sm};

  ::placeholder {
    color: ${COLOR.placeholder};
  }

  :read-only {
    cursor: pointer;
  }
`;
