import { css } from "styled-components";

export const media = props => {
  return css`
    @media screen and (max-width: 768px) {
      ${props}
    }
  `;
};
