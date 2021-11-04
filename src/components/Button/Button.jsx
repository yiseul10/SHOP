import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 0.8rem;
  text-align: center;
  background-color: black;
  color: white;
  border-radius: 1rem;
  margin: 0;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 85%;
    transition: all 0.2ms ease;
  }
`;

export default StyledButton;
