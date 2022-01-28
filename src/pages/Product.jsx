import styled from 'styled-components';
import { media } from '../responsive';
import { Add, Remove } from '@material-ui/icons';
import StyledButton from '../components/Button/Button';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cart-slice';
import MessageContext from '../components/MessageContext';
import { Custom } from './Custom';

import AppTabs from '../components/Products/AppTabs';

const ReviewWrapper = styled.div`
  padding: 30px;
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
  ${media({ padding: '30px 0px' })}
`;

const Image = styled.img`
  height: 100vh;
  object-fit: cover;
  ${media({ width: '100%', height: 'auto' })}
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
  margin: 5px 0;
  border-top: 0.5px solid var(--light-grey-color);
  width: 100%;
`;

const FilterContainer = styled.div`
  width: 100%;
  margin: 20px 0px;
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

const FilterColor = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 4px;
  border: 0.1px solid var(--light-grey-color);
  cursor: pointer;
  &:hover {
    opacity: 70%;
    transition: all 0.5s ease;
  }
  &:focus,
  &:target {
    border: 2px solid var(--sub-color-5);
    transition: all 0.5s ease;
    transform: scale(1.2);
  }
`;

const FilterSize = styled.select`
  margin-left: 20px;
  width: 100%;
  padding: 8px;
  font-size: 11px;
  border: 0.5px solid var(--light-grey-color);
  &:focus {
    outline: none;
  }
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
  border: 0.5px solid var(--light-grey-color);
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

const InfoControl = styled.div`
  display: flex;
  justify-content: space-between;
`;

const imagestyle = {
  height: '22vh',
  width: '13vw'
};

export const Product = () => {
  const dispatch = useDispatch();
  const addFlashMessage = useContext(MessageContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const [users, setUsers] = useState(null); // axios를 통해 json에서 데이터를 끄집어 내기 위한 곳
  const [custom, setCustom] = useState(false);
  const customNumber = useSelector(state => state.custom.uploadImage);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await Axios.get(`/${id}`);
        console.log('데이터', response.data);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = type => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    window.scroll(0, 0);
    addFlashMessage('장바구니에 담겼습니다!');
    dispatch(addToCart({ customNumber, quantity, color, size, ...product }));
  };

  // 리뷰
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsers(null);
        const response = await Axios.get(
          `http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/product-reviews/${id}`
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        // console.err(e);
      }
    };

    fetchUsers();
  }, []);

  const customLoad = () => {
    setCustom(!custom);
    console.log(custom);
  };

  return product.colors === undefined ? null : (
    <Container>
      {custom && <Custom></Custom>}
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.product}</Title>
          <InfoControl>
            <Price>
              {product.price}
              <Currency>원</Currency>
            </Price>
            <StyledButton
              style={{
                width: '60px',
                height: '22px',
                padding: '2px'
              }}
              onClick={() => customLoad()}
            >
              커스텀
            </StyledButton>
          </InfoControl>
          <FilterContainer>
            <Filter>
              <FilterTitle>색상</FilterTitle>
              {product.colors.color.map(c => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
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
          <AppTabs />

          <Underline />
          <ButtonHandle>
            <StyledButton
              onClick={() => handleAddToCart()}
              style={{
                backgroundColor: 'var(--back-color)',
                color: 'var(--main-color)',
                fontWeight: 600
              }}
            >
              ADD TO CART
            </StyledButton>
            <Link to='/cart'>
              <StyledButton>바로 구매하기</StyledButton>
            </Link>
          </ButtonHandle>
        </InfoContainer>
      </Wrapper>

      {users != null && (
        <ReviewWrapper>
          <div>
            <th>
              <p style={{ fontSize: '1rem', margin: '0', fontWeight: '400' }}>
                {' '}
                상품평{' '}
              </p>
            </th>
            <hr />

            <span>
              <Link to={`/reviewinsert/${id}`}>
                <StyledButton style={{ width: '30%' }}>
                  상품평 등록
                </StyledButton>
              </Link>
            </span>

            {users.reviews.map(user => (
              <>
                <td colspan='1'>
                  <span>
                    <td>
                      {' '}
                      <p>
                        {' '}
                        리뷰 번호 : {user.reviewsNumber} &nbsp; &nbsp; &nbsp;
                        &nbsp;{' '}
                      </p>{' '}
                    </td>
                    <img style={imagestyle} src={user.images.image} />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                </td>

                <td>
                  <h2>
                    <span> {user.title} </span>
                  </h2>

                  <span>
                    <h5>
                      <p> {user.content} </p>
                    </h5>
                  </span>
                </td>

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
