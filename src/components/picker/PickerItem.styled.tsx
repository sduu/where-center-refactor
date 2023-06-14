import styled from 'styled-components';
import { COLOR, FONTSIZE, GAP } from '../../constants/styles.constant';

export const PickerItemWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: ${GAP.sm};

  & + li {
    border-top: 1px solid ${COLOR.border};
  }

  .user-data {
    flex: 1 1 auto;

    .user-date-name {
      margin-bottom: 4px;
      font-size: ${FONTSIZE.base};
      color: ${COLOR.textMain};
    }

    .user-data-address {
      font-size: ${FONTSIZE.sm};
      color: ${COLOR.textSub};
    }
  }

  .button-wrapper {
    flex: 0 0 60px;
  }
`;
