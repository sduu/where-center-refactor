import styled from 'styled-components';
import { BORDER_RADIUS, COLOR, FONTSIZE } from '../../constants/styles.constant';

export const CustomOverlayStyle = styled.div`
  padding: 4px;
  border-radius: ${BORDER_RADIUS.sm};
  text-align: center;
  color: ${COLOR.textMain};
  font-size: ${FONTSIZE.base};
  background-color: ${COLOR.backgroundSection};
`;
