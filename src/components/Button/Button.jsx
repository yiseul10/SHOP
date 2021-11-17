import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 0.8rem;
  text-align: center;
  background-color: black;
  color: white;
  border-radius: 1.6rem;
  margin: 0;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 2.8rem;
  padding: 5px;
  &:hover {
    opacity: 85%;
    transition: all 0.2ms ease;
  }
`;

export default StyledButton;
