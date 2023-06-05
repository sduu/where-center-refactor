import { css } from 'styled-components';
import { BREAKPOINT } from '../constants/styles.constant';

export const oneLineEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const multiLineEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const smLayout = `
  @media screen and (max-width: ${BREAKPOINT.sm})
`;
