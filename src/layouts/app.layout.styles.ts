import { css } from '@emotion/css';

export const content = css`
  margin: 2rem;
`;

export const activeLink = css`
  padding: 1rem;
  background-color: #64B5F6;
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

export const inactiveLink = css`
  padding: 1rem;
  background-color: transparent;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #BBDEFB;
    color: black;
    text-decoration: none;
  }
`;
