import { css } from 'styled-components';

export const media = props => {
  return css`
    @media screen and (max-width: 768px) {
      ${props}
    }
  `;
};
export const mobile = props => {
  return css`
    @media screen and (max-width: 375px) {
      ${props}
    }
  `;
};
