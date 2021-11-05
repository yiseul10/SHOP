import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Notice from "../components/Notice";
import { media } from "../responsive";

import { Add, Remove } from "@material-ui/icons";
import StyledButton from "../components/Button/Button";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 75px 150px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 100vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 60px;
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
  return (
    <Container>
      <Notice />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>테이퍼드 진</Title>
          <Price>2000원</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>색상</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ fontSize: 15 }} />
              <Amount>1</Amount>
              <Add style={{ fontSize: 15 }} />
            </AmountContainer>
            <FilterSize>
              <FilterSizeOption selected>사이즈 선택</FilterSizeOption>
              <FilterSizeOption>S(85)</FilterSizeOption>
              <FilterSizeOption>M(90)</FilterSizeOption>
              <FilterSizeOption>L(95)</FilterSizeOption>
              <FilterSizeOption>XL(100)</FilterSizeOption>
              <FilterSizeOption>2XL(105)</FilterSizeOption>
              <FilterSizeOption>3XL(110)</FilterSizeOption>
            </FilterSize>
          </AddContainer>
          <ButtonHandle>
            <StyledButton
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
      <Footer />
    </Container>
  );
};
export default Product;
