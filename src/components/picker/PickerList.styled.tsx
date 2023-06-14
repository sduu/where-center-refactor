import styled from 'styled-components';
import { GAP } from '../../constants/styles.constant';

export const PickerListWrapper = styled.ul`
  display: flex;
  gap: ${GAP.sm};
  flex-direction: column;
  padding: ${GAP.sm} 0;
`;
