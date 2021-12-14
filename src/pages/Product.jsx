import styled from 'styled-components';
import { media } from '../responsive';
import { Add, Remove } from '@material-ui/icons';
import StyledButton from '../components/Button/Button';

import Axios from 'axios';

import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart-slice';

import AppTabs from '../components/Products/AppTabs';

const ReviewWrapper = styled.div`
  padding: auto;
  background-color: whitesmoke;
  text-align: center;
`;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 150px;
  display: flex;
  ${media({ padding: '60px 0px', flexDirection: 'column' })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 100vh;
  object-fit: cover;
  ${media({ width: '100%' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 60px;
  ${media({ padding: '30px' })}
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 21px;
  margin-bottom: 4px;
  ${media({ fontSize: '18px' })}
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 18px;
  ${media({ fontSize: '16px' })}
`;

const Underline = styled.div`
  margin: 30px 0;
  border-top: 0.5px solid rgb(241, 239, 239);
  width: 100%;
`;

const FilterContainer = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
`;

const FilterTitle = styled.span`
  font-weight: 400;
  margin-right: 8px;
`;

const FilterColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 4px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 20px;
  width: 100%;
  padding: 8px;
  font-size: 11px;
  border: 0.5px solid rgb(241, 239, 239);
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 0.5px solid rgb(241, 239, 239);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;

const ButtonHandle = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Currency = styled.span`
  font-size: 12px;
  color: grey;
  letter-spacing: -0.5px;
  padding: 0.1rem;
`;

export const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState(''); // axios를 통해 json에서 데이터를 끄집어 내기 위한 곳
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await Axios.get(`/${id}`);
        // console.log('데이터', response.data);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsers(null);
        const response = await Axios.get(
          'http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/reviews'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        console.err(e);
      }
    };

    fetchUsers();
  }, []);
  const handleQuantity = type => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = product => {
    dispatch(addToCart({ ...product, quantity, color, size }));
  };

  return product.colors === undefined ? null : (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.product}</Title>
          <Price>{product.price}</Price>
          <Currency>원</Currency>
          <FilterContainer>
            <Filter>
              <FilterTitle>색상</FilterTitle>
              {product.colors.color.map(c => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <button>커스텀하기</button>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ fontSize: 15 }}
                onClick={() => handleQuantity('dec')}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ fontSize: 15 }}
                onClick={() => handleQuantity('inc')}
              />
            </AmountContainer>
            <FilterSize onChange={e => setSize(e.target.value)}>
              <FilterSizeOption defaultValue='default'>
                사이즈 선택
              </FilterSizeOption>
              {product.sizes.size.map(s => (
                <FilterSizeOption key={s}>{s}</FilterSizeOption>
              ))}
            </FilterSize>
          </AddContainer>
          <ButtonHandle>
            <StyledButton
              onClick={() => handleAddToCart(product)}
              style={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 600
              }}
            >
              ADD TO CART
            </StyledButton>
            <Link to='/cart'>
              <StyledButton>바로 구매하기</StyledButton>
            </Link>
          </ButtonHandle>
          <Underline />
          {/* <Desc> */}
          {/* <Details>Description</Details> */}
          {/* </Desc> */}
          <AppTabs />
        </InfoContainer>
      </Wrapper>

      {users != null && (
        <ReviewWrapper>
          <div>
            <th>
              {' '}
              <h2> 상품평 </h2>{' '}
            </th>
            <hr />
            {users.reviews.map(user => (
              <>
                <td colspan='2'>
                  <span>
                    <img
                      style={{ height: '15%', width: '15%' }}
                      src={user.images.image}
                    />
                  </span>
                </td>
                <td>
                  <span>
                    <p> {user.content} </p>
                  </span>
                </td>
                <Link to='/ReviewInsert'>
                  <button>상품평 등록</button>
                </Link>
                <hr />
                <br />
              </>
            ))}
          </div>
        </ReviewWrapper>
      )}
    </Container>
  );
};
