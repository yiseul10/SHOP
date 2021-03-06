import styled from 'styled-components';
import { media } from '../responsive';
import { Add, Remove } from '@material-ui/icons';
import StyledButton from '../components/Button/Button';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useContext } from 'react';
import { addWish } from '../store/wish-slice';
import MessageContext from '../components/MessageContext';
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart
} from '../store/cart-slice';

const Container = styled.div`
  padding: 13rem 10rem;
  font-size: 11px;
  ${media({ padding: '150px 25px 80px 25px' })}
`;
const Wrapper = styled.div`
  display: flex;
  ${media({ flexDirection: 'column' })}
`;
const Message = styled.div`
  text-align: center;
`;
const Left = styled.div`
  flex: 3;
`;
const LeftSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Product = styled.div`
  display: flex;
  padding: 2rem 0rem;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 140px;
  height: 170px;
  object-fit: cover;
  ${media({ margin: '16px 0px' })}
`;
const Details = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const Title = styled.div`
  font-weight: 500;
  ${media({ marginTop: '30px' })}
`;

const ProductColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 0.1px solid var(--light-grey-color);
`;
const PriceDetail = styled.div`
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin: 2rem 0rem;
`;
const ProductAmount = styled.div`
  margin: 0rem 0.5rem;
  font-size: 11px;
`;
const Hr = styled.hr`
  background-color: var(--main-line-color);
  border: none;
  height: 1px;
`;
const MediaLine = styled.hr`
  background-color: var(--main-line-color);
  border: none;
  height: 1px;
  display: none;
  ${media({ display: 'block', marginTop: '9px' })}
`;
const Right = styled.div`
  flex: 2;
  margin-left: 5rem;
  ${media({ margin: '0' })}
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.2rem;
  font-weight: ${props => props.type === 'total' && '500'};
  ${media({ margin: '5px 0px' })}
`;
const SummaryItemText = styled.div`
  padding: 1rem 0rem;
  ${media({ padding: '0.5rem 0rem' })}
`;
const Pointer = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin-top: 1.8rem;
`;
const DeleteAll = styled.div`
  cursor: pointer;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
const Total = styled.div`
  padding: 2rem 0rem;
  ${media({ padding: '1rem 0rem' })}
`;

export const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const addFlashMessage = useContext(MessageContext);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleDecreaseCart = product => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = product => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleAddToWish = product => {
    addFlashMessage('?????????????????? ???????????????!');
    dispatch(addWish(product));
  };
  const handleIncreaseCart = product => {
    dispatch(addToCart(product));
  };
  const shippingCost = cart.total >= 50000 ? 0 : 2500;

  return (
    <Container>
      {cart.products.length === 0 ? (
        <Message>??????????????? ???????????????.</Message>
      ) : (
        <Wrapper>
          <Left>
            <LeftSection>
              <Title>?????????({cart.quantity})</Title>
              <DeleteAll onClick={handleClearCart}>????????????</DeleteAll>
            </LeftSection>
            <MediaLine />
            {cart.products.map(product => (
              <div id={product.id} key={product.index}>
                <Product>
                  <ProductDetail>
                    <Image src={product.image} />
                    <Details>
                      <div>
                        <Link to={`/${product.id}`}>
                          <b>{product.product}</b>
                        </Link>
                        <p>{product.kind}</p>
                      </div>
                      <div>?????????: {product.size}</div>
                      <ProductColor color={product.color} />
                      <Pointer onClick={() => handleAddToWish(product)}>
                        ?????????????????? ??????
                      </Pointer>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <AmountContainer>
                      <Remove
                        style={{ fontSize: '11px' }}
                        onClick={() => handleDecreaseCart(product)}
                      />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Add
                        style={{ fontSize: '11px' }}
                        onClick={() => handleIncreaseCart(product)}
                      />
                    </AmountContainer>
                    <p>{product.price * product.quantity}???</p>
                    <Pointer onClick={() => handleRemoveFromCart(product)}>
                      ??????
                    </Pointer>
                  </PriceDetail>
                </Product>
                <Hr />
              </div>
            ))}
          </Left>
          <Right>
            <Title>?????? </Title>
            <MediaLine />
            <Total>
              <SummaryItemText>
                <SummaryItem>
                  <span>??????</span>
                  <span>{cart.total}???</span>
                </SummaryItem>
                <SummaryItem>
                  <span>?????????</span>
                  <span>{shippingCost}???</span>
                </SummaryItem>
              </SummaryItemText>
              <Hr />
              <SummaryItemText>
                <SummaryItem type='total'>
                  <span>??????</span>
                  <span>{cart.total + shippingCost}???</span>
                </SummaryItem>
              </SummaryItemText>
              <Link to='/checkout'>
                <StyledButton style={{ postion: 'relative' }}>
                  ??????????????? ??????
                </StyledButton>
              </Link>
            </Total>
          </Right>
        </Wrapper>
      )}
    </Container>
  );
};
