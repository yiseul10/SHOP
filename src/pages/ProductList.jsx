import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Notice from "../components/Notice";
import Products from "../components/Products";
import { media } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 250px 1fr 50px;
  ${media({
    display: "block",
    flexDirection: "space-between"
  })}
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: -0.5px;
  ${media({
    flexDirection: "row",
    borderBottom: "0.5px solid grey"
  })}
`;
const Filter = styled.div`
  padding-left: 50px;
  padding-right: 20px;
  width: 100%;
  font-size: 11px;
  font-weight: 600;
  ${media({
    padding: "20px",
    flexDirection: "space-between"
  })}
`;
const VerticalLine = styled.div`
  ${media({
    borderRight: "0.1px solid grey",
    width: "0.1px",
    height: "110px"
  })}
`;

const FilterText = styled.span``;

const Select = styled.select`
  display: block;
  width: 100%;
  margin: 10px 0;
  border: none;
  font-size: 11px;
  ${media({ display: "flex" })}
`;
const Option = styled.option``;
const Category = styled.div`
  height: 20vh;
  font-size: 25px;
  font-family: "Unna", serif;
  padding: 50px;
  ${media({
    borderBottom: "0.5px solid grey",
    textAlign: "center",
    height: "100%",
    padding: "10px",
    fontSize: "18px"
  })}
`;

const ProductList = () => {
  return (
    <Container>
      <Notice />
      <Navbar />
      <Category>Coat</Category>
      <Wrapper>
        <FilterContainer>
          <Filter>
            <FilterText>
              정렬
              <Select style={{ marginBottom: 20 }}>
                <Option disabled selected>
                  Featured
                </Option>
                <Option>신상품</Option>
                <Option>인기 상품</Option>
                <Option>낮은 가격순</Option>
                <Option>높은 가격순</Option>
              </Select>
            </FilterText>
          </Filter>
          <VerticalLine></VerticalLine>
          <Filter>
            <FilterText>
              전체 카테고리
              <Select>
                <Option disabled selected>
                  Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
              </Select>
              <Select>
                <Option disabled selected>
                  Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </FilterText>
          </Filter>
        </FilterContainer>
        <Products />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProductList;
