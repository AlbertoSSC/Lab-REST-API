import { css } from '@emotion/css';
import { theme } from 'core';

export const root = css`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin-top: 2rem;

  @media (min-width: 600px) {
    justify-items: center;
  }
`;

