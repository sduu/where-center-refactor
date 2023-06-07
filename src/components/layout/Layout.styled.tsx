import styled from 'styled-components';
import { BORDER_RADIUS, BREAKPOINT, COLOR, GAP } from '../../constants/styles.constant';
import { smLayout } from '../../styles/GlobalMixin';

export const LayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${COLOR.background};

  .main-wrapper {
    max-width: ${BREAKPOINT.sm};
    width: 100%;
    min-height: 70vh;
    padding: ${GAP.md};
    border-radius: ${BORDER_RADIUS.md};
    background-color: ${COLOR.backgroundSection};

    ${smLayout} {
      min-height: 100vh;
    }
  }
`;
