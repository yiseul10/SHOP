import styled from 'styled-components';

const Container = styled.div`
  background-color: black;
  color: white;
  font-size: 0.7rem;
  font-weight: 300;
  height: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const Notice = () => {
  return <Container>5만원 이상 구매시 무료배송 이벤트!</Container>;
};

export default Notice;
