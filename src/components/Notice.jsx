import { Close } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  color: white;
  font-size: 0.7rem;
  font-weight: 300;
  height: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CloseBtn = styled.div`
  display: flex;
  position: absolute;
  right: 1.5rem;
`;
const Notice = () => {
  return (
    <Container>
      5만원 이상 구매시 무료배송 이벤트!
      <CloseBtn>
        <Close style={{ fontSize: 12, cursor: "pointer" }} />
      </CloseBtn>
    </Container>
  );
};

export default Notice;
