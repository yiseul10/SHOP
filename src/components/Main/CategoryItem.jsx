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
  ${media({ width: '100%', height: '333px', objectFit: 'cover' })}
`;
const InfoDetail = styled.div`
  display: flex;
`;
const Info = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
  ${media({ position: 'reltive' })}
`;

const Title = styled.h3`
  margin-bottom: 19px;
  font-weight: 300;
  letter-spacing: -0.2px;
  margin-right: 10px;
  ${media({ fontSize: '19px' })}
`;

const Desc = styled.p`
  font-weight: 100;
  font-family: 'Unna', serif;
  font-size: 12px;
  letter-spacing: 1px;
  /* position: relative; */
  /* transform: translateX(-110px); */
  ${media({ transform: 'translateY(-3px)' })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
      </Link>
      <Info>
        <InfoDetail>
          <Title>{item.title}</Title>
          <Desc>21WINTER</Desc>
        </InfoDetail>
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
