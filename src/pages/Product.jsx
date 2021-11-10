import styled from "styled-components";

import { media } from "../responsive";

import { Add, Remove } from "@material-ui/icons";
import StyledButton from "../components/Button/Button";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 150px;
  display: flex;
  ${media({ padding: "0px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 100vh;
  object-fit: cover;
  ${media({ width: "100%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 60px;
  ${media({ padding: "30px" })}
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 21px;
  margin-bottom: 4px;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 18px;
`;

const Underline = styled.p`
  margin: 20px 0;
  border-top: 0.5px solid rgb(241, 239, 239);
  width: 100%;
`;

const Desc = styled.p`
  font-size: 11px;
  font-weight: 500;
  justify-content: flex-start;
  &:hover {
    cursor: pointer;
    opacity: 85%;
    transition: all 0.2ms ease;
  }
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
  width: 20px;
  height: 20px;
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
  /* border-radius: 8px; */
  border: 0.5px solid rgb(241, 239, 239);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;

const Details = styled.span`
  margin-right: 2rem;
`;

const ButtonHandle = styled.div`
  width: 100%;
  padding: 5px;
  margin: 16px 0;
  height: 2.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-column-start: 2; */
`;
const Info = styled.div`
  font-size: 11px;
  margin-top: 10px;
  line-height: 20px;
`;

const Product = () => {
  const { id } = useParams();

  const [products, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://pvpvpvpvp.gonetis.com:8080/sample/products/${id}`
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (e) {}
    };
    getProduct();
  }, []);
  if (!products) return null;

  console.log(products.id);
  const handleQuantity = type => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    // update cart (redux)
  };
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={products.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{products.product}</Title>
          <Price>{products.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>색상</FilterTitle>
              {products.colors.color.map(c => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ fontSize: 15 }}
                onClick={() => handleQuantity("dec")}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ fontSize: 15 }}
                onClick={() => handleQuantity("inc")}
              />
            </AmountContainer>
            <FilterSize onChange={e => setSize(e.target.value)}>
              <FilterSizeOption selected>사이즈 선택</FilterSizeOption>
              {products.sizes.size.map(s => (
                <FilterSizeOption key={s}>{s}</FilterSizeOption>
              ))}
            </FilterSize>
          </AddContainer>
          <ButtonHandle>
            <StyledButton
              onClick={handleClick}
              style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: 600
              }}
            >
              ADD TO CART
            </StyledButton>
            <StyledButton>바로 구매하기</StyledButton>
          </ButtonHandle>
          <Underline />
          <Desc>
            <Details>Description</Details>
            <Details>Details</Details>
            <Details>Care</Details>
            <Details>Etc</Details>

            <Info>
              자수/패치만 가능. 가볍지만 따뜻한 소재의 가디건입니다. 코트안에
              착용하거나 환절기 시즌에 단독으로 착용하기 좋습니다. 소재:
              아크릴90%, 레이온 10% 제조국: 한국
            </Info>
          </Desc>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};
export default Product;
