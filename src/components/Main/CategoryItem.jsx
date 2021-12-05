import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../responsive';

import StyledButton from '../Button/Button';

const Container = styled.div`
  margin-bottom: 50px;
  position: relative;
`;

const Image = styled.img`
  width: 547.5px;
  height: 392px;
  object-fit: cover;
  &:hover {
    opacity: 70%;
    transition: all 0.5s ease;
  }
  ${media({ height: '20vh' })}
`;

const Info = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: -0.2px;
`;

const Desc = styled.div`
  font-weight: 100;
  font-family: 'Unna', serif;
  padding-top: 3px;
  font-size: 13px;
  letter-spacing: 1px;
  transform: translateX(-110px);
`;

const CategoryItem = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Link to={`/${item.cat}`}>
        <Image src={item.img} />
      </Link>
      <Info>
        <Title>{item.title}</Title>
        <Desc>21WINTER</Desc>
        <StyledButton
          style={{
            backgroundColor: 'white',
            color: 'black',
            width: '130px',
            height: '35px',
            border: '0.1px solid rgb(108, 108, 108)',
            fontWeight: '200'
          }}
        >
          NOW ON SALE
        </StyledButton>
      </Info>
    </Container>
  );
};

export default CategoryItem;
